import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";
import { lightOrDark } from "../../05_utilities";

import Heading from "../../01_arrangements/heading";
import Paragraph from "../../01_arrangements/paragraph";

const PageSection = (props) => {
	const headingAlignment = props.headingAlignment || "center";

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`page-section ${props.classes}`}
		>
			<div className='page-section_inner'>
				{(() => {
					if (props.heading) {
						return (
							<div className='page-section_heading-container'>
								<Heading
									level='2'
									alignment={headingAlignment}
									className='page-section_title'
								>
									{props.heading}
								</Heading>

								{(() => {
									if (props.subheading) {
										return (
											<Paragraph
												level='1'
												alignment={headingAlignment}
												className='page-section_subtitle'
											>
												{props.subheading}
											</Paragraph>
										);
									}
								})()}
							</div>
						);
					}
				})()}
				{props.children}
			</div>
		</El>
	);
};

const El = styled.section`
	background: ${(props) => props.backgroundColor};
	padding: var(--spacing-double) var(--spacing-full) var(--spacing-triple)
		var(--spacing-full);

	${(props) => {
		if (
			props.backgroundColor &&
			lightOrDark(props.backgroundColor) === "dark"
		) {
			return css`
				color: var(--text-color-light);
			`;
		}
	}};

	.page-section_heading-container {
		max-width: var(--maximum-page-width);
		margin: 0 auto;
		padding-bottom: var(--spacing-double);
	}

	.page-section_title {
		padding-bottom: var(--spacing-half);
	}

	.page-section_subtitle {
		padding-bottom: var(--spacing-full);
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
		padding: var(--spacing-triple) var(--spacing-full)
			var(--spacing-quadruple) var(--spacing-full);
		min-height: 50vh;
		display: table;
		width: 100%;

		.page-section_inner {
			height: 100%;
			display: table-cell;
			vertical-align: middle;
		}

		.page-section_subtitle {
			padding-bottom: var(--spacing-double);
		}

		${(props) =>
			props.variant === "full-page" &&
			css`
				min-height: 100vh;
			`}
	}

	${(props) =>
		props.backgroundImage &&
		css`
			background-image: url(${props.backgroundImage});
			background-size: cover;
			background-position: center center;
			color: var(--text-color-light);
			position: relative;

			.page-section_inner {
				position: relative;
				z-index: 2;
			}

			&:before {
				content: "";
				display: block;
				background: radial-gradient(
					circle,
					rgba(0, 0, 0, 0.1) 0%,
					rgba(0, 0, 0, 0.5) 100%
				);
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;
			}
		`}
`;

export default PageSection;

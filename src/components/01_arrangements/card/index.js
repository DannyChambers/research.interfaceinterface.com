import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";
import { lightOrDark } from "../../05_utilities";

import Heading from "../../01_arrangements/heading";
import Icon from "../../02_patterns/icon";

const Card = (props) => {
	const tag = props.href ? "a" : "div";
	const headingLevel = props.level || "2";

	return (
		<El
			as={tag}
			{...props}
			data-testid='123abc'
			className={`page-section ${props.classes}`}
		>
			{(() => {
				if (props.icon) {
					return (
						<div className='card-icon'>
							<Icon graphic={props.icon} size='xlarge' />
						</div>
					);
				}
			})()}

			{(() => {
				if (props.heading) {
					return (
						<div className='card-heading'>
							<Heading
								level={headingLevel}
								appearance='4'
								alignment='center'
							>
								{props.heading}
							</Heading>
						</div>
					);
				}
			})()}

			<div className='card-content'>{props.children}</div>
		</El>
	);
};

const El = styled.div`
	background: ${(props) => props.backgroundColor};
	border: 1px solid var(--border-color-1);
	border-radius: var(--radius-full);
	padding-top: var(--spacing-double);
	height: 100%; //Tentative move towards equal heights for all cards in a grid as standard.

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

	${(props) =>
		props.href &&
		css`
			display: block;
			cursor: pointer;
			text-decoration: none;
			color: inherit;
			transition: border-color var(--transition-full) ease-in-out;

			&:hover,
			&:active {
				border-color: var(--cta-primary--active);
			}
		`}

	.card-icon {
		padding: 0 var(--spacing-double) var(--spacing-double)
			var(--spacing-double);

		.icon {
			width: 100%;
		}
	}

	.card-heading {
		padding: 0 var(--spacing-double) var(--spacing-double)
			var(--spacing-double);

		.heading {
			padding-bottom: 0;
		}
	}

	.card-content {
		padding: 0 var(--spacing-double) var(--spacing-double)
			var(--spacing-double);
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
	}
`;

export default Card;

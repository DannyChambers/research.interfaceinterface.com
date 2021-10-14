import React from "react";
import styled, { css } from "styled-components";

import Paragraph from "../../01_arrangements/paragraph/";

const SiteFooter = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`site-footer ${props.classes}`}
		>
			{props.children}
			<Paragraph level='3' alignment='center'>
				Est. 2021
			</Paragraph>
		</El>
	);
};

const El = styled.div`
	background: var(--brand-color-1);
	padding: var(--spacing-double);
	color: var(--text-color-light);

	.list {
		text-align: center;
		padding-bottom: var(--spacing-full);

		li {
			display: inline-block;
			line-height: var(--sizing-half);
			margin: 0 var(--spacing-half);

			.link {
				color: var(--text-color-light);
				text-decoration-color: var(--text-color-light);

				&:hover {
					text-decoration-color: transparent;
				}
			}
		}
	}

	.paragraph {
		padding: 0;
	}
`;

export default SiteFooter;

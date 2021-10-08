import React from "react";
import styled, { css } from "styled-components";

const Link = (props) => {
	let target;

	if (props.newwindow) {
		target = "_blank";
	} else {
		target = "parent";
	}

	return (
		<El
			{...props}
			data-testid='123abc'
			target={target}
			className={`link ${props.classes}`}
		>
			{props.children}
		</El>
	);
};

const El = styled.a`
	font-family: var(--regular-font);
	color: var(--cta-primary);
	text-decoration: underline;
	text-decoration-color: var(--cta-primary);
	transition: text-decoration-color 0.4s ease-in-out;
	cursor: pointer;

	&:hover,
	&:active {
		text-decoration-color: transparent;
	}

	${(props) =>
		props.variant === "standalone" &&
		css`
			display: block;
			text-decoration-color: transparent;
			font-size: var(--text-size-6);
			line-height: var(--line-height-6);

			&:hover,
			&:active {
				text-decoration-color: var(--cta-primary);
			}
		`}
`;

export default Link;

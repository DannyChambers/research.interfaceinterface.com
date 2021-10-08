import React from "react";
import styled, { css } from "styled-components";

const Paragraph = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`paragraph ${props.classes}`}
		>
			{props.children}
		</El>
	);
};

const El = styled.p`
	font-family: var(--regular-font);
	padding-bottom: var(--spacing-full);
	text-align: ${(props) => props.alignment};
	max-width: 75ch; //Max 75 characters for optimum readability

	${(props) =>
		props.alignment === "center" &&
		css`
			margin: 0 auto; //If the paragraph is aligned center we need to align the object aswell as the text itself, as we have limited the width for optimum readabilty.
		`}

	${(props) =>
		props.alignment === "right" &&
		css`
			margin: 0 0 0 auto; //If the paragraph is aligned right we need to align the object aswell as the text itself, as we have limited the width for optimum readabilty.
		`}

	${(props) =>
		props.level === "1" &&
		css`
			font-size: var(--text-size-6);
			line-height: var(--line-height-6);
			padding-bottom: var(--spacing-double);
		`}

	${(props) =>
		props.level === "2" &&
		css`
			font-size: var(--text-size-7);
			line-height: var(--line-height-7);
		`}

	${(props) =>
		props.level === "3" &&
		css`
			font-size: var(--text-size-8);
			line-height: var(--line-height-8);
		`}
`;

export default Paragraph;

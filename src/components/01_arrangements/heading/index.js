import React from "react";
import styled, { css } from "styled-components";

const Heading = (props) => {
	const tag = props.level ? `h${props.level}` : "h1";

	return (
		<El
			as={tag}
			{...props}
			data-testid='123abc'
			className={`heading ${props.classes}`}
		>
			{props.children}
		</El>
	);
};

const El = styled.div`
	font-family: var(--bold-font);
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
			font-size: var(--text-size-1);
			line-height: var(--line-height-1);
			padding-bottom: var(--spacing-double);
		`}

	${(props) =>
		props.level === "2" &&
		css`
			font-size: var(--text-size-2);
			line-height: var(--line-height-2);
		`}

	${(props) =>
		props.level === "3" &&
		css`
			font-size: var(--text-size-3);
			line-height: var(--line-height-3);
		`}

	${(props) =>
		props.level === "4" &&
		css`
			font-size: var(--text-size-4);
			line-height: var(--line-height-4);
		`}

	${(props) =>
		props.level === "5" &&
		css`
			font-size: var(--text-size-5);
			line-height: var(--line-height-5);
		`};

	${(props) =>
		props.appearance === "1" &&
		css`
			font-size: var(--text-size-1);
			line-height: var(--line-height-1);
			padding-bottom: var(--spacing-double);
		`}

	${(props) =>
		props.appearance === "2" &&
		css`
			font-size: var(--text-size-2);
			line-height: var(--line-height-2);
		`}

	${(props) =>
		props.appearance === "3" &&
		css`
			font-size: var(--text-size-3);
			line-height: var(--line-height-3);
		`}

	${(props) =>
		props.appearance === "4" &&
		css`
			font-size: var(--text-size-4);
			line-height: var(--line-height-4);
		`}

	${(props) =>
		props.appearance === "5" &&
		css`
			font-size: var(--text-size-5);
			line-height: var(--line-height-5);
		`};
`;

export default Heading;

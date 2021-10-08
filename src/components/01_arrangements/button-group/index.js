import React from "react";
import styled, { css } from "styled-components";

const ButtonGroup = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`button-group ${props.classes}`}
		>
			{props.children}
		</El>
	);
};

const El = styled.div`
	overflow: hidden;

	> .button {
		display: inline-block;
		width: auto;
		margin: 0 var(--spacing-half);
	}

	.button:first-child {
		margin-left: 0;
	}

	.button:last-child {
		margin-left: 0;
	}

	${(props) =>
		props.alignment === "right" &&
		css`
			text-align: right;
		`}

	${(props) =>
		props.alignment === "center" &&
		css`
			text-align: center;
		`}
`;

export default ButtonGroup;

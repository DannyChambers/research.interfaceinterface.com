import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

const Logo = (props) => {
	let tag = "h1";

	if (props.href) {
		tag = "a";
	}

	return (
		<El
			as={tag}
			{...props}
			data-testid='123abc'
			className={`logo ${props.classes}`}
		>
			<svg viewBox='0 0 100 100'>
				<circle cx='50' cy='50' r='50' />
			</svg>
			<span>Company name</span>
		</El>
	);
};

const El = styled.div`
	stroke: red;
	fill: none;
	display: block;
	width: 50px;

	${(props) =>
		props.size === "small" &&
		css`
			width: 35px;
		`}

	${(props) =>
		props.size === "large" &&
		css`
			width: 75px;
		`}

    span {
		height: 0;
		width: 0;
		position: absolute;
		top: -9999px;
		overflow: hidden;
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
		width: 75px;

		${(props) =>
			props.size === "small" &&
			css`
				width: 50px;
			`}

		${(props) =>
			props.size === "large" &&
			css`
				width: 100px;
			`}
	}
`;

export default Logo;

import React, { useState } from "react";
import styled, { css } from "styled-components";

import Icon from "../../02_patterns/icon/";

const Button = (props) => {
	const [pressed, setPressed] = useState(false);
	const tag = props.href ? "a" : "button";

	const handleClick = () => {
		pressed ? setPressed(false) : setPressed(true);

		if (props.click) {
			props.click();
		}
	};

	return (
		<El
			as={tag}
			{...props}
			data-testid='123abc'
			className={`button ${props.classes}`}
			{...(tag === "a" ? { href: props.href } : {})}
			{...(tag === "button" ? { "aria-pressed": pressed } : {})}
			onClick={handleClick}
		>
			{(() => {
				if (props.icon && props.size === "small") {
					return <Icon graphic={props.icon} size='small' />;
				} else if (props.icon && props.size === "large") {
					return <Icon graphic={props.icon} size='large' />;
				} else if (props.icon) {
					return <Icon graphic={props.icon} size='medium' />;
				}
			})()}
			<span className='button-text'>{props.text}</span>
		</El>
	);
};

const El = styled.div`
	display: block;
	width: 100%;
	max-width: var(--sizing-octuple);
	font-size: var(--text-size-7);
	height: var(--sizing-full);
	font-family: var(--bold-font);
	text-transform: uppercase;
	padding: 0 var(--spacing-double);
	text-align: center;
	border-radius: var(--radius-double);
	text-decoration: none;
	cursor: pointer;
	background-color: var(--cta-primary);
	border: 2px solid var(--cta-primary);
	color: var(--text-color-light);
	transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
		color 0.4s ease-in-out;

	&:hover,
	&:active,
	&[aria-pressed="true"] {
		background: var(--cta-primary--active);
		border-color: var(--cta-primary--active);
	}

	${(props) =>
		props.variant === "secondary" &&
		css`
			background-color: var(--cta-secondary);
			border: 2px solid var(--cta-secondary);
			color: var(--text-color-dark);

			&:hover,
			&:active {
				background: var(--cta-secondary--active);
				border-color: var(--cta-secondary--active);
				color: var(--text-color-dark);
			}
		`}

	${(props) =>
		props.size === "small" &&
		css`
			padding: 0 var(--spacing-full);
			font-size: var(--text-size-8);
			height: calc(var(--sizing-half) + var(--sizing-quarter));
		`}

    ${(props) =>
		props.size === "large" &&
		css`
			padding: 0 var(--spacing-triple);
			font-size: var(--text-size-6);
			height: calc(var(--sizing-full) + var(--sizing-quarter));
			border-radius: var(--radius-triple);
		`}

    ${(props) =>
		props.icon &&
		css`
			position: relative;
			padding-left: calc(var(--spacing-double) + var(--spacing-half));

			.icon {
				position: absolute;
				top: var(--spacing-quarter);
				/* top: 0; */
				left: var(--spacing-half);

				svg path {
					fill: var(--text-color-light);
				}
			}
		`}


    ${(props) =>
		props.icon &&
		props.size === "medium" &&
		css`
			padding-left: calc(var(--spacing-triple) + var(--spacing-quarter));

			.icon {
				left: calc(var(--spacing-half) + var(--spacing-eighth));
			}
		`}

    ${(props) =>
		props.icon &&
		props.size === "large" &&
		css`
			padding-left: calc(var(--spacing-quadruple) + var(--spacing-half));

			.icon {
				top: calc(var(--spacing-quarter) + var(--spacing-eighth));
				left: var(--spacing-full);
			}
		`}


    ${(props) =>
		props.icon &&
		props.variant === "secondary" &&
		css`
			.icon {
				svg path {
					fill: var(--text-color-dark);
				}
			}
		`}


    ${(props) =>
		props.iconOnly &&
		css`
			padding: 0 calc(var(--spacing-quarter) + var(--spacing-eighth)) 0
				var(--spacing-quarter);

			.icon {
				position: static;
			}

			.button-text {
				position: absolute;
				left: -9999px;
				height: 0;
				width: 0;
				overflow: hidden;
			}
		`}
`;

export default Button;

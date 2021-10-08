import React from "react";
import styled, { css } from "styled-components";

import Icon from "../../02_patterns/icon/";

const NotificationBar = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`notification-bar ${props.classes}`}
		>
			{(() => {
				if (props.icon) {
					return <Icon graphic={props.icon} size='small' />;
				}
			})()}
			{props.children}
		</El>
	);
};

const El = styled.p`
	width: 100%;
	font-size: var(--text-size-7);
	line-height: var(--sizing-full);
	font-family: var(--regular-font);
	padding: 0 var(--spacing-double);
	text-align: center;
	background-color: var(--status--information);
	color: var(--text-color-light);

	.icon {
		position: relative;
		margin-right: var(--spacing-half);
		top: -2px;

		svg path {
			fill: var(--text-color-light);
		}
	}

	.link {
		color: var(--text-color-light);
		text-decoration-color: var(--text-color-light);

		&:hover,
		&:focus {
			text-decoration-color: transparent;
		}
	}

	${(props) =>
		props.status === "information" &&
		css`
			color: var(--text-color-dark);

			.icon {
				svg path {
					fill: var(--text-color-dark);
				}
			}

			.link {
				color: var(--text-color-dark);
				text-decoration-color: var(--text-color-dark);
			}
		`}

	${(props) =>
		props.status === "success" &&
		css`
			background-color: var(--status--success);
		`}
    
    ${(props) =>
		props.status === "warning" &&
		css`
			background-color: var(--status--warning);
		`}

    ${(props) =>
		props.status === "error" &&
		css`
			background-color: var(--status--error);
		`}
`;

export default NotificationBar;

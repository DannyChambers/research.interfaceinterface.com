import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../05_utilities";

import Paragraph from "../../01_arrangements/paragraph";
import Icon from "../../02_patterns/icon";

const UploadInput = (props) => {
	const [fieldMessage, setFieldMessage] = useState(null);
	const ID = generateID();

	console.log("props.buttonText: ", props.buttonText);

	let placeholder;

	if (props.usePlaceholder) {
		placeholder = props.label;
	}

	const handleChange = (obj) => {
		if (props.change) {
			props.change(obj);
		}
	};

	const handleFocus = (obj) => {
		if (props.focus) {
			props.focus(obj);
		}
	};

	const handleBlur = (obj) => {
		if (props.blur) {
			props.blur(obj);
		}
	};

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`upload-input ${props.classes}`}
		>
			<label htmlFor={ID}>{props.label}</label>

			{(() => {
				if (props.icon) {
					return <Icon graphic={props.icon} />;
				}
			})()}

			<input
				type='file'
				id={ID}
				placeholder={placeholder}
				name={props.name}
				value={props.value}
				disabled={props.disabled}
				onChange={(e) => {
					handleChange({
						name: props.name,
						value: e.target.value,
						valid: "true",
					});
				}}
				onFocus={(e) => {
					handleFocus({
						name: props.name,
						value: e.target.value,
						valid: "true",
					});
				}}
				onBlur={(e) => {
					handleBlur({
						name: props.name,
						value: e.target.value,
						valid: "true",
					});
				}}
			/>
			{props.children}

			{(() => {
				if (fieldMessage) {
					return <Paragraph level='3'>{fieldMessage}</Paragraph>;
				}
			})()}
		</El>
	);
};

const El = styled.div`
	position: relative;
	overflow: hidden;

	label {
		display: block;
		font-family: var(--regular-font);
		font-size: var(--text-size-6);
		line-height: var(--sizing-full);
		cursor: pointer;
		max-width: 75ch; //Max 75 characters for optimum readability
		float: left;
		margin-right: var(--spacing-full);
	}

	${(props) =>
		props.required &&
		css`
			label {
				:after {
					display: inline-block;
					padding: var(--spacing-quarter);
					content: "*";
					font-family: var(--regular-font);
					font-size: 20px;
					color: var(--status--information);
				}
			}
		`}

	input {
		background: pink;
		width: 100%;
		height: var(--sizing-full);
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		cursor: pointer;
	}

	&:after {
		float: left;
		content: "${(props) => props.buttonText}";
		display: block;
		width: 100%;
		max-width: var(--sizing-triple);
		font-size: var(--text-size-7);
		letter-spacing: 1px;
		height: var(--sizing-full);
		line-height: var(--sizing-full);
		font-family: var(--bold-font);
		text-transform: uppercase;
		padding: 0 var(--spacing-double);
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		background-color: var(--text-color-dark);
		border: 2px solid var(--text-color-light);
		color: var(--text-color-light);
		transition: background-color var(--transition-full) ease-in-out,
			border-color var(--transition-full) ease-in-out,
			color var(--transition-full) ease-in-out;

		&:hover,
		&:active {
			background-color: var(--brand-color-5);
			border-color: var(--text-color-light);
			color: var(--text-color-light);
		}
	}

	${(props) =>
		props.disabled &&
		css`
			label {
				cursor: not-allowed;
				pointer-events: none;
			}
			input {
				cursor: not-allowed;
				pointer-events: none;
			}
		`}

	${(props) =>
		props.size == "small" &&
		css`
			label {
				font-size: var(--text-size-8);
				line-height: calc(var(--sizing-half) + var(--sizing-quarter));
			}
			input {
				height: calc(var(--sizing-half) + var(--sizing-quarter));
				line-height: calc(var(--sizing-half) + var(--sizing-quarter));
				padding: 0 calc(var(--spacing-full) + var(--spacing-half)) 0
					var(--spacing-full);
				font-size: var(--text-size-8);
			}
		`}

	.paragraph {
		padding: var(--spacing-half) 0 0 0;
		color: var(--status--information);
	}
`;

export default UploadInput;

import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../00_tokens/utility";

import Paragraph from "../../01_arrangements/paragraph";
import Icon from "../../02_patterns/icon";

const TextInput = (props) => {
	const [fieldMessage, setFieldMessage] = useState(null);
	const [valid, setValid] = useState(null);
	const ID = generateID();

	useEffect(() => {
		if (props.fieldMessage) {
			setFieldMessage(props.fieldMessage);
		}
		if (props.valid) {
			setValid(true);
		} else if (props.invalid) {
			setValid(false);
		} else {
			setValid(null);
		}
	}, [props.fieldMessage, props.valid]);

	let placeholder;

	if (props.usePlaceholder) {
		placeholder = props.label;
	}

	const handleChange = (obj) => {
		if (props.required || props.validPattern) {
			if (
				(props.required && !obj.value) ||
				(props.validPattern === "email" &&
					!/^\S+@\S+\.\S+$/.test(obj.value)) ||
				(props.validPattern === "phone" &&
					!/^[\d\(\)\-+]+$/.test(obj.value))
			) {
				obj.valid = false;
				props.change(obj);
			} else {
				obj.valid = true;
				props.change(obj);
			}
		} else {
			obj.valid = true;
			props.change(obj);
		}
	};

	const handleFocus = (obj) => {
		if (props.focus) {
			props.focus(obj);
		}
	};

	const handleBlur = (obj) => {
		if (props.required && !obj.value) {
			setFieldMessage("This field is required");
			setValid(false);
		} else if (
			props.validPattern === "email" &&
			!/^\S+@\S+\.\S+$/.test(obj.value)
		) {
			setFieldMessage(
				"Please ensure you have provided a valid email address."
			);
			setValid(false);
		} else if (
			props.validPattern === "phone" &&
			!/^[\d\(\)\-+]+$/.test(obj.value)
		) {
			//Numbers and phone number symbols
			setFieldMessage(
				"Please ensure you have provided a valid phone number."
			);
			setValid(false);
		} else {
			setFieldMessage(props.fieldMessage);
			setValid(true);
		}

		if (props.blur) {
			props.blur(obj);
		}
	};

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`text-input ${props.classes}`}
			valid={valid}
		>
			<label htmlFor={ID}>{props.label}</label>

			{(() => {
				if (props.icon) {
					return <Icon graphic={props.icon} />;
				}
			})()}

			<input
				type='text'
				id={ID}
				placeholder={placeholder}
				name={props.name}
				value={props.value}
				disabled={props.disabled}
				onChange={(e) => {
					handleChange({
						name: props.name,
						value: e.target.value,
						valid: valid,
					});
				}}
				onFocus={(e) => {
					handleFocus({
						name: props.name,
						value: e.target.value,
						valid: valid,
					});
				}}
				onBlur={(e) => {
					handleBlur({
						name: props.name,
						value: e.target.value,
						valid: valid,
					});
				}}
			/>
			{props.children}

			{(() => {
				if (fieldMessage) {
					return <Paragraph level='2'>{fieldMessage}</Paragraph>;
				}
			})()}
		</El>
	);
};

const El = styled.div`
	position: relative;

	label {
		display: block;
		font-family: var(--regular-font);
		font-size: var(--text-size-8);
		line-height: var(--sizing-full);
		cursor: pointer;
		max-width: 75ch; //Max 75 characters for optimum readability
	}

	${(props) =>
		props.usePlaceholder &&
		css`
			label {
				width: 0;
				height: 0;
				position: absolute;
				left: -9999px;
				overflow: hidden;
			}
			${(props) =>
				props.required &&
				css`
					:after {
						display: inline-block;
						padding: var(--spacing-quarter);
						content: "*";
						display: block;
						position: absolute;
						top: 0;
						right: var(--spacing-quarter);
						font-family: var(--regular-font);
						font-size: 20px;
						color: var(--status--information);
					}
				`}
		`}

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
		display: block;
		width: 100%;
		border: 1px solid var(--border-color-1);
		line-height: var(--sizing-full);
		padding: 0 var(--spacing-double) 0 var(--spacing-full);
		font-family: var(--regular-font);
		font-size: var(--text-size-8);

		&:hover {
			border-color: var(---border-color-2);
		}

		&:focus {
			outline: var(---border-color-1);
			border-color: var(---border-color-1);
		}

		::-webkit-input-placeholder {
			color: var(--text-color-medium);
		}
		::-moz-placeholder {
			color: var(--text-color-medium);
		}
		:-ms-input-placeholder {
			color: var(--text-color-medium);
		}
		:-moz-placeholder {
			color: var(--text-color-medium);
		}
	}

	${(props) =>
		props.icon &&
		css`
			.icon {
				position: absolute;
				top: var(--spacing-half);
				left: var(--spacing-quarter);
				transform: scale(0.6);
			}

			input {
				padding-left: calc(var(--spacing-double) + var(--spacing-half));
			}
		`}

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
				font-size: var(--text-size-9);
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

	${(props) =>
		props.valid === true &&
		css`
			.paragraph {
				color: var(--status--success);
			}

			:after,
			label:after {
				color: var(--status--success);
			}
		`}

	${(props) =>
		props.valid === false &&
		css`
			.paragraph {
				color: var(--status--error);
			}

			:after,
			label:after {
				color: var(--status--error);
			}
		`}
`;

export default TextInput;

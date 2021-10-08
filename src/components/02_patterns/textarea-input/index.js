import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../05_utilities";

import Paragraph from "../../01_arrangements/paragraph";

const TextareaInput = (props) => {
	const [fieldMessage, setFieldMessage] = useState(null);
	const [valid, setValid] = useState(null);
	const [characterCount, setCharacterCount] = useState(props.characterLimit);
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
		setCharacterCount(props.characterLimit - obj.value.length);

		if (props.required || props.validPattern) {
			if (props.required && !obj.value) {
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

	const handleFocus = (val) => {
		if (props.focus) {
			props.focus(val);
		}
	};

	const handleBlur = (val) => {
		if (props.required && val === "") {
			console.log({ val });
			setFieldMessage("This field is required");
			setValid(false);
		} else {
			setFieldMessage(props.fieldMessage);
			setValid(true);
		}
		if (props.blur) {
			props.blur(val);
		}
	};

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`textarea-input ${props.classes}`}
			valid={valid}
		>
			<label htmlFor={ID}>{props.label}</label>

			<textarea
				maxLength={props.characterLimit}
				rows='6'
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
			></textarea>
			{props.children}

			{(() => {
				if (fieldMessage) {
					return <Paragraph level='3'>{fieldMessage}</Paragraph>;
				}
			})()}

			{(() => {
				if (props.characterLimit) {
					return (
						<div className='remaining'>
							<Paragraph level='3' alignment='right'>
								{`${characterCount} of ${props.characterLimit} characters remaining`}
							</Paragraph>
						</div>
					);
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

	textarea {
		resize: none;
		display: block;
		width: 100%;
		border: 1px solid var(--border-color-1);
		padding: var(--spacing-full) var(--spacing-double) var(--spacing-full)
			var(--spacing-full);
		font-family: var(--regular-font);
		font-size: var(--text-size-8);
		line-height: var(--sizing-half);

		&:hover {
			border-color: var(--border-color-2);
		}

		&:focus {
			outline: var(--border-color-2);
			border-color: var(--border-color-2);
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
		props.disabled &&
		css`
			label {
				cursor: not-allowed;
				pointer-events: none;
			}
			textarea {
				cursor: not-allowed;
				pointer-events: none;
			}
		`}

	> .paragraph {
		padding: var(--spacing-half) var(--spacing-quadruple) 0 0;
		color: var(--status--information);
	}

	${(props) =>
		props.valid === true &&
		css`
			> .paragraph {
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
			> .paragraph {
				color: var(--status--error);
			}

			:after,
			label:after {
				color: var(--status--error);
			}
		`}

    ${(props) =>
		props.characterLimit &&
		css`
			padding-bottom: var(--spacing-double);

			.remaining {
				display: block;
				position: absolute;
				bottom: 0;
				right: 0;

				.paragraph {
					padding: 0;
				}
			}
		`}
`;

export default TextareaInput;

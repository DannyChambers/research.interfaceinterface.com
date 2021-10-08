import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../05_utilities";

import Paragraph from "../../01_arrangements/paragraph";
import TextInput from "../../02_patterns/text-input";
import Icon from "../../02_patterns/icon";

const SelectInput = (props) => {
	const [selected, setSelected] = useState(null);
	const [fieldMessage, setFieldMessage] = useState(null);
	const [valid, setValid] = useState(null);
	const ID = generateID();

	let placeholder;

	if (props.usePlaceholder) {
		placeholder = props.label;
	}

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

	const handleChange = (val) => {
		if (
			(props.required && !val) ||
			(props.required && val === "") ||
			(props.required && val === "Other")
		) {
			setFieldMessage("This field is required");
			setValid(false);
			setSelected(val);
		} else if (val === "Other") {
			setSelected(val);
		} else {
			setFieldMessage(props.fieldMessage);
			setValid(true);
			setSelected(val);
		}

		if (props.change) {
			props.change(val);
		}
	};

	const handleFocus = (val) => {
		if (props.focus) {
			props.focus(val);
		}
	};

	const handleBlur = (val) => {
		if (props.blur) {
			props.blur(val);
		}
	};

	return (
		<El
			{...props}
			data-testid='123abc'
			valid={valid}
			className={`select-input ${props.classes}`}
		>
			<label htmlFor={ID}>{props.label}</label>
			<Icon graphic='chevron-down' size='small' />
			<select
				id={ID}
				placeholder={placeholder}
				name={props.name}
				value={props.value}
				disabled={props.disabled}
				aria-label={props.ariaLabel}
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
			>
				{(() => {
					if (props.usePlaceholder) {
						return (
							<option value={props.label}>{props.label}</option>
						);
					}
				})()}

				{props.options.map((option, index) => {
					return (
						<option value={option.value} key={`_${index}`}>
							{option.label}
						</option>
					);
				})}
			</select>
			{(() => {
				if (props.fieldMessage) {
					return <Paragraph level='3'>{fieldMessage}</Paragraph>;
				}
			})()}
			{(() => {
				if (selected == "Other") {
					return (
						<div className='specify'>
							{(() => {
								if (props.usePlaceholder) {
									return (
										<TextInput
											label='Please specify..'
											name={`${props.name}_other`}
											onChange={handleChange}
											usePlaceholder
										/>
									);
								} else {
									return (
										<TextInput
											label='Please specify..'
											name={`${props.name}_other`}
											onChange={handleChange}
										/>
									);
								}
							})()}
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

	.icon {
		position: absolute;
		bottom: var(--spacing-threequarters);
		right: var(--spacing-full);
		z-index: 1;
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
					font-size: var(--text-size-5);
					color: var(--status--information);
				}
			}

			.text-input label:after {
				display: none;
			}
		`}

    ${(props) =>
		props.hideLabel &&
		css`
			label {
				position: absolute;
				top: -9999px;
				left: -9999px;
				height: 0;
				width: 0;
				overflow: none;
			}

			.text-input label:after {
				display: none;
			}
		`}

	select {
		display: block;
		width: 100%;
		border: 1px solid var(--border-color-1);
		height: var(--sizing-full);
		line-height: var(--sizing-full);
		padding: 0 var(--spacing-triple) 0 var(--spacing-full);
		font-family: var(--regular-font);
		font-size: var(--text-size-8);
		-webkit-appearance: none;
		-moz-appearance: none;
		background-color: transparent;
		position: relative;
		z-index: 2;

		&:hover {
			border-color: var(---border-color-2);
		}

		&:focus {
			outline: var(--border-color--active);
			border-color: var(--border-color--active);
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
		props.size == "small" &&
		css`
			label {
				font-size: var(--text-size-9);
				line-height: calc(var(--sizing-half) + var(--sizing-quarter));
			}
			select {
				height: calc(var(--sizing-half) + var(--sizing-quarter));
				line-height: normal;
				padding: 0 var(--spacing-full) 0 var(--spacing-full);
				font-size: var(--text-size-9);
				background-position-x: 99%;
				background-position-y: 5px;
			}
		`}

	.specify {
		padding-top: var(--spacing-full);
	}

	${(props) =>
		props.disabled &&
		css`
			label {
				cursor: not-allowed;
				pointer-events: none;
			}
			select {
				cursor: not-allowed;
				pointer-events: none;
			}
		`}

	.paragraph {
		padding: var(--spacing-half) 0 0 0;
		color: var(--status--information);
	}

	${(props) =>
		props.valid &&
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

export default SelectInput;

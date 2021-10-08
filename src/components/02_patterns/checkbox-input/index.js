import React from "react";
import styled, { css } from "styled-components";

import { generateID } from "../../05_utilities";

import Paragraph from "../../01_arrangements/paragraph";

const CheckboxInput = (props) => {
	const ID = generateID();
	let placeholder;

	if (props.usePlaceholder) {
		placeholder = props.label;
	}

	const handleChange = (val) => {
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
			className={`checkbox-input ${props.classes}`}
		>
			<div className='wrapper'>
				<label htmlFor={ID}>{props.label}</label>
				<input
					type='checkbox'
					id={ID}
					placeholder={placeholder}
					name={props.name}
					value={props.value}
					checked={props.selected}
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
			</div>
			{props.children}

			{(() => {
				if (props.fieldMessage) {
					return (
						<Paragraph level='3'>{props.fieldMessage}</Paragraph>
					);
				}
			})()}
		</El>
	);
};

const El = styled.div`
	min-height: var(--sizing-full);
	padding-bottom: var(--sizing-half);

	.wrapper {
		padding-left: calc(var(--sizing-half) + var(--spacing-half));
		position: relative;

		label {
			display: block;
			font-family: var(--regular-font);
			font-size: var(--text-size-8);
			line-height: var(--line-height-8);
			cursor: pointer;
			max-width: 75ch; //Max 75 characters for optimum readability

			${(props) =>
				props.required &&
				css`
					:after {
						display: inline-block;
						padding: var(--spacing-quarter);
						content: "*";
						font-family: var(--regular-font);
						font-size: 20px;
						color: var(--status--information);
					}
				`}
		}

		input {
			display: block;
			width: var(--sizing-half);
			height: var(--sizing-half);
			border: 1px solid var(--border-color-1);
			border-radius: var(--radius-half);
			line-height: var(--sizing-full);
			padding: 0 var(--spacing-full);
			position: absolute;
			/* top: calc(var(--spacing-quarter) - var(--spacing-eighth)); */
			top: 0;
			left: 0;

			&:hover {
				border-color: var(---border-color-2);
			}

			&:focus {
				outline: var(--cta-primary--active);
				border-color: var(--cta-primary--active);
			}
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

	.paragraph {
		padding: var(--spacing-half) 0 0 0;
		color: var(--status--information);
	}
`;

export default CheckboxInput;

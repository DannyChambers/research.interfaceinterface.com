import React from "react";
import styled from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

const Form = (props) => {
	return (
		<El {...props} data-testid='123abc' className={`form ${props.classes}`}>
			{props.children}
		</El>
	);
};

export const Fieldset = (props) => {
	return (
		<fieldset {...props} className='fieldset'>
			{(() => {
				if (props.legend) {
					return <legend>{props.legend}</legend>;
				}
			})()}

			{props.children}
		</fieldset>
	);
};

const El = styled.form`
	padding: var(--spacing-full) 0;

	fieldset {
		border: 1px solid var(--border-color-1);
		border-radius: var(--radius-half);
		padding: var(--spacing-double);
		margin-bottom: var(--spacing-double);
		position: relative;

		legend {
			padding: 0 var(--spacing-half);
			font-family: var(--regular-font);
			font-size: var(--text-size-5);
			line-height: var(--line-height-5);
			position: absolute;
			top: calc(-1 * var(--spacing-full));
			left: calc(var(--spacing-full) + var(--spacing-half));
			background: white;
		}
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
		fieldset {
			padding: var(--spacing-triple);

			legend {
				padding: 0 var(--spacing-full);
				left: var(--spacing-double);
			}
		}
	}
`;

export default Form;

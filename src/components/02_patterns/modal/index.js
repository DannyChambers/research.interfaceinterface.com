import React, { useState } from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

import Button from "../../../components/02_patterns/button/";

const Modal = (props) => {
	const [active, setActive] = useState(true);

	return (
		<>
			{(() => {
				if (active) {
					return (
						<El
							{...props}
							data-testid='123abc'
							className={`modal ${props.classes}`}
						>
							<div className='modal-inner'>
								<div className='modal-content'>
									{(() => {
										if (props.closeButton) {
											return (
												<Button
													variant='secondary'
													text='Close'
													icon='cross'
													iconOnly
													classes='button-close'
													click={() => {
														setActive(false);
													}}
												/>
											);
										}
									})()}
									{props.children}
								</div>
							</div>
						</El>
					);
				}
			})()}
		</>
	);
};

const El = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	display: table;
	background: rgba(1, 1, 1, 0.6);

	.modal-inner {
		display: table-cell;
		vertical-align: middle;

		.modal-content {
			max-width: var(--breakpoint-3);
			margin: auto;
			background: var(--brand-color-9);
			padding: var(--spacing-double);
			position: relative;

			.logo {
				margin: 0 auto;
			}

			.button-close {
				position: absolute;
				top: calc(-1 * var(--spacing-full));
				right: calc(-1 * var(--spacing-full));
				width: var(--sizing-full);
			}
		}
	}
`;

export default Modal;

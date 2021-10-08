import React, { useState } from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

import List from "../../01_arrangements/list/";
import Icon from "../../02_patterns/icon/";
import Button from "../../02_patterns/button/";

const PrimaryNavigation = (props) => {
	const [active, setActive] = useState(null);

	const triggerMenu = () => {
		console.log("Trigger menu");
		if (active) {
			setActive(false);
		} else {
			setActive(true);
		}
	};

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`primary-navigation ${props.classes}`}
			active={active}
		>
			<Button
				variant='primary'
				size='medium'
				icon='menu'
				iconOnly
				text='Open menu'
				classes='primary-navigation_trigger'
				onClick={triggerMenu}
			/>

			<div className='flyout'>
				<Button
					variant='secondary'
					size='medium'
					icon='cross'
					iconOnly
					text='Close menu'
					classes='primary-navigation_close'
					onClick={triggerMenu}
				/>
				<List level='1'>
					<li>
						<a href='/'>
							<Icon graphic='magic-wand' />
							Home page
						</a>
					</li>
					<li>
						<a href='/form-page/'>
							<Icon graphic='paint-roller' />
							Form page
						</a>
					</li>
					<li>
						<a href='#'>
							<Icon graphic='pencil-ruler' />
							Menu item
						</a>
					</li>
					<li>
						<a href='#'>
							<Icon graphic='umbrella' />
							Menu item
						</a>
					</li>
				</List>

				<List level='1'>
					<li>
						<a href='#'>
							<Icon graphic='paint-roller' />
							My Account
						</a>
					</li>
					<li>
						<a href='#'>
							<Icon graphic='magic-wand' />
							Settings
						</a>
					</li>
				</List>

				<Button
					variant='secondary'
					size='small'
					text='Sign out'
					classes='primary-navigation_sign-out'
				/>
			</div>
		</El>
	);
};

const El = styled.div`
	${(props) =>
		props.active &&
		css`
			background: rgba(1, 1, 1, 0.7);
		`}

	.primary-navigation_trigger {
		display: inline-block;
		width: auto;
		position: absolute;
		top: var(--spacing-full);
		right: var(--spacing-full);
	}

	.flyout {
		background: var(--brand-color-7);
		padding: var(--spacing-quintuple) var(--spacing-double);
		width: 100%;
		max-width: var(--breakpoint-1);
		height: 100%;
		position: absolute;
		top: 0;
		left: -100%;
		transition: left var(--transition-full) ease-in-out;

		${(props) =>
			props.active &&
			css`
				left: 0;
			`}

		.primary-navigation_close {
			display: inline-block;
			width: auto;
			position: absolute;
			top: var(--spacing-full);
			right: var(--spacing-full);
		}

		.list {
			padding-bottom: var(--spacing-double);

			li {
				a {
					display: block;
					color: var(--text-color-dark);
					text-decoration: none;
					padding: var(--spacing-half);
					border-radius: var(--radius-half);

					&:active,
					&.active {
						background: var(--cta-primary--active);
					}

					.icon {
						margin-right: var(--spacing-full);
					}
				}
			}
		}
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
		.primary-navigation_trigger {
			display: none;
		}

		.flyout {
			background: none;
			padding: 0;
			max-width: none;
			height: auto;
			position: static;
			left: auto;
			text-align: right;

			.primary-navigation_close {
				display: none;
			}

			.list {
				display: inline-block;
				padding-bottom: 0;
				text-align: right;
				margin-right: var(--spacing-double);

				li {
					display: inline;

					a {
						display: inline-block;
						padding: var(--spacing-quintuple) var(--spacing-full)
							var(--spacing-full) var(--spacing-full);
						border-radius: var(--radius-half);
						position: relative;

						.icon {
							position: absolute;
							top: var(--spacing-full);
							left: 50%;
							margin-left: -17px;
						}

						&:hover {
							background: var(--cta-primary--active);
							color: var(--text-color-light);

							.icon {
								svg path {
									fill: var(--text-color-light);
								}
							}
						}
					}
				}
			}

			.primary-navigation_sign-out {
				display: inline-block;
				width: auto;
				position: relative;
				top: -25px;
			}
		}
	}
`;

export default PrimaryNavigation;

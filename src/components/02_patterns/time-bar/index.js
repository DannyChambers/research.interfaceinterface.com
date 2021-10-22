import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

import Paragraph from "../../../components/01_arrangements/paragraph/";

const TimeBar = (props) => {
	const [barVisible, setBarVisible] = useState(true);

	useEffect(() => {
		if (props.end) {
			setTimeout(() => {
				props.end();
				setBarVisible(false);
			}, props.timeout * 1000);
		} else {
			console.log("Missing parameter (end) in component TimeBar");
		}
	}, []);

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`time-bar ${props.classes}`}
			barVisible={barVisible}
		>
			{(() => {
				if (props.label) {
					return (
						<Paragraph level='1' classes='label'>
							{props.label}
						</Paragraph>
					);
				}
			})()}

			<div className='bar'>
				<div className='indicator'></div>
			</div>
		</El>
	);
};

const El = styled.div`
	.label {
		padding-bottom: var(--spacing-half);
	}

	.bar {
		width: 100%;
		border: 1px solid var(--border-color-1);
		height: var(--sizing-quarter);
		margin-bottom: var(--spacing-double);
		border-radius: var(--radius-quarter);

		@keyframes timeOut {
			from {
				max-width: 768px;
			}
			to {
				max-width: 0;
			}
		}

		.indicator {
			width: 100%;
			max-width: 768px;
			height: 100%;
			background: var(--cta-primary);
			animation: timeOut 10s ease-in-out forwards;
		}
	}

	${(props) =>
		!props.barVisible &&
		css`
			.bar {
				visibility: hidden;
			}
		`}
`;

export default TimeBar;

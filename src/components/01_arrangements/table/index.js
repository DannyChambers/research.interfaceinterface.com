import React from "react";
import styled, { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

const Table = (props) => {
	const sample = props.data ? props.data[0] : null;
	const headings = sample ? Object.keys(sample) : null;

	return (
		<El
			{...props}
			data-testid='123abc'
			className={`table ${props.classes}`}
		>
			<table cellPadding='0' cellSpacing='0'>
				{(() => {
					if (props.data) {
						return (
							<>
								<thead>
									<tr>
										{headings.map((item, index) => {
											return (
												<th key={`_${index}`}>
													{item}
												</th>
											);
										})}
									</tr>
								</thead>
								<tbody>
									{props.data.map((item, index) => {
										return (
											<tr key={`_${index}`}>
												{headings.map((property) => {
													return (
														<td
															key={`_${property}`}
														>
															{item[property]}
														</td>
													);
												})}
											</tr>
										);
									})}
								</tbody>
							</>
						);
					} else {
						return props.children;
					}
				})()}
			</table>
		</El>
	);
};

const El = styled.div`
	border: 1px solid var(--border-color-1);
	border-radius: var(--radius-half);

	table {
		width: 100%;

		tr {
			:last-child {
				td {
					border-bottom: none;
				}
			}
		}

		th,
		td {
			border: 1px solid var(--border-color-1);
			border-width: 0 1px 1px 0;
			padding: var(--spacing-half) var(--spacing-full);
			text-align: left;
			vertical-align: top;
			font-family: var(--regular-font);
			font-size: var(--text-size-7);

			&:last-child {
				border-right: none;
			}
		}

		th {
			font-family: var(--bold-font);
			text-transform: capitalize;
		}
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
		table {
			table-layout: fixed;
		}
	}
`;

export default Table;

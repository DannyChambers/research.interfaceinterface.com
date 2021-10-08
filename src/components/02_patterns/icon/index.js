import React from "react";
import styled, { css } from "styled-components";

import iconSet from "../../../assets/fonts/icon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Icon = (props) => {
	let sizeAsNumber;

	// console.log("Icons: ", iconList(iconSet));

	switch (props.size) {
		case "small":
			sizeAsNumber = 22;
			break;
		case "large":
			sizeAsNumber = 38;
			break;
		case "xlarge":
			sizeAsNumber = 46;
			break;
		default:
			sizeAsNumber = 30;
			break;
	}

	return (
		<El {...props} data-testid='123abc' className={`icon ${props.classes}`}>
			{(() => {
				if (props.graphic === "all") {
					const list = iconList(iconSet);
					return (
						<>
							{list.map((graphic) => (
								<span
									style={{
										boxSizing: "border-box",
										display: "inline-block",
										width: "10%",
										padding: 44,
									}}
									title={graphic}
								>
									<IcomoonReact
										iconSet={iconSet}
										size={30}
										icon={graphic}
									/>
									{/* <p
										style={{
											fontSize: 16,
											textAlign: "center",
											margin: 10,
											fontStyle: "normal",
										}}
									>
										{graphic}
									</p> */}
								</span>
							))}
						</>
					);
				} else {
					return (
						<IcomoonReact
							iconSet={iconSet}
							size={sizeAsNumber}
							icon={props.graphic}
						/>
					);
				}
			})()}
		</El>
	);
};

const El = styled.i`
	display: inline-block;
	text-align: center;
	line-height: normal;
`;

export default Icon;

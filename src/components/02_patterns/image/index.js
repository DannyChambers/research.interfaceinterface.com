import React from "react";
import styled, { css } from "styled-components";

const Image = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`image ${props.classes}`}
		>
			{(() => {
				if (props.srcWEBP) {
					return (
						<picture>
							<source srcSet={props.srcWEBP} type='image/webp' />
							<img src={props.srcSVG} loading='lazy' />
						</picture>
					);
				} else {
					return (
						<picture>
							<img src={props.src} loading='lazy' />
						</picture>
					);
				}
			})()}
		</El>
	);
};

const El = styled.div`
	img {
		max-width: 100%;
	}
`;

export default Image;

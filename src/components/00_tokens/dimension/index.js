import { css } from "styled-components";

//Breakpoints --
export const breakpoints = {
	//for media query use in Styled Components, can not be used as native CSS variable so additionally exported here as the global 'breakpoints' object.
	breakpoint1: 320,
	breakpoint2: 375,
	breakpoint3: 768,
	breakpoint4: 1024,
	breakpoint5: 1200,
	breakpoint6: 1600,
	maximumPageWidth: 1200,
};

const Dimension = css`
	:root {
		//Breakpoints --
		--breakpoint-1: ${breakpoints.breakpoint1}px;
		--breakpoint-2: ${breakpoints.breakpoint2}px;
		--breakpoint-3: ${breakpoints.breakpoint3}px;
		--breakpoint-4: ${breakpoints.breakpoint4}px;
		--breakpoint-5: ${breakpoints.breakpoint5}px;
		--breakpoint-6: ${breakpoints.breakpoint6}px;
		--maximum-page-width: ${breakpoints.maximumPageWidth}px;

		//Sizing --
		--sizing-full: 44px;
		--sizing-eighth: calc(var(--sizing-full) / 8);
		--sizing-quarter: calc(var(--sizing-full) / 4);
		--sizing-half: calc(var(--sizing-full) / 2);
		--sizing-threequarters: calc((var(--sizing-full) / 4) * 3);
		--sizing-double: calc(var(--sizing-full) * 2);
		--sizing-triple: calc(var(--sizing-full) * 3);
		--sizing-quadruple: calc(var(--sizing-full) * 4);
		--sizing-quintuple: calc(var(--sizing-full) * 5);
		--sizing-sextuple: calc(var(--sizing-full) * 6);
		--sizing-septuple: calc(var(--sizing-full) * 7);
		--sizing-octuple: calc(var(--sizing-full) * 8);
		--sizing-nonuple: calc(var(--sizing-full) * 9);

		//Spacing --
		--spacing-full: 14.6px;
		--spacing-eighth: calc(var(--spacing-full) / 8);
		--spacing-quarter: calc(var(--spacing-full) / 4);
		--spacing-half: calc(var(--spacing-full) / 2);
		--spacing-threequarters: calc((var(--spacing-full) / 4) * 3);
		--spacing-double: calc(var(--spacing-full) * 2);
		--spacing-triple: calc(var(--spacing-full) * 3);
		--spacing-quadruple: calc(var(--spacing-full) * 4);
		--spacing-quintuple: calc(var(--spacing-full) * 5);
		--spacing-sextuple: calc(var(--spacing-full) * 6);
		--spacing-septuple: calc(var(--spacing-full) * 7);
		--spacing-octuple: calc(var(--spacing-full) * 8);
		--spacing-nonuple: calc(var(--spacing-full) * 9);

		//Radius --
		--radius-full: 11px;
		--radius-eight: calc(var(--radius-full) / 8);
		--radius-quarter: calc(var(--radius-full) / 4);
		--radius-half: calc(var(--radius-full) / 2);
		--radius-threequarters: calc((var(--radius-full) / 4) * 3);
		--radius-double: calc(var(--radius-full) * 2);
		--radius-triple: calc(var(--radius-full) * 3);
		--radius-quadruple: calc(var(--radius-full) * 4);
		--radius-quintuple: calc(var(--radius-full) * 5);
		--radius-sextuple: calc(var(--radius-full) * 6);
		--radius-septuple: calc(var(--radius-full) * 7);
		--radius-octuple: calc(var(--radius-full) * 8);
		--radius-nonuple: calc(var(--radius-full) * 9);
	}
`;

export default Dimension;

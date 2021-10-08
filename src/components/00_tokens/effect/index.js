import { css } from "styled-components";

const Effect = css`
	:root {
		//Transition --
		--transition-full: 0.4s;
		--transition-quarter: calc(var(--transition-full) / 4);
		--transition-half: calc(var(--transition-full) / 2);
		--transition-double: calc(var(--transition-full) * 2);
		--transition-triple: calc(var(--transition-full) * 3);
		--transition-quadruple: calc(var(--transition-full) * 4);
		--transition-quintuple: calc(var(--transition-full) * 5);
		--transition-sextuple: calc(var(--transition-full) * 6);
		--transition-septuple: calc(var(--transition-full) * 7);
		--transition-octuple: calc(var(--transition-full) * 8);
		--transition-nonuple: calc(var(--transition-full) * 9);
	}
	//Animation --
	//Fade in
	@keyframes fadeIn {
		0% {
			opacity: 0%;
		}
		100% {
			opacity: 100%;
		}
	}
	.fade-in {
		animation: fadeIn var(--transition-double) ease-in-out;
	}
`;

export default Effect;

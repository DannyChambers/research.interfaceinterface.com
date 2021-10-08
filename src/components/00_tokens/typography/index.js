import { css } from "styled-components";

import { breakpoints } from "../../00_tokens/dimension";

import OpenSansBold from "../../../assets/fonts/opensans_bold_macroman/OpenSans-Bold-webfont.woff";
import OpenSansRegular from "../../../assets/fonts/opensans_regular_macroman/OpenSans-Regular-webfont.woff";

const Typography = css`
	@font-face {
		font-family: "Open Sans Bold";
		src: url(${OpenSansBold}) format("woff");
		font-weight: 300;
		font-style: normal;
	}
	@font-face {
		font-family: "Open Sans Regular";
		src: url(${OpenSansRegular}) format("woff");
		font-weight: 300;
		font-style: normal;
	}

	:root {
		//Fonts --
		--bold-font: "Open Sans Bold", Arial, sans-serif;
		--regular-font: "Open Sans Regular", Arial, sans-serif;
		font-size: 62.5%;
		//Font sizes --
		--text-size-1: 4.2rem;
		--line-height-1: calc(1em + 0.25);
		--text-size-2: 3.6rem;
		--line-height-2: calc(1em + 0.25);
		--text-size-3: 2.8rem;
		--line-height-3: calc(1em + 0.25);
		--text-size-4: 2.4rem;
		--line-height-4: calc(1em + 0.25);
		--text-size-5: 2rem;
		--line-height-5: calc(1em + 0.25);
		--text-size-6: 1.8rem;
		--line-height-6: calc(1em + 0.25);
		--text-size-7: 1.6rem;
		--line-height-7: calc(1em + 0.25);
		--text-size-8: 1.4rem;
		--line-height-8: calc(1em + 0.25);
	}

	@media (min-width: ${breakpoints.breakpoint4}px) {
		:root {
			//Font sizes --
			/* --text-size-1: 4.2rem;
		--line-height-1: calc(1em + 0.25);
		--text-size-2: 3.6rem;
		--line-height-2: calc(1em + 0.25);
		--text-size-3: 2.8rem;
		--line-height-3: calc(1em + 0.25);
		--text-size-4: 2.4rem;
		--line-height-4: calc(1em + 0.25);
		--text-size-5: 2rem;
		--line-height-5: calc(1em + 0.25);
		--text-size-6: 1.8rem;
		--line-height-6: calc(1em + 0.25);
		--text-size-7: 1.6rem;
		--line-height-7: calc(1em + 0.25);
		--text-size-8: 1.4rem;
		--line-height-8: calc(1em + 0.25); */
		}
	}
`;

export default Typography;

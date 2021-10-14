import { css } from "styled-components";

const Color = {
	brandcolor1: "hsl(0, 0%, 0%)",
	brandcolor2: "hsl(0, 0%, 7%)",
	brandcolor3: "hsl(0, 0%, 20%)",
	brandcolor4: "hsl(0, 0%, 40%)",
	brandcolor5: "hsl(0, 0%, 60%)",
	brandcolor6: "hsl(0, 0%, 80%)",
	brandcolor7: "hsl(0, 0%, 93%)",
	brandcolor8: "hsl(0, 0%, 95%)",
	brandcolor9: "hsl(0, 0%, 100%)",
	brandcolor10: "hsl(203, 92%, 75%)",
	brandcolor11: "hsl(120, 61%, 50%)",
	brandcolor12: "hsl(39, 100%, 50%)",
	brandcolor13: "hsl(0, 100%, 50%)",
};

export const CSSColor = css`
	:root {
		//Raw palette --
		--brand-color-1: ${Color.brandcolor1};
		--brand-color-2: ${Color.brandcolor2};
		--brand-color-3: ${Color.brandcolor3};
		--brand-color-4: ${Color.brandcolor4};
		--brand-color-5: ${Color.brandcolor5};
		--brand-color-6: ${Color.brandcolor6};
		--brand-color-7: ${Color.brandcolor7};
		--brand-color-8: ${Color.brandcolor8};
		--brand-color-9: ${Color.brandcolor9};
		--brand-color-10: ${Color.brandcolor10};
		--brand-color-11: ${Color.brandcolor11};
		--brand-color-12: ${Color.brandcolor12};
		--brand-color-13: ${Color.brandcolor13};
		//Functional palette --
		--text-color-dark: var(--brand-color-2);
		--text-color-light: var(--brand-color-9);
		--text-color-medium: var(--brand-color-6);
		--border-color-1: var(--brand-color-6);
		--cta-primary: var(--brand-color-3);
		--cta-primary--active: var(--brand-color-4);
		--cta-secondary: var(--brand-color-5);
		--cta-secondary--active: var(--brand-color-6);
		--cta--disabled: var(--brand-color-6);
		--status--information: var(--brand-color-10);
		--status--success: var(--brand-color-11);
		--status--warning: var(--brand-color-12);
		--status--error: var(--brand-color-13);
		color: var(--text-colour-dark);
	}
`;

export default Color;

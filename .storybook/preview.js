import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/components/00_tokens/global-style";

addDecorator((story) => (
	<>
		<GlobalStyle />
		{story()}
	</>
));

export const parameters = {
	layout: "fullscreen",
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: [
				"Documentation",
				["Introduction", "Device support", "Accessibility"],
				"Components",
				[
					"About components",
					"Tokens",
					"Arrangements",
					[
						"Layout",
						"Page Section",
						"Heading",
						"Paragraph",
						"Form",
						"Button Group",
					],
					"Patterns",
					[
						"Logo",
						"Icon",
						"Link",
						"Button",
						"Text Input",
						"Textarea Input",
						"Select Input",
						"Checkbox Input",
						"Radiobutton Input",
					],
					"Modules",
					[
						"Page Header",
						"Page Footer",
						"Site Footer",
						"Notifcation Bar",
					],
					"Pages",
					["Home"],
				],
			],
		},
	},
};

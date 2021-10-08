import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Component from "./index";

describe("Button", () => {
	test("renders on the page", () => {
		render(<Component />);
		const theComponent = screen.getByTestId("123abc");
		expect(theComponent).toBeInTheDocument();
	});

	it("renders with passed text property", async () => {
		// Render new instance in every test to prevent leaking state
		const { getByText } = render(<Component text='This is a Button' />);

		await waitFor(() => getByText(/This is a Button/i));
	});
});

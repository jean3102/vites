import { render, screen } from "@testing-library/react";
import TextBox from "../components/TextBox";

let article: HTMLElement;
let paragraph: HTMLElement | null;
describe("textBox Component", () => {
	beforeEach(() => {
		render(<TextBox />);
		article = screen.getByRole("article");
		paragraph = screen.queryByText('description');
		console.log(`🚀 ------------ paragraph:`, paragraph)
	});

	test("check is component is rendered", () => {
		expect(article).toBeDefined();
	});

	test("check if content is not displayed", () => {
		expect(paragraph).toBeNull();
	});
});

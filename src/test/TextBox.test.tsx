import { fireEvent, render, screen } from '@testing-library/react';
import TextBox from '../components/TextBox';

describe('TexBox Component', () => {
	let button: HTMLElement;
	beforeEach(() => {
		render(<TextBox />);
		button = screen.getByRole('button', { name: 'open' });
	});

	test('check if component is rendered', () => {
		expect(screen.getByRole('article', { name: 'Text Box' }));
	});

	test('check if paragraph is not displayed', () => {
		expect(screen.queryByText(/description/i)).toBeNull();
	});

	test('check if paragraph is displayed when clicked', () => {
		fireEvent.click(button);
		expect(screen.getByText(/description/i));
	});

	test('check if paragraph is hidden when clicked again', () => {
		fireEvent.click(button);
		fireEvent.click(button);
		expect(screen.queryByText(/description/i)).toBeNull();
	});
});

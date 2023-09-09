import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
	beforeEach(() => {
		render(<Calculator />);
	});

	test('check if render Component', () => {
		expect(screen.getByRole('table'));
	});

	test('check if sum if working', () => {
		let input: HTMLInputElement = screen.getByTestId('result');
		fireEvent.click(screen.getByText('5'));
		fireEvent.click(screen.getByText('+'));
		fireEvent.click(screen.getByText('3'));
		fireEvent.click(screen.getByText('='));
		expect(input.value).toBe('8');
	});

	test('check if multiplication if working', () => {
		let input: HTMLInputElement = screen.getByTestId('result');
		fireEvent.click(screen.getByText('5'));
		fireEvent.click(screen.getByText('*'));
		fireEvent.click(screen.getByText('3'));
		fireEvent.click(screen.getByText('='));
		expect(input.value).toBe('15');
	});
});

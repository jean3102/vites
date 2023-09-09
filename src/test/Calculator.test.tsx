import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
	let input: HTMLInputElement;
	beforeEach(() => {
		render(<Calculator />);
		input = screen.getByTestId('result');
	});

	test('check if render Component', () => {
		expect(screen.getByRole('table'));
	});

	test('check if sum if working', () => {
		fireEvent.click(screen.getByText('5'));
		fireEvent.click(screen.getByText('+'));
		fireEvent.click(screen.getByText('3'));
		fireEvent.click(screen.getByText('='));
		expect(input.value).toBe('8');
	});

	test('check if multiplication if working', () => {
		fireEvent.click(screen.getByText('5'));
		fireEvent.click(screen.getByText('*'));
		fireEvent.click(screen.getByText('3'));
		fireEvent.click(screen.getByText('='));
		expect(input.value).toBe('15');
	});

	test('check if rest if working', () => {
		fireEvent.click(screen.getByText('5'));
		fireEvent.click(screen.getByText('-'));
		fireEvent.click(screen.getByText('3'));
		fireEvent.click(screen.getByText('='));
		expect(input.value).toBe('2');
	});

	test('check if division work', () => {
		fireEvent.click(screen.getByText('6'));
		fireEvent.click(screen.getByText('/'));
		fireEvent.click(screen.getByText('2'));
		fireEvent.click(screen.getByText('='));
		expect(input.value).toBe('3');
	});

	test('check validation if division by 0', () => {
		fireEvent.click(screen.getByText('6'));
		fireEvent.click(screen.getByText('/'));
		fireEvent.click(screen.getByText('0'));
		fireEvent.click(screen.getByText('='));
		expect(input.value).toBe('');
	});
});

import { describe, expect } from 'vitest';
import { FizzBuzz } from '../components/FizzBuzz';

describe('FizzBuzz Exercises', () => {
	test('should be function', () => {
		expect(typeof FizzBuzz).toBe('function');
	});

	test('For any number that is a multiple of 3, we print the word Fizz instead of the number', () => {
		expect(FizzBuzz(3)).toBe('Fizz');
	});

	test('For any number that is a multiple of 5, we print the word Buzz instead', () => {
		expect(FizzBuzz(5)).toBe('Buzz');
	});

	test('For any number that is a multiple of both 3 and 5, we print the word FizzBuzz', () => {
		expect(FizzBuzz(15)).toBe('FizzBuzz');
	});

	test('show the number is not multiple of 3 or 5', () => {
		expect(FizzBuzz(1)).toBe(1);
	});
	
	test('show the number is not multiple of 7', () => {
		expect(FizzBuzz(7)).toBe('Woff');
	});
});

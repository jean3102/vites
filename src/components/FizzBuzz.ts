export const FizzBuzz = (number: number) => {
	const multiples = { 3: 'Fizz', 5: 'Buzz', 7: 'Woff' };

	let output = '';
	Object.entries(multiples).forEach(([multiple, word]) => {
		if (number % parseInt(multiple) === 0) output += word;
	});

	return output === '' ? number : output;
};

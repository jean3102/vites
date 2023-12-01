import { useState } from 'react';

const Calculator = () => {
	const [input, setInput] = useState('');

	const handleValue = (value: string) => {
		setInput((preInput) => preInput + value);
	};

	const calculateResult = () => {
		try {
			const result = eval(input);

			if (result === Infinity) throw new Error('you can not divide by 0');
			if (isNaN(result)) throw new Error('Invalid regular expression:');
			setInput(result);
		} catch (error) {
			clearResult();
			alert(error);
		}
	};

	const clearResult = () => {
		setInput('');
	};

	return (
		<table border={1}>
			<tbody>
				<tr>
					<td colSpan={3}>
						<input
							data-testid="result"
							type="text"
							value={input}
							readOnly
						/>
					</td>
				</tr>
				<tr>
					<td>
						<button onClick={() => handleValue('7')}>7</button>
					</td>
					<td>
						<button onClick={() => handleValue('8')}>8</button>
					</td>
					<td>
						<button onClick={() => handleValue('9')}>9</button>
					</td>
				</tr>
				<tr>
					<td>
						<button onClick={() => handleValue('4')}>4</button>
					</td>
					<td>
						<button onClick={() => handleValue('5')}>5</button>
					</td>
					<td>
						<button onClick={() => handleValue('6')}>6</button>
					</td>
				</tr>
				<tr>
					<td>
						<button onClick={() => handleValue('1')}>1</button>
					</td>
					<td>
						<button onClick={() => handleValue('2')}>2</button>
					</td>
					<td>
						<button onClick={() => handleValue('3')}>3</button>
					</td>
				</tr>
				<tr>
					<td>
						<button onClick={() => handleValue('+')}>+</button>
					</td>
					<td>
						<button onClick={() => handleValue('0')}>0</button>
					</td>
					<td>
						<button onClick={() => handleValue('*')}>*</button>
					</td>
				</tr>
				<tr>
					<td>
						<button onClick={() => handleValue('/')}>/</button>
					</td>
					<td>
						<button onClick={() => handleValue('-')}>-</button>
					</td>
					<td>
						<button onClick={clearResult}>C</button>
					</td>
				</tr>
				<tr>
					<td colSpan={2}>
						<button
							style={{ width: '100%' }}
							onClick={calculateResult}>
							=
						</button>
					</td>
					<td>
						<button onClick={() => handleValue('.')}>.</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Calculator;

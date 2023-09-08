import { useState } from 'react';

const Calculator = () => {
	const [input, setInput] = useState('');

	const handleValue = (value: string) => {
		setInput((preInput) => preInput + value);
	};

	const calculateResult = () => {
        let result = eval(input);
        console.log(`🚀 ------------ result:`, result)
        console.log(`🚀 ------------ result:`,typeof result)
		setInput(result);
	};
	return (
		<table border={1}>
			<tbody>
				<tr>
					<td colSpan={3}>
						<input
                            placeholder='calculate'
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
						<button onClick={calculateResult}>=</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Calculator;

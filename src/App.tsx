import './App.css';
import { FizzBuzz } from './components/FizzBuzz';

function App() {

	const generateNumber = () => {
		for (let index = 0; index < 20; index++) {
			const res = FizzBuzz(index)
			console.log(`🚀 ------------ res:`, res)
		}
		// const res = FizzBuzz(3)
		// console.log(`🚀 ------------ res:`, res)
	}


	return (
		<>
			<h1>FizzBuzz</h1>
			<button onClick={generateNumber}>Check</button>
		</>
	);
}

export default App;

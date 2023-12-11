import './Jokes.css';
import { JOKES } from '../jokes';
import { useState } from 'react';

export default function Jokes() {
	const [selectedJoke, setSelectedJoke] = useState('');
	const [visibilityProgress, setvisibilityProgress] = useState(false);
	const [visibilityAnswer, setvisibilityAnswer] = useState(false);
	const [contentDrawButton, setContentDrawButton] = useState('Losuj suchara');

	function handleShowAnswer() {
		setvisibilityAnswer(true);
	}

	const jokesLenght = JOKES.length;
	function drawIndeks() {
		const indexJoke = Math.round(Math.random() * (jokesLenght - 1));
		setSelectedJoke(JOKES[indexJoke]);
		setvisibilityProgress(true);
		setTimeout(changeStateProgress, 500);
		setvisibilityAnswer(false);
	}
	function changeStateProgress() {
		setvisibilityProgress(false);
	}

	async function hideProgress() {
		try {
			await drawIndeks();
			await setTimeout(() => {
				changeStateProgress();
				setContentDrawButton('Nowe losowanie');
			}, 1000);
		} catch {
			console.log('błąd');
		}
	}

	return (
		<>
			<button className='buttonJoke' onClick={hideProgress}>
				{contentDrawButton}
			</button>
			{visibilityProgress && <progress></progress>}
			<p> {selectedJoke.question} </p>

			<button onClick={handleShowAnswer}>Odsłoń odpowiedź</button>
			{visibilityAnswer ? <p>{selectedJoke.answer}</p> : null}
		</>
		//
	);
}

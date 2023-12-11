import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Jokes from './Jokes';
import { useState } from 'react';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
		//setSelectedJoke('tu będzie twoj suchar');
	}

	console.log('app komponent przeładowany');
	//console.log(tabContent);

	// const jokesLenght = JOKES.length;
	// function drawIndeks() {
	// 	const indexJoke = Math.round(Math.random() * (jokesLenght - 1));
	// 	setSelectedJoke(JOKES[indexJoke]);
	// 	setvisibilityProgress(true);
	// 	setTimeout(changeStateProgress, 500);
	// }
	// function changeStateProgress() {
	// 	setvisibilityProgress(false);
	// }

	// async function hideProgress() {
	// 	try {
	// 		await drawIndeks();
	// 		console.log('wybranie zartu');
	// 		await setTimeout(() => {
	// 			changeStateProgress();
	// 		}, 1000);
	// 		console.log('schowaj pasek');
	// 	} catch {
	// 		console.log('');
	// 	}
	// }

	let tabContent = <p>Wybierz temat</p>;
	if (selectedTopic) {
		tabContent = (
			<div>
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
				{/* {selectedTopic === 'suchary' && <Jokes />} */}
			</div>
		);
	}
	if (selectedTopic === 'suchary') {
		tabContent = <Jokes />;
	}
	return (
		<section id='examples'>
			<h2>Examples</h2>
			<menu>
				<TabButton
					isSelected={selectedTopic === 'components'}
					onSelect={() => handleSelect('components')}>
					Components
				</TabButton>
				{/* do onSelect przypisujemy funkcje, a całe onSelect jest przekazane do komponentu tabButton i przekazane do onCLicka */}
				<TabButton
					isSelected={selectedTopic === 'jsx'}
					onSelect={() => handleSelect('jsx')}>
					JSX
				</TabButton>
				<TabButton
					isSelected={selectedTopic === 'props'}
					onSelect={() => handleSelect('props')}>
					Props
				</TabButton>
				<TabButton
					isSelected={selectedTopic === 'state'}
					onSelect={() => handleSelect('state')}>
					State
				</TabButton>
				<TabButton
					isSelected={selectedTopic === 'suchary'}
					onSelect={() => handleSelect('suchary')}>
					Suchary
				</TabButton>
			</menu>
			{/* {selectedTopic} */}
			<div id='tab-content'>
				{/* PIERWSZA MOŻLIWOŚĆ PREZENTACJI WARUNKOWEJ ZA POMOCĄ OPERATORA TRÓJSKŁADNIKOWEGO
            {!selectedTopic ? (
							<p> Wybierz temat </p>
						) : (
							<div>
								<h3>{EXAMPLES[selectedTopic].title}</h3>
								<p>{EXAMPLES[selectedTopic].description}</p>
								<pre>
									<code>{EXAMPLES[selectedTopic].code}</code>
								</pre>
							</div>
						)} */}
				{/* DRUGA MOŻLIWOŚĆ ZA POMOCĄ &&
            {!selectedTopic && <p>Wybierz temat</p>}
						{selectedTopic && (
							<div>
								<h3>{EXAMPLES[selectedTopic].title}</h3>
								<p>{EXAMPLES[selectedTopic].description}</p>
								<pre>
									<code>{EXAMPLES[selectedTopic].code}</code>
								</pre>
							</div>
						)} */}
				{/* trzecia możliwość, za pomocą przypisania kodu JSX do zmiennej i wyświetlanie jej po spełnieniu warunków, wyżej dodane przed return */}
				{tabContent}
			</div>
		</section>
	);
}

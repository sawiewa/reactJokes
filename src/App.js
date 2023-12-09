//import './App.css';
import './index.css';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';
import Jokes from './components/Jokes';
import { JOKES } from './jokes';

function App() {
	// const testPromise = new Promise((resolve, reject) => {
	// 	if (true) {
	// 		resolve('jest ok');
	// 	} else {
	// 		reject('błąd');
	// 	}
	// });
	// testPromise
	// 	.then((info) => console.log(info))
	// 	.catch((err) => console.log(err));

	// const checkAge = (age) => {
	// 	return new Promise((resolve, reject) => {
	// 		if (age >= 18) {
	// 			resolve();
	// 		} else {
	// 			reject('jestes za młody');
	// 		}
	// 	});
	// };

	// const doubleCheck = () => {
	// 	return new Promise(resolve => {
	// 		console.log('trwa sprawdzanie jeszcze raz...');
	// 		setTimeout(() => {
	// 			resolve('faktycznie się zgadza');
	// 		}, 1000);
	// 	});
	// }

	// checkAge(51)
	// 	.then(() => {
	// 		console.log('chyba możesz wejść');
	// 		return doubleCheck();
	// 	})
	// 	.then((res) => console.log(res))
	// 	.then(() => {
	// 		console.log('weryfikacja zakończona');
	// 	}).catch(error=> console.log(error))

	//TWORZENIE FUNKCJI ASYNCHRONICZNEJ
	// async function test() {
	// 	try {
	// 		await checkAge(2);
	// 		console.log('chyba możesz wejść');
	// 		await doubleCheck();
	// 		console.log('faktycznie się zgadza');
	// 		console.log('trwa sprawdzanie jeszcze raz...');
	// 	} catch {
	// 		console.log('bląd jestes za mały');
	// 	}
	// }
	// test();

	const [selectedTopic, setSelectedTopic] = useState();
	const [selectedJoke, setSelectedJoke] = useState('tu będzie twoj suchar');
	const [visibilityProgress, setvisibilityProgress] = useState(false);

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
		setSelectedJoke('tu będzie twoj suchar');
	}

	console.log('app komponent przeładowany');
	//console.log(tabContent);

	const jokesLenght = JOKES.length;
	function drawIndeks() {
		const indexJoke = Math.round(Math.random() * (jokesLenght - 1));
		setSelectedJoke(JOKES[indexJoke]);
		setvisibilityProgress(true);
		setTimeout(changeStateProgress, 500);
	}
	function changeStateProgress() {
		setvisibilityProgress(false);
	}

	async function hideProgress() {
		try {
			await drawIndeks();
			console.log('wybranie zartu');
			await setTimeout(() => {
				changeStateProgress();
			}, 1000);
			console.log('schowaj pasek');
		} catch {
			console.log('');
		}
	}

	let tabContent = <p>Wybierz temat</p>;
	if (selectedTopic) {
		tabContent = (
			<div>
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
				{selectedTopic === 'suchary' && (
					<>
						<button className='buttonJoke' onClick={hideProgress}>
							Losuj
						</button>
						{visibilityProgress && <progress></progress>}
						<Jokes
							question={selectedJoke.question}
							answer={selectedJoke.answer}
						/>
					</>
				)}
			</div>
		);
	}
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h1>Oto powody</h1>
					<ul>
						{/* dzięki map jak zmieni nam się plik to zostaną wyswietlone prawidłowo pozostałe a nie bedzie wolnego miejsca, albo jak dodamy nowy to tez się wyswietli */}
						{CORE_CONCEPTS.map((element) => (
							// <CoreConcept
							// 	title={element.title}
							// 	description={element.description}
							// 	image={element.image}
							// />
							//element to kazdy obiekt z pliku dlatego mozemy tez jedną linijką
							<CoreConcept key={element.title} {...element} />
						))}
						{/* <CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						{/* pobieramy propsy z pliku data, najpierw trzeba tu skopiowac ... kopiouje się cały obiekt i pobiera atrybuty, wynik jest taki sam jak wyżej */}
						{/* <CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} /> */}
					</ul>
				</section>
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

				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;

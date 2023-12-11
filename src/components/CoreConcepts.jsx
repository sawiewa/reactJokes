import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts() {
    return(
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
	</section>);
}

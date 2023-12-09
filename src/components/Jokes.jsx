import './Jokes.css';


export default function Jokes({question, answer}) {
	return (
		<div>
			<h1>{question}</h1>
			<p>{answer}</p>
		</div>
	);
}

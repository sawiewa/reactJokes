//import logo from '../../assets/react-core-concepts.png';
import logo from '../../assets/dlaczegoja.jpg';
//import componentsImg from '../src/assets/components.png';
import './Header.css';

const reactDescriptions = [
	'Nie pożałujesz  😏  ',
	'Dam z siebie wszystko  😎 ',
	'Bo tak  😜 ',
];

function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
	return (
		<header>
			<img src={logo} alt='Stylized atom' />
			<h1>Dlaczego JA ?</h1>
			<p>{reactDescriptions[genRandomInt(2)]}</p>
		</header>
	);
}

import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import heartImg from './assets/heart.jpg';
import osiolImg from './assets/osiol.jpg';
import drzewoImg from './assets/drzewo.jpg';
import wszystkoImg from './assets/wszystko.png';

export const CORE_CONCEPTS = [
	{
		image: heartImg,
		title: 'Znam Was',
		description:
			'',
	},
	{
		image: wszystkoImg,
		title: 'Znam aplikację',
		description:
			'',
	},
	{
		image: osiolImg,
		title: 'Jestem uparta',
		description:
			'',
	},
	{
		image: drzewoImg,
		title: 'Jestem cierpliwa',
		description:
			'',
	},
	
];

export const EXAMPLES = {
	components: {
		title: 'Components',
		description:
			'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
		code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
	},
	suchary: {
		title: 'Suchary',
		description:
			'Wylosuj suchara',
		code: ''
	},
	jsx: {
		title: 'JSX',
		description:
			'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
		code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
	},
	props: {
		title: 'Props',
		description:
			'Components accept arbitrary inputs called props. They are like function arguments.',
		code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,

	},
	state: {
		title: 'State',
		description:
			'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
		code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);
  

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
	},
};

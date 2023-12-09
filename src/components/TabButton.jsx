export default function TabButton({ children, onSelect, isSelected }) {
	//const buttonId = Math.random();
	return (
		<li>
			<button className={isSelected ? 'active' : undefined} onClick={onSelect}>
				{children}
			</button>
		</li>
	);
} //TO JEST Z DESTRUKTURYZACJĄ

// export default function TabButton(props) {
// 	return (
// 		<li>
// 			<button>{props.children}</button>
// 		</li>
// 	);
// } TO JEST BEZ DESTRUKTURYZACJI

// można było też użyć zwykłych propsów
// export default function TabButton({label}){
//     return (
//         		<li>
//         			<button>{label}</button>
//         		</li>
//         	);
// }

//a potem tam gdzie wstawiamy komponent wpisac atrybut z odpowiednim tekstem jaki ma być ustawiony <TabButton label='Componentsfdsfdg'></TabButton>

// jeżeli nie damy props children to nic pomiędzy <TabButton>Components</TabButton> nam się nie wyświetli, React nie będzie wiedział gdzie to wyświetlić,
//to jest specjalny, WBUDOWANY rekwizyt
//jest to właściwość ustawiana przez Reacta i nie jest ustawiana za pomocą atrybutów, czyli używając komponentu TabButton nie musimy tam wpisywać rekwizytu children
// przekazując z komponentu props.children, odnosi się do zawartości pomiedzy tekstem komponentu
// może to być tekst ale może to być kod jsx

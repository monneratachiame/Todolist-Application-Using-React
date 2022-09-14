import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//tudo que esta aqui é o que eu vou executar
	const [list, setList] = useState([]);
		
	const value = (event) => {
		//console.log(event.target.value)
		if (event.keyCode === 13) {
			setList([...list, event.target.value]);
			event.target.value="";
		};

		//console.log(list)
	}
	
	//criar função pra tirar o valor da lista no X - como tirar um valor do array (um index especifico)
	//const delete = (event) => {}
	

	//tudo que jogo de volta pro usuario ver
	return (
		<div className="list-group">
			<h1 className="test-center">
				Todos
			</h1>
			<input type="text" placeholder="Whats need to be done?" size="100" onKeyDown={value}>
			</input>
			<div>
				<ul className="list-group-item disabled" aria-disabled="true">
						{list.map((item, index) => <li key={index} className={index}>{item} <button onClick={() => {deleteItem(index)}}>delete</button></li>)}
				</ul>
			</div>
		</div>
	);
};

export default Home;

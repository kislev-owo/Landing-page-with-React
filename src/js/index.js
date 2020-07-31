//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Jumbotron } from "./component/Jumbotron.js"; //Este es el Jumbotron
import { Cards } from "./component/cards.js"; // Esto puede ser el group card
import { Footer } from "./component/footer.js"; //Este es el Footer
//Render your react application, aqui se supone que puedo modificar las props y eso lo hace dinamico
var fila;
var currentValue = [
	`Lorem ipsum dolor sir amer, cosectetur adpisicing elit. Sapiente esse necesatalibus raque.`,
	`Lorem ipsum dolor sir amer, cosectetur adpisicing elit. Explixcado magni beabe culpa natus architecto.`,
	`Lorem ipsum dolor sir amer, cosectetur adpisicing elit. Sapiente esse necesatalibus raque.`,
	`Lorem ipsum dolor sir amer, cosectetur adpisicing elit. Explixcado magni beabe culpa natus architecto.`
];
ReactDOM.render(
	<>
		<Jumbotron
			title="A Warm Welcome!"
			description="Lorem ipsum dolor sit amet, consectetur adispisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam illo aspernatur vitae fugiat numquam repellat."
			buttonLabel="Call to action!"
			buttonUrl="#"
		/>
		<div className="row justify-content-md-center ">
			{
				(fila = currentValue.map(function(x) {
					return (
						<div className="col-md-auto">
							<Cards text={x} />
						</div>
					);
				}))
			}
		</div>
		<Footer title1="Copyright © Your Website 2020" />
	</>,
	document.querySelector("#app")
);

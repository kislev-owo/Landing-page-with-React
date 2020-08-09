//import react into the bundle
import React from "react";

//import your own components
import { Jumbotron } from "/workspace/Landing-page-with-React/src/js/component/Jumbotron.js"; //Este es el Jumbotron
import { Cards } from "/workspace/Landing-page-with-React/src/js/component/cards.js"; // Esto puede ser el group card
import { Footer } from "/workspace/Landing-page-with-React/src/js/component/footer.js"; //Este es el Footer

var fila;
var currentValue = [
	`Lorem ipsum dolor sir amer, cosectetur adpisicing elit. Sapiente esse necesatalibus raque.`,
	`Lorem ipsum dolor sir amer, cosectetur adpisicing elit. Explixcado magni beabe culpa natus architecto.`,
	`Lorem ipsum dolor sir amer, cosectetur adpisicing elit. Sapiente esse necesatalibus raque.`,
	`Lorem ipsum dolor sir amer, cosectetur adpisicing elit. Explixcado magni beabe culpa natus architecto.`
];

//create your first component
export function Home() {
	return (
		<>
			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet, consectetur adispisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam illo aspernatur vitae fugiat numquam repellat."
				buttonLabel="Call to action!"
				buttonUrl="#"
			/>
			,
			<div className="row justify-content-md-center  ">
				{
					(fila = currentValue.map(function(x, index) {
						return (
							<div className="col-md-auto" key={index}>
								<Cards text={x} />
							</div>
						);
					}))
				}
			</div>
			,<Footer title1="Copyright © Your Website 2020" />
		</>
	);
}

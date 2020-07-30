//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Jumbotron } from "./component/Jumbotron.js";
import { Home } from "./component/home.js";
import { Footer } from "./component/footer.js";
//render your react application

ReactDOM.render(
	<>
		<Jumbotron
			title="Welcome to react"
			description="React is the most popular rendering library in the world"
			buttonLabel="Go to the official website"
			buttonUrl="https://reactjs.org/"
		/>
		,<Home />,<Footer title1="Welcome to react" />
	</>,
	document.querySelector("#app")
);

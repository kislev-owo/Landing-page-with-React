import React from "react";
import PropTypes from "prop-types";

//Styles
const jumbotronStyle = {
	background: "#ebe5e5",
	paddingLeft: "30px",
	paddingRight: "30px",
	paddingBottom: "60px"
};
const leadStyle = {
	fontSize: "15px"
};

//component
export const Jumbotron = props => {
	return (
		<div className="container">
			<div style={jumbotronStyle} className="Jumbotron-Space">
				<h1 className="display-4">{props.title}</h1>
				<p style={leadStyle} className="lead">
					{props.description}
				</p>
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonUrl}
					role="button">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonUrl: PropTypes.string
};

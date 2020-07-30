import React from "react";
import PropTypes from "prop-types";

//component
export const Jumbotron = props => {
	return (
		<div className="container">
			<div className="Jumbotron-Space">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">{props.description}</p>
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

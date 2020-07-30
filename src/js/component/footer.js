import React from "react";
import PropTypes from "prop-types";

//Styles
const containerStyles = {
	background: "#3A3A3A"
};
const tituloStyles = {
	color: "white",
	fontSize: "15px",
	textAlign: "center",
	padding: "40px"
};

//component
export const Footer = props => {
	return (
		<div style={containerStyles} className="container-fluid-footer">
			<h1 style={tituloStyles} className="display-1">
				{props.title1}
			</h1>
		</div>
	);
};
Footer.propTypes = {
	title1: PropTypes.string
};

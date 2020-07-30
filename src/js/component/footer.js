import React from "react";
import PropTypes from "prop-types";

//component
export const Footer = props => {
	return (
		<div className="container-fluid">
			<h1 className="display-1">{props.title1}</h1>
		</div>
	);
};

Footer.propTypes = {
	title1: PropTypes.string
};

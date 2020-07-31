import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
//Card component
export function Cards(props) {
	return (
		<div className="card text-center " style={{ width: "18rem" }}>
			<img
				src="https://placehold.it/500x325.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body ">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary ">
					{`Find Out More!`}
				</a>
			</div>
		</div>
	);
}

Cards.propTypes = {
	text: PropTypes.string
};

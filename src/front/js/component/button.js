import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = props => {
	return <label className="btn btn-primary ml-5">More Info</label>;
};

Button.propTypes = {
	objeto: PropTypes.object
};
export default Button;

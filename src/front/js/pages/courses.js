import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../component/Card";
import { Context } from "../store/appContext";

export const Courses = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Card />
		</div>
	);
};

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "../component/Jumbotron.js";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div>
			<Jumbotron />
			<Jumbotron />
			<Jumbotron />
		</div>
	);
};

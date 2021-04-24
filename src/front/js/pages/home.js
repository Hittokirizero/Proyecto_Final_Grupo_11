import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "../component/Jumbotron.js";
import Card from "../component/Card.js";
import "../../styles/home.scss";
import "../../styles/demo.scss";
import Cards2 from "../component/Cards2.js";
export const Home = () => {
	return (
		<div>
			<Jumbotron />
			<Card />
			<Cards2 />
		</div>
	);
};

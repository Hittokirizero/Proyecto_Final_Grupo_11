import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Jumbotron from "../component/Jumbotron.js";
import JumboEnd from "../component/Jumbotron2.js";
import Card from "../component/Card.js";
import Card2 from "../component/Card2.js";
import Card3 from "../component/Card3.js";
import Card2Inv from "../component/Card2Inv.js";
import "../../styles/home.scss";
import "../../styles/demo.scss";

export const Home = () => {
	return (
		<div>
			<Jumbotron />
			<Card3 />
			<Card2 />
			<Card />
			<Card2Inv />
			<JumboEnd />
		</div>
	);
};

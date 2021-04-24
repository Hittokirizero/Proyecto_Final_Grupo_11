import React from "react";
import { Card, CardImg, CardImgOverlay } from "reactstrap";
import "../../styles/home.scss";

const Card3 = props => {
	return (
		<div className="container mb-4">
			<Card inverse>
				<CardImg src="https://picsum.photos/800/500" />
				<CardImgOverlay>
					<div className="my-auto text-center">
						<h5>Card Title</h5>
						<p>
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="text-muted">Last updated 3 mins ago</p>
					</div>
				</CardImgOverlay>
			</Card>
		</div>
	);
};

export default Card3;

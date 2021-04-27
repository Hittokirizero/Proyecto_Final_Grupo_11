import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

const Card3 = props => {
	return (
		<div className="container mb-4">
			<Card inverse>
				<CardImg width="100%" src="https://picsum.photos/1920/1080" alt="Card image cap" />
				<CardImgOverlay>
					<CardTitle tag="h5">Card Title</CardTitle>
					<CardText>
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</CardText>
					<CardText>
						<small className="text-muted">Last updated 3 mins ago</small>
					</CardText>
				</CardImgOverlay>
			</Card>
		</div>
	);
};

export default Card3;

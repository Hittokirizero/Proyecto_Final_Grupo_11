import React from "react";

export const bigCardInv = () => {
	return (
		<div className="First">
			<div className="card mb-3">
				<div className="row bg-dark text-light">
					<div className="col-md-6 my-auto px-2">
						<div className="text-center ">
							<h1 className="card-title">Card title</h1>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
					<div className="col-6">
						<img src="https://picsum.photos/1000/600" alt="..." />
					</div>
				</div>
			</div>
		</div>
	);
};

export default bigCardInv;

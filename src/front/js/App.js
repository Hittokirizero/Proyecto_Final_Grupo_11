import React, { useState } from "react";
import { Button } from "reactstrap";
// import "/workspace/Proyecto_Final_Grupo_11/src/front/styles/App.scss";
import PayPal from "/workspace/Proyecto_Final_Grupo_11/src/front/js/component/PayPal.js";

function App() {
	const [checkout, setCheckOut] = useState(false);

	return (
		<div className="App">
			{checkout ? (
				<PayPal />
			) : (
				<Button
					outline
					color="none"
					border-color="none"
					onClick={() => {
						setCheckOut(true);
					}}>
					<i className="fas fa-money-check-alt fa-2x text-center" />
				</Button>
			)}
		</div>
	);
}

export default App;

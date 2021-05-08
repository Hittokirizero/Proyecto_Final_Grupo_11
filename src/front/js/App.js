import React, { useState } from "react";
import "/workspace/Proyecto_Final_Grupo_11/src/front/styles/App.scss";
import PayPal from "/workspace/Proyecto_Final_Grupo_11/src/front/js/component/PayPal.js";

function App() {
	const [checkout, setCheckOut] = useState(false);

	return (
		<div className="App">
			{checkout ? (
				<PayPal />
			) : (
				<button
					onClick={() => {
						setCheckOut(true);
					}}>
					Checkout
				</button>
			)}
		</div>
	);
}

export default App;

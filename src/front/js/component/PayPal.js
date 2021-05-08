import React, { useRef, useEffect } from "react";

export default function Paypal() {
	const paypal = useRef();

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions, err) => {
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: "Curso",
								amount: {
									currency_code: "USD",
									value: 100.0
								}
							}
						]
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					console.log(order);
					// Aca va el API de contratacion y el popup
				},

				onError: err => {
					console.log(err);
				}
			})
			.render(paypal.current);
	}, []);

	return (
		<div>
			<div ref={paypal} />
		</div>
	);
}

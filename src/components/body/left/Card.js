import React from "react";
import "./Card.css";

function Card({ typeofcases, today, total }) {
	const notUpdated = "Not Updated";
	const kg = `+${today / 1000}K`;
	const m = `${total / 1000000}m`;
	return (
		<div className="card">
			<h1>{typeofcases}</h1>
			<h2>{today === 0 ? notUpdated : kg}</h2>
			<h4>{m}</h4>
		</div>
	);
}

export default Card;

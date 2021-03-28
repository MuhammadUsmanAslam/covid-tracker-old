import React from "react";
import "./Header.css";

function Header({ countries, setCountry }) {
	return (
		<div className="header">
			<h1>Covid-19 Tracker</h1>
			<form>
				<select
					onChange={(event) => {
						return setCountry(event.target.value);
					}}
					name="countries"
					id="countries"
					className="select__countries"
				>
					<option value="worldwide">Worldwide</option>
					{countries.map((country) => {
						return <option value={country.value}>{country.name}</option>;
					})}
				</select>
			</form>
		</div>
	);
}

export default Header;

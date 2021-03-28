import React from "react";
import Left from "./left/Left";
import Right from "./right/Right";

function Body({ children }) {
	return <div className="body">{children}</div>;
}

export default Body;

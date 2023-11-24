import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Loading from "./screens/Loading/Loading";
import Home from "@src/screens/Home/Home";
// import Dashboard from "./screens/Dashboard/Dashboard";
import Editor from "./screens/Editor/Editor";



function App() {
	return (
		<div>
			<Editor/>
			{/* <Dashboard/> */}
		</div>
	);
}

export default App;

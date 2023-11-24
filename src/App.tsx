import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Loading from "./screens/Loading/Loading";
import Home from "@src/screens/Home/Home";
// import Dashboard from "./screens/Dashboard/Dashboard";
import Editor from "./screens/Editor/Editor";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/editor" element={<Editor />} />
		</Routes>
	);
}

export default App;

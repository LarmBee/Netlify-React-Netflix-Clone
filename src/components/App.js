import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { auth } from "./firebase-config";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from "firebase/auth";
import LogForm from "./Form";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from "react-router-dom";
import Home from "./Home";

const App = () => {
	return (
		<Router>
			<div className="container-fluid movie-app">
				<Routes>
					<Route path="/login" element={<LogForm />} />
					<Route path="/" element={<LogForm />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;

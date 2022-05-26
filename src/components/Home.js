import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import LandingPage from "./LandingPage";
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

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	let navigate = useNavigate();


	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
			console.log(movies);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

    const logout = async (e) => {
		e.preventDefault();
		await signOut(auth);
		navigate('/login')

	};

	return (
		<div className="container-fluid movie-app">
			<div className="row">
				<MovieListHeading heading="Netlify" />
				<SearchBox className="search" searchValue={searchValue} setSearchValue={setSearchValue} />
				<button onClick={logout} className="button1 btn btn-danger" >
					Logout
				</button>
			</div>
			<div>
				<LandingPage />
			</div>
			<br />
			<h2>
				<u>SEARCH RESULTS ...</u>
			</h2>
			<br />
			<div className="row">
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default Home;

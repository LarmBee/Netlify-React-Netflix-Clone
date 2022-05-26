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
import AddFavourites from "./AddFavourites";
import RemoveFavourites from "./RemoveFavourites";

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [favourites, setFavourites] = useState([]);

	let navigate = useNavigate();

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
		console.log(responseJson);

		if (responseJson.Search) {
			setMovies(responseJson.Search);
			console.log(movies);
		}
	};
	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
		setFavourites(newFavouriteList);
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	const logout = async (e) => {
		e.preventDefault();
		await signOut(auth);
		navigate("/login");
	};

	return (
		<div className="container-fluid movie-app">
			<div className="row">
				<MovieListHeading className="base-font" heading="Netlify" />
				<SearchBox
					className="search"
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
				<button onClick={logout} className="button1 btn btn-danger">
					Logout
				</button>
			</div>
			<div>
				<LandingPage />
			</div>
			<br />
			<h2>
				<u className="font-base">SEARCH RESULTS ...</u>
			</h2>
			<br />
			<div className="row">
				<MovieList
					movies={movies}
					favouriteComponent={AddFavourites}
					handleFavouritesClick={addFavouriteMovie}
				/>
			</div>
			<h2>
				<u className="font-base">FAVOURITES ..</u>
			</h2>
			<div className="row d-flex align-items-center mt-4 mb-4">
				<MovieListHeading />
			</div>
			<div className="row">
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default Home;

import React from "react";

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="image-container">
					<img src={movie.Poster} alt="movie"></img>
					<h3>{movie.Title}</h3>
					<h4>{movie.Year}</h4>
				</div>
			))}
		</>
	);
};

export default MovieList;

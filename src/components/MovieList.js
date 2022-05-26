import React from "react";

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="image-container">
					<img src={movie.Poster} alt="movie"></img>
					<h3>{movie.Title}</h3>
					<h4>{movie.Year}</h4>
					<div style={{width:'330px',height:'90px'}} onClick={()=>props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;

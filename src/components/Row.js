import React, { useState, useEffect } from 'react';
import axios from './Axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import { appContext } from './App.js';
import { BACKEND_API_URL } from './Info.js';

const base_Url = 'https://image.tmdb.org/t/p/original/';
const backendURL = `${BACKEND_API_URL}/api/movies`;

function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');
	const [selectedMovie, setSelectedMovie] = useState({});
	const appCtx = React.useContext(appContext);
	console.log('selectedMovie: ', selectedMovie);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			console.log(request.data.results);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	console.log(movies);

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (event, movie) => {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			movieTrailer(movie?.name || '')
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((error) => console.log(error));
		}
		event.preventDefault();
		console.log('In handleClick(), selectedMovie: ', movie.name);
		setSelectedMovie(movie);
	};

	const handleAddMovie = async (event, movieId) => {
		if (appCtx.user) {
			try {
				console.log(`Adding movie to ${appCtx.user}`, movieId);
				const data = await axios({
					method: 'post',
					url: `${backendURL}/user/${appCtx.user}/${movieId}`,
					headers: {
						Authorization: `bearer ${appCtx.token}`,
					},
				});
				console.log(
					`Add movie ${movieId} to user ${appCtx.user} response`,
					data.data
				);
				event.target.innerHTML = 'Added to Watchlist';
			} catch (err) {
				console.log(
					`Error adding movie ${movieId} to user ${appCtx.user}`,
					err.message
				);
			}
		} else {
			event.target.innerHTML = 'Please Login to add movies to your watchlist';
		}
	};

	const handleCloseAddMovie = async (event) => {
		event.preventDefault();
		console.log('In handleCloseAddMovie()');
		setSelectedMovie({});
	};

	let selectedMovieJSX = <></>;
	if (selectedMovie && selectedMovie.name) {
		const movie = selectedMovie;
		console.log('movie selected: ', movie.id);

		selectedMovieJSX = (
			<div className='movieDetails'>
				<Card style={{ color: 'blue', borderColor: '#808080' }}>
					<Button id='addMovie' onClick={(event) => handleCloseAddMovie(event)}>
						X
					</Button>
					<br />
					<CardImg
						top
						width='100%'
						className='moviePoster'
						src={`${base_Url}${movie.poster_path}`}
						alt={movie.name}
					/>
					<CardBody className='cardBody'>
						<div className='movieInfoCard'>
							<h2 className='jsxTitle'>{movie.name}</h2>
							<br />
							<h5 className='jsxRating'>
								Rating: {movie.vote_average}/10 by {movie.vote_count} users
							</h5>
							<h5 className='jsxRelease'>
								Release Date: {movie.first_air_date}
							</h5>
							<br />
							<h5 className='jsxOverview'>{movie.overview}</h5>
						</div>
						<br />
					</CardBody>
					<Button
						id='addMovie'
						onClick={(event) => handleAddMovie(event, movie.id)}>
						Add to Watchlist
					</Button>
					{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
				</Card>
			</div>
		);
	}

	return (
		<div className='row'>
			<h2 className='category'>{title}</h2>
			<div className='row_posters'>
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={(event) => handleClick(event, movie)}
						className='row_poster'
						src={`${base_Url}${movie.poster_path}`}
						alt={movie.name}
					/>
				))}
			</div>
			{selectedMovieJSX}
		</div>
	);
}

export default Row;

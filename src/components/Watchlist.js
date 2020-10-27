import React from 'react';
import MovieCard from './MovieCard';
import './watchlist.css';
const Watchlist = (props) => {
	// console.log("movie props in card", {movie})
	console.log(props);
	const baseURL = 'http://localhost:4501/api/movies';
	const [movies, setMovies] = React.useState([]);
	const loadWantToWatchMovies = () => {
		fetch(`${baseURL}/wantToWatch/user/${props.user}`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.data);
				console.log('movie data in the fetch call', data);
			});
	};
	const loadAllMovies = () => {
		fetch(`${baseURL}/all/user/${props.user}`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.data);
				console.log('movie data in the fetch call', data);
			});
	};
	const loadWatchedMovies = () => {
		fetch(`${baseURL}/watched/user/${props.user}`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.data);
				console.log('movie data in the fetch call', data);
			});
	};
	React.useEffect(() => {
		loadWantToWatchMovies();
	}, []);
	const movieJSX = movies.map((movie, index) => (
		<MovieCard movie={movie} key={index} />
	));
	return movies.length > 0 ? (
		<div className='movieCardContainer'>
			{/*All | Watched | Want to Watch  */}
			<input
				type='radio'
				name='watchtype'
				value='all'
				onChange={() => loadAllMovies()}
			/>{' '}
			All
			<input
				type='radio'
				name='watchtype'
				value='watched'
				onChange={() => loadWatchedMovies()}
			/>
			Watched
			<input
				type='radio'
				name='watchtype'
				value='want-to-watch'
				checked='true'
				onChange={() => loadWantToWatchMovies()}
			/>{' '}
			Want to Watch
			{movieJSX}
		</div>
	) : (
		<h3>
			No Movies in your Watchlist. Please Browse and add them to the list.
		</h3>
	);
};
export default Watchlist;

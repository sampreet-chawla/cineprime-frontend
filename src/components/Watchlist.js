import React from 'react';
import MovieCard from './MovieCard';
import './watchlist.css';
import { Button } from 'reactstrap';

const Watchlist = (props) => {
	// console.log("movie props in card", {movie})
	console.log(props);
	const baseURL = 'http://localhost:4501/api/movies';
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2MDM4NTM3MDZ9.oGyhMdF-5YCgZ1zGT6phIhQWYT8_UIvHOmSSBII_qA8';

	const [movies, setMovies] = React.useState([]);
	const [watchType, setWatchType] = React.useState('want-to-watch');

	const loadWantToWatchMovies = () => {
		fetch(`${baseURL}/wantToWatch/user/${props.user}`, {
			method: 'get',
			headers: {
				Authorization: `bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.data);
				console.log('movie data in the fetch call', data);
			});
		setWatchType('want-to-watch');
	};
	const loadAllMovies = () => {
		fetch(`${baseURL}/all/user/${props.user}`, {
			method: 'get',
			headers: {
				Authorization: `bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.data);
				console.log('movie data in the fetch call', data);
			});
		setWatchType('all');
	};
	const loadWatchedMovies = () => {
		fetch(`${baseURL}/watched/user/${props.user}`, {
			method: 'get',
			headers: {
				Authorization: `bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.data);
				console.log('movie data in the fetch call', data);
			});
		setWatchType('watched');
	};
	//delete a movie from watchlist
	const deleteMovie = (movie) => {
		fetch(`${baseURL}/id/${movie._id}`, {
			method: 'delete',
			headers: {
				Authorization: `bearer ${token}`,
			},
		}).then((response) => loadWantToWatchMovies());
	};

	// clear Watchlist
	const handleClearWatchlist = () => {
		fetch(`${baseURL}/user/${props.user}`, {
			method: 'delete',
			headers: {
				Authorization: `bearer ${token}`,
			},
		}).then((response) => loadWantToWatchMovies());
	};

	//save dates for a movie
	const saveDatesForMovie = (movieId, datesObj) => {
		console.log('In saveDatesForMovie ', datesObj);
		fetch(`${baseURL}/saveDates/${movieId}`, {
			method: 'put',
			headers: {
				Authorization: `bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(datesObj),
		})
			.then((response) => {
				console.log('Saved movie dates: ', response);
				loadWantToWatchMovies();
			})
			.catch((err) => {
				console.log('Error saving dates for the movie: ', err.message);
			});
	};

	React.useEffect(() => {
		loadWantToWatchMovies();
	}, []);

	let movieJSX = (
		<h3>
			No Movies in your Watchlist. Please Browse and add them to the list.
		</h3>
	);
	console.log('movies ', movies);
	if (movies && movies.length > 0) {
		movieJSX = movies.map((movie, index) => (
			<MovieCard
				history={props.history}
				movie={movie}
				key={index}
				deleteMovie={deleteMovie}
				saveDatesForMovie={saveDatesForMovie}
			/>
		));
	}

	const checkedAll = watchType === 'all';
	const checkedWatched = watchType === 'watched';
	const checkedWatchToWatch = watchType === 'want-to-watch';

	return (
		<div className='radiobuttons'>
			<input
				type='radio'
				name='watchtype'
				value='all'
				onChange={() => loadAllMovies()}
				checked={{ checkedAll }}
			/>{' '}
			All &nbsp;&nbsp;|&nbsp;&nbsp;
			<input
				type='radio'
				name='watchtype'
				value='watched'
				onChange={() => loadWatchedMovies()}
				checked={checkedWatched}
			/>{' '}
			Watched &nbsp;&nbsp;|&nbsp;&nbsp;
			<input
				type='radio'
				name='watchtype'
				value='want-to-watch'
				checked={{ checkedWatchToWatch }}
				onChange={() => loadWantToWatchMovies()}
			/>{' '}
			Want to Watch &nbsp;&nbsp;
			<Button onClick={handleClearWatchlist}>Clear Watchlist</Button>&nbsp;
			<div className='movieCardContainer'>{movieJSX}</div>
		</div>
	);
};

export default Watchlist;

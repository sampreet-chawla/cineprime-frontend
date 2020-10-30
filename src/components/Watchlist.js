import React from 'react';
import MovieCard from './MovieCard';
import './watchlist.css';
import { Button } from 'reactstrap';
import { BACKEND_API_URL } from './Info';

const Watchlist = (props) => {
	console.log(props);
	const baseURL = `${BACKEND_API_URL}/api/movies`;
	const token = props.token;
	const [movies, setMovies] = React.useState([]);
	const [watchType, setWatchType] = React.useState('want-to-watch');
	const loadWantToWatchMovies = (event) => {
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
		//setWatchType(event.target.value);
	};
	const loadAllMovies = (event) => {
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
		//setWatchType(event.target.value);
	};
	const loadWatchedMovies = (event) => {
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
		//setWatchType(event.target.value);
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
	const handleClearWatchlist = (event) => {
		event.preventDefault();
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
				index={movie.movieId}
				deleteMovie={deleteMovie}
				saveDatesForMovie={saveDatesForMovie}
			/>
		));
	}
	// const checkedAll = watchType === 'all';
	// const checkedWatched = watchType === 'watched';
	// const checkedWatchToWatch = watchType === 'want-to-watch';
	return (
		<div className='watchlistContainer'>
			<h4>{props.user}'s Watchlist</h4>
			<div className='radiobuttons'>
				<input
					type='radio'
					name='watchType'
					value='all'
					onChange={(e) => loadAllMovies(e)}
					checked={watchType === 'all'}
				/>
				&nbsp; All &nbsp;&nbsp;|&nbsp;&nbsp;
				<input
					type='radio'
					name='watchType'
					value='watched'
					onChange={(e) => loadWatchedMovies(e)}
					checked={watchType === 'watched'}
				/>
				&nbsp; Watched &nbsp;&nbsp;|&nbsp;&nbsp;
				<input
					type='radio'
					name='watchType'
					value='want-to-watch'
					checked={watchType === 'want-to-watch'}
					onChange={(e) => loadWantToWatchMovies(e)}
				/>
				&nbsp;Want to Watch &nbsp;&nbsp;
				<br />
				{/* <Button onClick={handleClearWatchlist}>Clear Watchlist</Button>&nbsp; */}
			</div>
			<br />
			<div className='buttonContainer'>
				<Button onClick={handleClearWatchlist}>Clear Watchlist</Button>&nbsp;
			</div>
			<br />
			<div className='movieCardContainer'>{movieJSX}</div>
		</div>
	);
};
export default Watchlist;

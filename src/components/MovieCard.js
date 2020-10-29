import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import './MovieCard.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcApproval, FcAlarmClock } from 'react-icons/fc';

const MovieCard = (props) => {
	const movie = props.movie;

	const planDate = movie.datePlanned ? new Date(movie.datePlanned) : null;
	const watchedDate = movie.dateWatched ? new Date(movie.dateWatched) : null;
	const [selectedPlanDate, setSelectedPlanDate] = useState(planDate);
	const [selectedWatchedDate, setSelectedWatchedDate] = useState(watchedDate);

	const handleEditDates = (event) => {
		event.preventDefault();
		const planDate = selectedPlanDate
			? `${selectedPlanDate.getFullYear()}-${selectedPlanDate.getMonth()}-${selectedPlanDate.getDay()}`
			: null;
		const watchedDate = selectedWatchedDate
			? `${selectedWatchedDate.getFullYear()}-${selectedWatchedDate.getMonth()}-${selectedWatchedDate.getDay()}`
			: null;
		console.log(`${planDate} and ${watchedDate}`);
		props.saveDatesForMovie(movie._id, {
			datePlanned: planDate,
			dateWatched: watchedDate,
		});
		// setSelectedPlanDate(null);
		// setSelectedWatchedDate(null);
		props.history.push('/watchlist');
	};

	const handleDelete = (event) => {
		event.preventDefault();
		props.deleteMovie(props.movie);
		props.history.push('/watchlist');
	};

	let metTargetStatus = movie.metTargetDate ? (
		<CardTitle>
			Target Date Met: <FcApproval />
		</CardTitle>
	) : (
		<CardTitle>
			Target Date Met: <FcAlarmClock />
		</CardTitle>
	);

	let watchJSX = (
		<>
			<CardTitle>Date Planned:{movie.datePlanned}</CardTitle>
			<CardTitle>Date Watched:{movie.dateWatched}</CardTitle>
			{metTargetStatus}
		</>
	);

	if (!movie.watchStatus) {
		watchJSX = (
			<>
				<CardTitle>
					Date Planned:
					<DatePicker
						selected={selectedPlanDate}
						onChange={(date) => setSelectedPlanDate(date)}
						dateFormat='yyyy-MM-dd'
						minDate={new Date().setDate(new Date().getDate() - 30 * 2)}
						maxDate={new Date().setDate(new Date().getDate() + 30 * 6)}
					/>
				</CardTitle>
				<CardTitle>
					Date Watched:
					<DatePicker
						selected={selectedWatchedDate}
						onChange={(date) => setSelectedWatchedDate(date)}
						dateFormat='yyyy-MM-dd'
						minDate={new Date().setDate(new Date().getDate() - 30 * 2)}
						maxDate={new Date().setDate(new Date().getDate() + 30 * 6)}
					/>
				</CardTitle>
				<Button onClick={handleEditDates}>Save Dates</Button>&nbsp;
			</>
		);
	}
	return (
		<div className='movieCard'>
			<Card style={{ backgroundColor: '#808080', borderColor: '#808080' }}>
				<CardImg
					top
					width='100%'
					className='moviePoster'
					src={movie.image}
					alt={movie.title}
				/>
				<CardBody>
					<CardTitle>Movie Title:{movie.title}</CardTitle>
					<CardTitle>Release Date:{movie.releaseDate}</CardTitle>
					<CardTitle>Runtime:{movie.runtime}mins </CardTitle>
					<CardTitle>Date Added:{movie.dateAdded}</CardTitle>
					{watchJSX}
					<Button id='remove' onClick={handleDelete}>
						Remove
					</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default MovieCard;

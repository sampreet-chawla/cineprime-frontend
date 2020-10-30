import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import './MovieCard.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcApproval, FcAlarmClock } from 'react-icons/fc';

const MovieCard = (props) => {
	const movie = props.movie;
	const key = props.index;
	console.log('MovieCard key ', key);
	const planDate = movie.datePlanned ? new Date(movie.datePlanned) : null;
	const watchedDate = movie.dateWatched ? new Date(movie.dateWatched) : null;
	const [formData, setFormData] = useState({
		datePlanned: planDate,
		dateWatched: watchedDate,
	});

	const handleChange = (value, name) => {
		console.log(`${value} for ${name}`);
		setFormData({ ...formData, [name]: new Date(value) });
	};

	const handleSaveDates = (event) => {
		event.preventDefault();
		const date1 = formData.datePlanned;
		const planDate = date1
			? `${date1.getFullYear()}-${date1.getMonth()}-${date1.getDay()}`
			: null;
		const date2 = formData.dateWatched;
		const watchedDate = date2
			? `${date2.getFullYear()}-${date2.getMonth()}-${date2.getDay()}`
			: null;
		console.log(`${planDate} and ${watchedDate}`);
		props.saveDatesForMovie(movie._id, {
			datePlanned: date1,
			dateWatched: date2,
		});
		document.getElementById(`save-dates-msg${key}`).innerHTML =
			'Saved the dates.';
		// setFormData({
		// 	datePlanned: planDate,
		// 	dateWatched: watchedDate,
		// });
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
						name='datePlanned'
						selected={formData.datePlanned}
						onChange={(e) => handleChange(e, 'datePlanned')}
						dateFormat='yyyy-MM-dd'
						minDate={new Date().setDate(new Date().getDate() - 30 * 2)}
						maxDate={new Date().setDate(new Date().getDate() + 30 * 6)}
					/>
				</CardTitle>
				<CardTitle>
					Date Watched:
					<DatePicker
						name='dateWatched'
						selected={formData.dateWatched}
						onChange={(e) => handleChange(e, 'dateWatched')}
						dateFormat='yyyy-MM-dd'
						minDate={new Date().setDate(new Date().getDate() - 30 * 2)}
						maxDate={new Date().setDate(new Date().getDate() + 30 * 6)}
					/>
				</CardTitle>
				<p id={`save-dates-msg${key}`}></p>
				<Button onClick={handleSaveDates}>Save Dates</Button>&nbsp;
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
					{/* <CardTitle>Runtime:{movie.runtime}mins </CardTitle> */}
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

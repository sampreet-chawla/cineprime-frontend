import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import './MovieCard.css';

const MovieCard = (props) => {
	const handleDelete = (event) => {
		event.preventDefault();
		props.deleteMovie(props.movie);
		props.history.push('/watchlist');
	};

	const movie = props.movie;

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
					<CardTitle>Runtime:{movie.runtime}</CardTitle>
					<CardTitle>Date Added:{movie.dateAdded}</CardTitle>
					<CardTitle>Date Planned:{movie.datePlanned}</CardTitle>
					<CardTitle>Date Watched:{movie.dateWatched}</CardTitle>
					<CardTitle>Target Date Met:{movie.metTargetDate}</CardTitle>
					<Button>Edit Dates</Button>&nbsp;
					<Button id='remove' onClick={handleDelete}>
						Remove
					</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default MovieCard;

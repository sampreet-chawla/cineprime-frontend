import React from 'react'
import MovieCard from "./MovieCard";
import './watchlist.css'



const Watchlist = (props) => {

    // console.log("movie props in card", {movie})
    console.log(props)
    const baseURL="http://localhost:4501/api/movies"


    const [movies, setMovies] = React.useState([])

    const loadMovies = () => {
        fetch(`${baseURL}/wantToWatch/user/${props.user}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.data);
                console.log("movie data in the fetch call", data)
            });
    };

    React.useEffect(() => {
    loadMovies();
    }, []);

    const movieJSX =  movies.map((movie, index) =>(<MovieCard movie={movie} key={index} />));

    return (movies.length > 0) ? 
        (<div className="movieCardContainer" >
             {movieJSX}
        </div>)
    : <h3>No Movies in  your Watchlist. Please Browse and add them to the list.</h3>;
}

export default Watchlist;

{/* <div className='drink-list'>
				{drinksData.map((element) => (
					<Link
						key={element.idDrink}
						to={{
							pathname: '/cocktail/' + element.strDrink,
							state: { idDrink: element.idDrink },
						}}>
						<div className='cocktail-list-name'>{element.strDrink}</div>
					</Link>
				))}
			</div> */}

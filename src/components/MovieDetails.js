import React, { useState, useEffect } from "react";
import './MovieDetails.css';
import axios from "./Axios";

const MovieDetails = (props) => {
    const { movie } = props;

    const loaded = () => (
        <div style={{ textAlign: "center"}}
        >
                <article>
                    <img src={movie.poster_path}/>
                    <h1>{movie.title}</h1>
                    <hr />
                    <h2>{movie.title}</h2>
                    <h2>{movie.runtime}</h2>
                    <h2>{movie.release_date}</h2>
                    <hr />
                    <h2>{movie.overview}</h2>
                    <br />
                    <button onClick add>Add to Watchlist</button>
                    <p>Please login to add to your Watchlist</p>
                    {/* turnary operator to be inserted here, add a backbutton - to continue to browse */}
                </article>
        </div>
    )
}

// function MovieDetails ({ props }) {
//     return(<h3>Movie Details</h3>)
// }

const Movie = (props) => {

    const base_Url = "https://image.tmdb.org/t/p/original/";

    const [movie, setMovie] = useState([]);

    const makeApiCall = async () => {
        const response = await fetch (base_Url);
        const json = await response.json();
        console.log(json)
        
        setMovie(json.results[movie])
    };

    useEffect(() => {
        makeApiCall();
    }, []);

    const loaded = (<>
    <h1>{movie.title}</h1>
    <br />
    <img src={movie.poster_path} className="movieposter" />
    <hr />
    <h1>Runtime: {movie.runtime}</h1>
    <br />
    <h1>Plot: {movie.overview}</h1>
    <br />
    <h1>Release Date: {movie.release_date}</h1>
    </>)
    const loading = (<h1>loading...</h1>)
    return (
        <>
        <div className="content">
            { movie ? loaded : loading }
            
        </div>
        </>
    )
    
}

export default MovieDetails;
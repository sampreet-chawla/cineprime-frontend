import React, { useState, useEffect } from 'react';
import axios from "./Axios";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_Url = "https://image.tmdb.org/t/p/original/";

function Row( props ) {
    const title = props.title;
    const fetchUrl = props.fetchUrl;
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        // if (trailerUrl) {
        //     setTrailerUrl("");
        // } else {
        //     movieTrailer(movie?.name || "")
        //     .then((url) => {
        //         const urlParams = new URLSearchParams(new URL(url).search);
        //         setTrailerUrl(urlParams.get('v'));
        //     })
        //     .catch((error) => console.log(error));
        // }
        props.handleSelectedMovie(movie);
        props.history.push('/moviedetails')
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">

                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className="row_poster"
                        src={`${base_Url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;
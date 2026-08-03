import { useState, useEffect } from "react";
import "./MovieiList.scss";
import axios from "axios";

export  interface MovieType{
    id:number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,
}

function MovieList(){
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() =>{
        getMovies();
    },[]);

    const getMovies = () => {
        axios({
            method: "GET",
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: import.meta.env.VITE_TMDB_API_KEY,
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results)
            console.log(response.data)
        })
    }

    return(
        <ul className="movie-list">
            {movies.map((movie) => 
                <li key={movie.id} className="movie-card">            
                    <p>
                        {movie.title}
                    </p>
                    <p className="description">
                        {movie.overview}
                    </p>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}
                    `}
                    alt="" />

                    <p>
                        {movie.vote_average}
                    </p>
                </li>
            )}
        </ul>
    );
}

export default MovieList
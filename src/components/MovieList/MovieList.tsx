import { useState, useEffect } from "react";
import "./MovieiList.scss";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import type { MovieType } from "../../types";

function MovieList() {
    const [movies, setMovies] = useState<MovieType[]>([]);

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

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <ul className="movie-list">
            {movies.map((movie) =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            )}
        </ul>
    );
}

export default MovieList
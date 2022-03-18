import React from 'react'
import { useEffect, useState } from 'react';

import Movie from './Movie';

import './App.css';
import SearchIcon from './search.svg';

// const API_URL = 'http://www.omdbapi.com?apikey=2a34d69a';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2a34d69a';


const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    
 useEffect(() => {
        searchMovies('Guardians of the Galaxy Vol. 2');
    }, []);

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const values = await res.json();

        setMovies(values.Search);
    }

   


    return (
        <div className='app'>
            <h1>MoviesApp</h1>

            <div className='search'>
                <input 
                
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Recherche des films'
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <Movie movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>Aucun film trouvé</h2>
                    </div>
                )}
        </div>
    )
}

export default App
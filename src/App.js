
import './App.css';


import Footer from './Footer';

import search from './search.svg'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const api_url = 'http://www.omdbapi.com?apikey=7733db8e'

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, SetsearchTerm] = useState('')


  const searchMovie = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`)
    const data = await response.json();
    setmovies(data.Search)
  }


  useEffect(() => {
    searchMovie('Dark')
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovie(searchTerm)
    }
  };

  return (
    <div className='app'>
      <h1>Binge</h1>
      <div className='search'>
        <input
          placeholder='Binge your favourite content!'
          value={searchTerm}
          onChange={(e) => { SetsearchTerm(e.target.value) }}
          onKeyDown={handleKeyDown}

        />
        <img
          src={search}
          alt='search'
          onClick={() => searchMovie(searchTerm)}


        />
      </div>



      {movies?.length > 0
        ? (
          <div className='container'>

            {
              movies.map((movie) => (
                <MovieCard movie={movie} />
              ))
            }

          </div>
        ) : (
          <div className='empty'>
            <h2>No Content Found</h2>
          </div>
        )}

      <div className='hi'>
        <Footer />
      </div >
    </div>


  );

}

export default App;

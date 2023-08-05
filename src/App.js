import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import MovieCard from './Components/MovieCard';

function App() {


  const API_URL = "https://api.themoviedb.org/3"
  const [movies,setmovies] = useState([])


  const fetchMovies = async () => {

    const {data:{results}} = await axios.get(`${API_URL}/discover/movie`,{params: {
      api_key: process.env.REACT_APP_MOVIE_API_KEY
    }})

    setmovies(results)

  }


  useEffect( ()=>{
    fetchMovies()
  },[])

  const rendermovies = () => {
    movies.map(movie => (
      <MovieCard key={movie.id} movie={movie}/>
    ))
  }

  return (
    <div className="App">
      <h1>Hello</h1>

      <div className='container'>{rendermovies()}</div>
      
    </div>
  );
}

export default App;

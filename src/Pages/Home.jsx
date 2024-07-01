import { forwardRef } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import axios from "axios";
import './Home.css'
import MovieList from "../Components/MovieList/MovieList";


function Home(){


   
      return (
        <div className="MoviesWrapper">
            <MovieList />
            
        </div>
    )

}

export default Home;

import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css'
function MovieList(){

    const [movielist,setmovielist]=useState([]);
    
     async function downloadmoviesbysearch(...args){
        const urls=args.map((eachname)=>{
            return `https://www.omdbapi.com/?apikey=556131a4&s=${eachname}`;
        })
      
        const response = await axios.all(urls.map(url=>axios.get(url)));
    
        const movies=response.map((movieresponse)=>movieresponse.data.Search);
        setmovielist([].concat(...movies));
        
          
     }

     useEffect(() => {
         downloadmoviesbysearch("harry","avengers","mission","John");
        
    }, []);

    console.log(movielist);

    return  (
        <div className="MovieList">
           { movielist && movielist.map((eachmovie)=>{
            return (<MovieCard   id={eachmovie.imdbID} Title={eachmovie.Title} Year={eachmovie.Year} Type={eachmovie.Type}Poster={eachmovie.Poster} />)
           })}
        </div >

  

    )

}
export default MovieList;
import React, { useState } from 'react';
import './NavBar.css';
import UseMovieList from '../../hooks/UseMovieList';
import useDebounce from '../../hooks/UseDebounce';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function NavBar() {
    const [showResults, setShowResults] = useState(false);

     const navigator=useNavigate();

    const [searchinput,setsearchinput]=useState("");
     
    const {movielist}=UseMovieList({name:searchinput });
    // console.log("used hook and downloaded recommnedation is",movielist);


    function handlemousedown(e,id){
        console.log(e.target.innerText);
        console.log(id);
        navigator(`/movie/${id}`);
    }
     

    return (
        <div className="NavBarWrapper">
            <div className="MovieNameWrapper"><Link to={"/"}>Movie Book</Link> </div>
            <div className="SearchMovieWrapper">
                <input 
                    id="movie-search-input" 
                    type="text" 
                    onChange={useDebounce((e)=>{
                           setsearchinput(e.target.value);
                    })}
                    
                    placeholder='What movie are you thinking about?' 
                    onFocus={() => setShowResults(true)} 
                    onBlur={() => setShowResults(false)} 
                />
               
                {showResults && (
                    <div className="result-list">
                        <span>Results For Your Search..</span>
                        {movielist && movielist.map((eachmovie)=>{
                            return (
                                <span onMouseDown={(e)=>{
                                    handlemousedown(e,eachmovie.imdbID);
                                }}>{eachmovie.Title}</span>
                            )
                        })}
                       
                    </div>
                )}
            </div>
            <div className="ThemeWrapper"> Theme</div>
        </div>
    )
}

export default NavBar;

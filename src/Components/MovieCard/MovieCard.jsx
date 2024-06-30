import './MovieCard.css';
import { useNavigate } from 'react-router-dom';

function MovieCard({ Title, Year, Type, Poster, id }) {

     const navigator=useNavigate();

     

     function handleclick(){
        navigator(`/movie/${id}`)
     }

    return (
        <div onClick={handleclick} key={id} className='MovieCardWrapper'> 
            <div className='MovieCardImageWrapper'>
                <img src={Poster} alt={Title} />
            </div>
            <div className='MovieTitleWrapper'>{Title}</div>
            <div className='MovieYearWrapper'>Release in: {Year}</div>
            <div className='MovieTypeWrapper'>Type: {Type}</div>
        </div>
    );
}

export default MovieCard;

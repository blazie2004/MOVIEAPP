import axios from "axios";
import { useEffect, useState } from "react";

function UseMovieList({ name }) {
  

  const [movielist, setmovielist] = useState([]);

  async function download(name) {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=556131a4&s=${name}`);
   
    return response.data.Search;
  }

  useEffect(() => {
    

    async function fetchData() {
      const list = await download(name);
      setmovielist(list);
    }

    fetchData();
  }, [name]);

  return { movielist };
}

export default UseMovieList;

import Axios from "./Axios";
import { useEffect, useState } from "react";
import "./Describe.css";

const Describe = (props) =>{
    const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    Axios.get(`movie/singleMovie/${props.idd}`)
      .then((res) => {
        console.log(res);
        setMoviesData(res.data);
      
      })
      .catch((err) => console.log(err));
  }, [props.idd]);

  return(
    <div className="movie-container">
      {moviesData ? (
        <>
          {moviesData.movieInfo.map((movie) => (
            <div key={movie.highlighter} className="movie-info">
              <h1 className="highlighter">{movie.highlighter}</h1>
              <h3 className="info">{movie.info}</h3>
            </div>
          ))}
          <div className="story-line">
            <h1 className="story-head">StoryLine:- </h1>
            <p className="story-para">
            {moviesData.storyLine}
            </p>
            </div>
            <div className="story-line">
            <h1 className="story-head">Download URL </h1>
            <p className="story-para">
            <a href={props.download}>{props.download}</a>
            </p>
            </div>
        </>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
  
}

export default Describe;

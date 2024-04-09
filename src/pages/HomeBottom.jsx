
import Searc from "./Searcher";
import { useEffect, useState, useRef } from "react";
import "./HomeBottom.css";
import Describe from "./Describe";
import "./Describe.css";

const HomeBottom = ({searching,onDataFromChild}) => {
  const [mData, setMData] = useState(null);
  const [isVisible, setVisibility] = useState(false);
  const [isHomeBottom, setHomeBottom] = useState(true);
  const [isSearcher, setSearcher] = useState(false);
  const [isdes, setDes] = useState("");
  const [islink, setLink] = useState("");
  const describeRef = useRef(null);

  var moviesearch = `${searching}`;
  useEffect(() => {
    if (moviesearch) {
      Searc.get("/movieBySearch/1", {
        params: {
          search: moviesearch,
        },
      })
        .then((res) => {
          console.log(res.data);
          setMData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [moviesearch]);
  const sendDataToParent = () => {
    setSearcher(!isSearcher);
    var data=isSearcher;
    onDataFromChild(data); 
  };
  const handle = () => {
    setVisibility(!isVisible); 
    setHomeBottom(!isHomeBottom);
    sendDataToParent();
    
  };
  
  const handleButtonClick = (movieId,movielink) => {
    setDes(movieId); 
    setLink(movielink);
    handle(); 
  };

  useEffect(() => {
    
    if (mData && describeRef.current) {
      describeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [mData,describeRef]);

  
 

  return (
    <div className="movie-container">
      {mData ? (
        (isHomeBottom && 
        <>
         <div ref={describeRef} className="dabba">
          {mData.movies.map((movie) => (
            <div key={movie.id} className="movie-block"ref={describeRef}>
              <img src={movie.img} alt="Wait a sec"/>
              <h3 className="movie-description" onClick={() => handleButtonClick(movie.id,movie.link)}>{movie.text}</h3>
            </div>
          ))}
          </div>
        </>
        )
      ) : null}
       {isVisible && 
      <>
      <div className="other">
      <button onClick={handle} className="Go-back-div">
         <h1 className="Go-back-child">Go Back</h1>
      </button>
      </div>
      <Describe idd={isdes} download={islink}/>
      </>
      }
    </div>
  );
}
export default HomeBottom;

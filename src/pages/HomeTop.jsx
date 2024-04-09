import Axios from "./Axios";
import { useEffect, useState } from "react";
import oppen from './hoho.jpg';
import sasa from './oppenheimer_ver3_xxlg.jpg';
import Describe from "./Describe";
import "./HomeTop.css";
import Searchbar from "./Searchbar";


const HomeTop = () =>{
    const [moviesData, setMoviesData] = useState(null);
    const [isComponentVisible, setComponentVisibility] = useState(false);
    const [isHomeTop, setHomeTop] = useState(true);
    const [isChild, setChild] = useState(true);

  useEffect(() => {
    Axios.get("",{
      params:{
          limit:'20',
          page:'0',
      },
    })
      .then((res) => {
        console.log(res);
        setMoviesData(res.data.movies[4]);
      
      })
      .catch((err) => console.log(err));
  }, []);
  const handleClick = () => {
    setComponentVisibility(!isComponentVisible); 
    setHomeTop(!isHomeTop);
  };
  const handleChild = (data) => {
     setChild(data);
  };

  return (
    <>
    
    <div>
      {moviesData ? (
        isHomeTop && (
           
            <>
            {isChild && (
          <div style={{ backgroundImage: `url(${oppen})` }} id="OppenBG" className="HomeTop">
            <img src={sasa} alt="Background" id="HomeImg"/>
            <div id="HomeName" onClick={handleClick}>{moviesData.text}</div>
            
          </div>
          )}
          <Searchbar onData={handleChild}/>
            
          </>
           
          )
        
      ) : (
        <h1>Loading...</h1>
      )}
      {isComponentVisible && 
      
      <>
      <div className="other">
      <button onClick={handleClick} className="Go-back-div">
        <h1 className="Go-back-child">Go Back</h1>
      </button>
      <Describe idd={moviesData.id} download={moviesData.link} />
      </div>
      </>
      
      }
    </div>
 
     </>
  );

}

export default HomeTop;

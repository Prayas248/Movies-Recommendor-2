import React, { useState } from "react";
import HomeBottom from "./HomeBottom";
import "./Searchbar.css";

const Searchbar = ({onData}) =>{
    const [search,setSearch] = useState("");
    const [moviesearch,setMoviesearch] = useState("");
    const [isfirstsearch,setIsfirstsearch] = useState(true);
    function handleClick() {
          setMoviesearch(search);
    }
    console.log(search);

   
    
    return(
        
        <>
        {isfirstsearch && (
        <div className="searchdiv">
            
            <input 
            className="searchbar"
            type="text"
            value={search}
            placeholder="Search movie name"
            onChange={e=> setSearch(e.target.value)}
            />
            <button onClick={handleClick}>Search</button>
            
        </div>
        )}
        <HomeBottom searching={moviesearch} onDataFromChild={(data)=>{
            setIsfirstsearch(data);
            onData(data);
        }}/>
        
        </>
        
    );
}
export default Searchbar;
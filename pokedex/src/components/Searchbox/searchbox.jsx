import React from "react";
import "./searchbox.css";

const Searchbox = ({handledata}) => {    
    return(
            <input className="searchbox" type="search" placeholder="Search Pokemon" 
            onChange={(e)=>{
                handledata(e.target.value)
            }}/>
    );
}

export default Searchbox;
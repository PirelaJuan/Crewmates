import React from 'react';
import { Link } from "react-router-dom";
import amongusgif from '../assets/amongusDif.gif';
import '../App.css';

function SideBar() {
  return (
    <div className='App-sidebar'>
     
      <div className='Menu'>
         <div className='Menu-select'>
            <a href='/'>Home</a>  
         </div>
          
          <div className='Menu-select'>
            <a href='/create'>Create a new Crewmate</a>
          </div >
          
          <div className='Menu-select'>
             <a href='/gallery'> Crewmate Gallery</a>
          </div>
      </div>
      <div className='gif'>
        <img src={amongusgif} />
      </div>
        
    </div>
  );
}

export default SideBar;
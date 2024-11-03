import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function SideBar() {
  return (
    <div className='App-sidebar'>
     
      <div className='Menu'>
         <div className='Menu-select'>
            <a href='/'>Home</a>  
         </div>
          
          <div className='Menu-select'>
            <a href='/create'>Create</a>
          </div >
          
          <div className='Menu-select'>
             <a href='/gallery'>Gallery</a>
          </div>
      </div>
    </div>
  );
}

export default SideBar;
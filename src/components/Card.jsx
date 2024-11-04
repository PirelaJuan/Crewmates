import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import amongus from '../assets/sus.png'
import { Link } from 'react-router-dom';

const Card = ({id, name, color}) => {

  return (
      <div className={`Card ${color}`}>
          <Link to={`/gallery/${id}`} state={{id,name,color}}>
          <img src={amongus} />
          </Link>
        
          
          <h2 className="Name:">{"Crewmate name: " + name}</h2>
          <h3 className="author">{"Crewmate Color: " + color}</h3>

          <Link to={`/gallery/edit/${id}`} state={{id, name, color }}>
              <button>Edit Crewmate</button>
          </Link>
          
          
      </div>
  );
};
Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;

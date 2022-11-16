import React from 'react';
import '../../UI/Reusable/Card.scss';
const Cards = ({ name, description, github, render, image, style }) => {
  return (
    <div className='card' style={style}>
      <div className='card_image'>
        <img src={image} alt='' />
      </div>
      <div className='card_description'>
        <h2 className='card_description-header'>{name}</h2>
        <p className='card-description-about'>{description}</p>
      </div>
      <div className='card_links'>
        <a href={github} target='_blank' rel='noreferrer'>
          Github
        </a>
        <a href={render} target='_blank' rel='noreferrer'>
          Live
        </a>
      </div>
    </div>
  );
};

export default Cards;

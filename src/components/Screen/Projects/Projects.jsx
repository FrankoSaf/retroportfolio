import React from 'react';
import '../../../UI/Screen/Projects.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Projects = () => {
  return (
    <div className='project_container'>
      <div className='arrow arrow_right'>
        <FaArrowRight />
      </div>
      <div className='arrow arrow_left'>
        {' '}
        <FaArrowLeft />
      </div>
      <div className='card'>
        <div className='card_image'>
          <img
            src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'
            alt=''
          />
        </div>
        <div className='card_description'>
          <h2 className='card_description-header'>Project name</h2>
          <p className='card-description-about'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis
            magni error eum laboriosam tempora adipisci repellat quasi
            blanditiis totam corrupti esse officiis optio hic omnis nihil, rem
            aut aliquam.
          </p>
        </div>
        <div className='card_links'>
          <a href='https://github.com/'>Github</a>
          <a href='https://render.com/'>Live</a>
        </div>
      </div>
      <div className='card'>
        <div className='card_image'>
          <img
            src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg'
            alt=''
          />
        </div>
        <div className='card_description'>
          <h2 className='card_description-header'>Project name</h2>
          <p className='card-description-about'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis
            magni error eum laboriosam tempora adipisci repellat quasi
            blanditiis totam corrupti esse officiis optio hic omnis nihil, rem
            aut aliquam.
          </p>
        </div>
        <div className='card_links'>
          <a href='https://github.com/'>Github</a>
          <a href='https://render.com/'>Live</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

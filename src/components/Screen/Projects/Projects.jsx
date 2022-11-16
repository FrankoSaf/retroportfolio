import React, { useState, useEffect, useContext } from 'react';
import '../../../UI/Screen/Projects.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Cards from '../../UI/Cards';
import { projects } from '../../../assets/projects/projects';
import { ScreenContext } from '../../../store/ScreenContext';
const Projects = () => {
  const { joystick } = useContext(ScreenContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= projects.length) {
      newIndex = projects.length - 1;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex >= 0 && activeIndex <= projects.length - 1) {
      if (joystick.direction === 'left') {
        setActiveIndex(activeIndex - 1);
      } else if (joystick.direction === 'right') {
        setActiveIndex(activeIndex + 1);
      }
    }

    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex > projects.length - 1) setActiveIndex(projects.length - 1);
  }, [joystick]);
  return (
    <div className='project_container'>
      {activeIndex < projects.length - 1 && (
        <div
          className='arrow arrow_right'
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <FaArrowRight />
        </div>
      )}
      {activeIndex > 0 && (
        <div
          className='arrow arrow_left'
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <FaArrowLeft />
        </div>
      )}
      {projects.map((project, index) => (
        <Cards
          name={project.name}
          image={project.image}
          github={project.links[0]}
          render={project.links[1]}
          description={project.description}
          style={{
            opacity: `${activeIndex !== index ? 0 : 1}`,
            transition: '2s all',
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Projects;

import Reac, { useContext, useEffect } from 'react';
import { icons } from '../../../assets/icons/icons';
import { ScreenContext } from '../../../store/ScreenContext';
import '../../../UI/Screen/About.scss';
import { futureIcons } from '../../../assets/future/icons';
const About = () => {
  const { fullScreen, joystick } = useContext(ScreenContext);
  useEffect(() => {
    const element = document.getElementById('innerScreen');

    if (joystick.direction === 'up') {
      element.scrollBy({ top: -25, behavior: 'auto' });
    } else if (joystick.direction === 'down') {
      element.scrollBy({ top: 25, behavior: 'auto' });
    }
  }, [joystick]);
  console.log(joystick);
  return (
    <div className='about_container' id='innerScreen'>
      <div>
        <h3>
          About:
        </h3>
        <p>
          My name is Franko. I'm a Germany based web developer from Croatia, mainly focused on MERN stack.
        </p>
        <p>Currently in the hunt for new opportunities and jobs, primarily for junior developer role</p>
        <p>I created this portfolio to showcase my Frontend skills.</p>
        <p>This portfolio is responsive, but functionality is created for desktop sized windows.</p>
      </div>
      <div>
        <h3 style={{ marginTop: '8rem' }}>Skills:</h3>
        <div className='icons-container'>
          {icons.map((icon) => (
            <div className='icons'>
              <img src={`${icon.image}`} alt={icon.name} />
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ marginTop: '10rem' }}>Future Skills:</h3>
        <p style={{ margin: '3rem auto' }}>
          These are the skills I want to learn:{' '}
        </p>
        <div className='icons-container'>
          {futureIcons.map((icon) => (
            <div className='icons'>
              <img src={`${icon.image}`} alt={icon.name} />
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

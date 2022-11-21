import React, { useContext, useRef } from 'react';
import '../../../UI/Screen/Contact.scss';
import emailjs from '@emailjs/browser';
import { ScreenContext } from '../../../store/ScreenContext';
const Contact = () => {
  const { setScreen } = useContext(ScreenContext);
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const borders = ['top', 'right', 'bottom', 'left'];
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1o9de1j',
        'template_jdr63if',
        form.current,
        'TgD89XSMOi6SdA0ej'
      )
      .then(
        (result) => {
          setScreen('home');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-form_container'>
      <h2>If you have any questions or inquires, send me a message :)</h2>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <div>
          <input type='text' name='name' required minLength='3' ref={nameRef} />
          <label
            style={
              nameRef.current?.value?.length > 0
                ? { transform: 'translateY(-1.5rem)', color: 'white' }
                : {}
            }
          >
            Name
          </label>
        </div>
        <div>
          <input type='email' name='email' required ref={emailRef} />
          <label
            style={
              emailRef.current?.value?.length > 0
                ? { transform: 'translateY(-1.5rem)', color: 'white' }
                : {}
            }
          >
            Email
          </label>
        </div>
        <div className='message_container'>
          <textarea
            required
            minLength='30'
            name='message'
            style={{ resize: 'none' }}
            placeholder='Message'
          />
          {/* <p htmlFor='message'>Your message here</p> */}
        </div>

        <button>
          Send{' '}
          {borders.map((border) => (
            <span className={border}></span>
          ))}
        </button>
      </form>
    </div>
  );
};

export default Contact;

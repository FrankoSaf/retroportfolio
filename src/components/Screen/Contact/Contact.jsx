import React from 'react';
import '../../../UI/Screen/Contact.scss';
const Contact = () => {
  const borders = ['top', 'right', 'bottom', 'left'];
  return (
    <div className='contact-form_container'>
      <h2>If you have any questions or inquires, send me a message :)</h2>
      <form action='' className='form'>
        <div>
          <input type='text' />
          <label htmlFor=''>Name</label>
        </div>
        <div>
          <input type='email' />
          <label htmlFor=''>Email</label>
        </div>
        <div className='message_container'>
          <textarea
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

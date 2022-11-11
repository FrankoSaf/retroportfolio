import React from "react";
import "../../../UI/Screen/Contact.scss";
const Contact = () => {
  return (
    <div className="contact-form_container">
      <form action="" className="form">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="message">Your message here</label>
          <textarea name="message"></textarea>
        </div>
        <button>Send something</button>
      </form>
    </div>
  );
};

export default Contact;

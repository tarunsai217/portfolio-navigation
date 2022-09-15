import React, { useState } from 'react';
import './Footer.scss';
import emailjs from '@emailjs/browser';
export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChangeHandler = (e) => {
    let change = {};
    change[e.target.id] = e.target.value;
    setFormData((prev) => {
      return { ...prev, ...change };
    });
  };

  const sendFeedback = () => {
    console.log('formData', formData);
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <section className="feedback">
      <h2 className="feedback-heading">Connect With Me</h2>
      <div className="form-container">
        <input
          value={formData.name}
          id="name"
          onChange={onChangeHandler}
          className="name-input"
          placeholder="Your Name"
        />
        <input
          value={formData.email}
          id="email"
          onChange={onChangeHandler}
          className="email-input"
          placeholder="Your Email"
        />
        <textarea
          value={formData.message}
          id="message"
          onChange={onChangeHandler}
          className="message-input"
          placeholder="Your Message"
        />
        <button onClick={sendFeedback}>Send Feedback</button>
      </div>
    </section>
  );
}

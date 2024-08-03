import React, { useState } from 'react';
import axios from 'axios';
import '../Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    text: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-email', formData); // Send to Vercel API
      console.log(response.data.message);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <header className="rand">
        Please text me below!~~~
      </header>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name="text"
        placeholder="Message"
        value={formData.text}
        onChange={handleChange}
        required
        rows="10"
      />
      <input
        type="text"
        name="contactInfo"
        placeholder="Contact Info"
        value={formData.contactInfo}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Email</button>
    </form>
  );
}

export default Contact;

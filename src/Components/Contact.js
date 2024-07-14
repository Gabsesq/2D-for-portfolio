import React, { useState } from 'react';
import axios from 'axios';
import '../Contact.css'; // Assuming you have styles for the form

function Contact() {
  const [formData, setFormData] = useState({
    subject: '',
    text: ''
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
      const response = await axios.post('/api/send-email', formData);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <header className="rand">
        Please text me an email below!~~~
      </header>
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
        rows="10" // Adjust the number of rows to make it bigger
      />
      <button type="submit">Send Email</button>
    </form>
  );
}

export default Contact;


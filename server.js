const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/send-email', async (req, res) => {
  console.log('Received data:', req.body); // Debugging line to check received data
  const { name, subject, text, contactInfo } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nContact Info: ${contactInfo}\n\nMessage:\n${text}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

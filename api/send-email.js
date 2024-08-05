// api/send-email.js
const nodemailer = require('nodemailer');

export default async function sendEmail(req, res) {
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);
  console.log('Email credentials:', process.env.EMAIL_USER, process.env.EMAIL_PASS);
  
  if (req.method === 'POST') {
    const { name, subject, text, contactInfo } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your own email
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
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { subject, text } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password
      }
    });

    // Email options
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'gabbyesquibel1999@gmail.com', // Your email address
      subject: subject,
      text: text
    };

    // Send email
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return res.status(500).json({ message: 'Error sending email', error });
      } else {
        return res.status(200).json({ message: 'Email sent successfully' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


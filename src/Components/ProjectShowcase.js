import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../project.css'; // Ensure this path is correct

function ProjectShowcase() {
  console.log("ProjectShowcase component is rendering");

  return (
    <Container>
      {/* Microsoft Plugin Project */}
      <Row>
        
          <div className="product-description">
            <h2>MICROSOFT PLUGIN</h2>
            <p>
            This project showcases a Microsoft email plugin that my team and I developed. We utilized a global web API for local storage in order to re-use email signatures. We used Scrum/Agile methodologies, CI/CD practices, and managed the entire development lifecycle.
            </p>
            <p><b>Youtube Link: </b><a href="https://youtu.be/0TyF44URubE">Microsoft Plugin Video</a></p>
            <p><b>Github Link: </b><a href="https://github.com/ScrumSquad3250/main">Microsoft Plugin Repo</a></p>
          </div>
       
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/0TyF44URubE"
              title="Microsoft Plugin Project"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
      
      </Row>

      {/* GO 99 Project */}
      <Row>
        

          <div className="product-description">
            <h2>GO 99</h2>
            <p>
              Go99 is one of the world's oldest board games, dating back 4000 years in China. This is an image processing-based project used to find the winner of the game. I created this in Google Colab using numpy, matplotlib, and cv2.
            </p>
            <p><b>Youtube Link: </b><a href="https://youtu.be/8ZFuvZfWiSg">GO99 Video</a></p>
            <p><b>Github Link: </b><a href="https://github.com/Gabsesq/go99">GO99 Repo</a></p>
          </div>

          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/8ZFuvZfWiSg"
              title="GO 99 Project"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        
      </Row>

      {/* Library Database Project */}
      <Row>
        
          <div className="product-description">
            <h2>LIBRARY DATABASE</h2>
            <p>
              This project is a library database that stores users, authors, books, various libraries, and more. I used Ruby on Rails and Vue.js for minimal styling. The focus of this project was to learn ROR and to learn SQLite and database relationships.
            </p>
            <p><b>Youtube Link: </b><a href="https://youtu.be/IJTRciIQeKI">Library Video</a></p>
            <p><b>Github Link: </b><a href="https://github.com/Gabsesq/Library">Library Repo</a></p>
          </div>
        
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/IJTRciIQeKI"
              title="Library Database Project"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        
      </Row>
    </Container>
  );
}

export default ProjectShowcase;

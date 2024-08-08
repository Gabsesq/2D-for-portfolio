import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GO99VID from '../assets/GO99VID.mov'; // Adjust the path as necessary
import RORclass from '../assets/RORclass.mp4'; // Adjust the path as necessary

function ProjectShowcase() {
  console.log("ProjectShowcase component is rendering");

  return (
    <Container>
      <Row>
        <Col>
          <div className="video-container">
            <video width="115%" height="315" controls>
              <source src={GO99VID} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
        <Col>
          <div className="product-description">
            <h2>GO 99</h2>
            <p>
              Go99 is one of the worlds oldest boardgames, dating back 4000 years in China. This is an image processing based project used to find the winner to the game. I created this in google colab using numpy, matplotlib, and cv2.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="product-description">
            <h2>Library Database</h2>
            <p>
              This project is a library database that stores users, authors, books, various libraries, and more. I used Ruby on rails and vue js for minimal styling. The focus of this project was to learn ROR and to learn SQLite and database relationships.
            </p>
          </div>
        </Col>
        <Col>
          <div className="video-container">
            <video width="115%" height="315" controls>
              <source src={RORclass} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectShowcase;


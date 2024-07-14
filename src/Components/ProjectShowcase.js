import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectShowcase() {
  console.log("ProjectShowcase component is rendering");

  return (
    <Container>
      <Row>
        <Col>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
              title="Project Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col>
          <div className="product-description">
            <h2>Product Title 2</h2>
            <p>
              This is the description of the first product. It includes details about the features, benefits, and usage of the product. You can elaborate on the specifics here to give users a comprehensive understanding of what the product offers.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="product-description">
            <h2>Product Title 1</h2>
            <p>
              This is the description of the first product. It includes details about the features, benefits, and usage of the product. You can elaborate on the specifics here to give users a comprehensive understanding of what the product offers.
            </p>
          </div>
        </Col>
        <Col>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
              title="Project Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectShowcase;

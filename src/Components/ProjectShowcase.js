import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../project.css'; // Ensure this path is correct

function ProjectShowcase() {
  console.log("ProjectShowcase component is rendering");

  return (
    <Container>
      {/* Eat Safe Project */}
      <Row>
        <div className="product-description">
          <h2>EAT SAFE</h2>
          <p>
            This project is a light-weight allergen detection WebApp that locally stores the ingredients of your choice. It also automatically detects the most common allergens. This is a responsive Reactjs WebApp that works on phone, tablet or computer. We created this project in a scrum/agile fashion. We utilized tesseract OCR, Bootstrap, and WebAPI to achieve this result. Enjoy!
          </p>
          <p><b>Live Website Link: </b><a href="https://eat-safe.github.io/smart-scan/">Eat Safe Live</a></p>
          <p><b>Youtube Link: </b><a href="https://www.youtube.com/watch?v=e5OoCo-h57o">Eat Safe Video</a></p>
          <p><b>Github Link: </b><a href="https://github.com/Eat-Safe/smart-scan">Eat Safe Repo</a></p>
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/e5OoCo-h57o"
            title="Eatsafe Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Row>

      {/* Pinny Rand Project */}
      <Row>
        <div className="product-description">
          <h2>PINNY RAND</h2>
          <h2>**UNDER CONSTRUCTION**</h2>
          <p>
            This project is derived from Pinterest API. Oauth process remains in a separate repository. This project is meant to randomize a board of your choice. My remaining tasks in this project include: A more robust front-end, Connecting Oauth capabilities with backend board randomizing logic. Check back here for the finished project!
          </p>
          <p><b>Youtube Link: </b><a href="https://www.youtube.com/watch?v=_MPaWzs8w_U">Pinny Rand Video</a></p>
          <p><b>Github Link: </b><a href="https://github.com/Gabsesq/Pinny-/tree/main">Pinny Rand Repo</a></p>
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_MPaWzs8w_U"
            title="Pinterest Randomizer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Row>

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

      {/* Sudoku Solver Project */}
      <Row>
        <div className="product-description">
          <h2>SUDOKU SOLVER</h2>
          <p>
            The main learning objective of this project was using C to understand multithreading and boilerplate memory allocation. This program takes a text file of a Sudoku solution and validates whether or not the result is a valid Sudoku solution.
          </p>
          <p><b>Youtube Link: </b><a href="https://www.youtube.com/watch?v=cMHbehoPe-c">Sudoku Validation Video</a></p>
          <p><b>Github Link: </b><a href="https://github.com/Gabsesq/SudokuSolver">Sudoku Validation Repo</a></p>
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/cMHbehoPe-c"
            title="Sudoku Validation"
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon.png";
import cancion from "../../Assets/Projects/cancion.png";
import texto from "../../Assets/Projects/texto.png";
import readics from "../../Assets/Projects/readics.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import incidentintel from "../../Assets/Projects/incidentintel.png";
import spamDetection from "../../Assets/Projects/spamDetection.png";
import MediTrain from "../../Assets/Projects/MediTrain.png";
import MovieMatrix from "../../Assets/Projects/MovieMatrix.png";
import cert2 from "../../Assets/Certificates/s6.png";
import cert1 from "../../Assets/Certificates/s5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <div style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={MovieMatrix}
              title="Movie Website - MovieMatrix"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>
                        Features: Movie recommendation system (Content-Based
                        Filtering and Collaborative Filtering using KGPR), movie
                        browsing, booking system, external API integration, and
                        payment gateway integration.
                      </li>
                      <li>
                        Technologies: MERN Stack, Python, Machine Learning,
                        Neo4j, TMDB API, MovieLens Dataset (1M), Razorpay API
                      </li>
                      <li>
                        Tools: Git for version control, deployed via Vercel,
                        integrated with TMDB API and MovieLens Dataset (1M).
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    October 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Full-Stack-Movie-Website"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={MediTrain}
              title="MediTrain AI - Medical Chatbot"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>
                        Description: Built a medical chatbot capable of
                        processing 100+ documents using LangChain and Hugging
                        Face embeddings for contextual query answering.
                      </li>
                      <li>
                        Features: Fast retrieval system with Pinecone Vector
                        Search, handling over 1M vectors for efficient query
                        matching, deployed on Render.
                      </li>
                      <li>
                        Achieved Accuracy: 95% accuracy in context-driven
                        question-answering using GroqAI.
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                  December 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/MediTrain"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={spamDetection}
              title="Spam Detection System | Comparative Analysis"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>
                        Description: A machine learning project that classifies
                        emails as Spam or Ham using NLP techniques, achieving
                        high accuracy in distinguishing unwanted emails.
                      </li>
                      <li>
                        Models Tested: Logistic Regression, Random Forest,
                        K-Nearest Neighbors, Decision Tree, and SVM, with
                        Logistic Regression and SVM achieving the highest
                        accuracy at 98.7% and 98.0%, respectively.
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    August 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/spam-detection"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={incidentintel}
              title="Real Time Threat Analysis - Incident Intel"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>
                        Features: Real-time cyber incident feeds, platform
                        identification, data collection, and analysis.
                      </li>
                      <li>
                        Tools: Web scraping (Scrapy, BeautifulSoup), Git for
                        version control.
                      </li>
                      <li>
                        Technologies: Python, Natural Language Processing (NLP),
                        MERN Stack, Apache Kafka, MongoDB.
                      </li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    June 2024
                  </span>
                </>
              }
              ghLink="https://github.com/chhavikant-01/incident-intel"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={cancion}
              title="Music Website - Cancion"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>
                        Features: User and Artist Authentication, CRUD
                        Operations, Artist Dashboard for Song Management.
                      </li>
                      <li>
                        Tools: Git for version control, GitHub Pages for
                        deployment.
                      </li>
                      <li>Technologies: HTML, CSS, JavaScript, PHP, MySql.</li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    January 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Music-Website-Cancion"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={readics}
              title="News Website - Readics"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>
                        Features: Up-to-date news articles, browsing headlines,
                        coverage of various topics.
                      </li>
                      <li>
                        Tools: Git for version control, GitHub Pages for
                        deployment, NEWS API.
                      </li>
                      <li>Technologies: HTML, CSS, JavaScript, React.js.</li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    March 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Readics-React"
            />
          </Col>
          
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={texto}
              title="Text Manipulation Website - Texto"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>
                        Features: Text case conversion, text reversal, text
                        statistics.
                      </li>
                      <li>
                        Tools: Git for version control, GitHub Pages for
                        deployment.
                      </li>
                      <li>Technologies: HTML, CSS, JavaScript, React.js.</li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    March 2024
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Texto-React"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={amazon}
              title="Amazon Clone"
              description={
                <>
                  <div>
                    <ul className="desc">
                      <li>
                        Features: Home Page, Navigation Bar, Search Bar, Product
                        Listings, Shopping Cart, Customer Service accessibility.
                      </li>
                      <li>
                        Tools: Git for version control, GitHub Pages for
                        deployment.
                      </li>
                      <li>Technologies: HTML, CSS, JavaScript, React.js.</li>
                    </ul>
                  </div>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    October 2023
                  </span>
                </>
              }
              ghLink="https://github.com/AdrijaDastidar/Amazon-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

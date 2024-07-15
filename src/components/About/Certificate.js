import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import cert1 from "../../Assets/Certificates/s1.png";
import cert2 from "../../Assets/Certificates/s2.png";
import cert3 from "../../Assets/Certificates/s3.png";
import cert4 from "../../Assets/Certificates/s4.png";

function Certificate() {
  return (
    <Container fluid className="certificate-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert4}
              title="Web Development with HTML, CSS, JavaScript"
              description={
                <>
                  <ul>
                    <li>
                      Completed a comprehensive course on web development.
                    </li>
                    <li>
                      Learned to build responsive websites using HTML, CSS, and
                      JavaScript.
                    </li>
                  </ul>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    AUGUST 2023
                  </span>
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert1}
              title="Artificial Intelligence with Python"
              description={
                <>
                  <ul>
                    <li>
                      Learned the fundamentals of AI and its applications using
                      Python.
                    </li>
                    <li>Developed various AI models and algorithms.</li>
                  </ul>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    DECEMBER 2022
                  </span>
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert2}
              title="Data Science with Python"
              description={
                <>
                  <ul>
                    <li>
                      Acquired skills in data analysis, visualization, and
                      machine learning.
                    </li>
                    <li>
                      Worked on real-world projects to apply data science
                      techniques.
                    </li>
                  </ul>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    DECEMBER 2022
                  </span>
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert3}
              title="Software Engineering Job Simulation"
              description={
                <>
                  <ul>
                    <li>
                      Simulated real-world software engineering tasks at
                      JPMorgan Chase & Co.
                    </li>
                    <li>
                      Gained hands-on experience in software development and
                      teamwork.
                    </li>
                  </ul>
                  <span
                    className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                    style={{ left: "90%", zIndex: 1 }}
                  >
                    JUNE 2024
                  </span>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;

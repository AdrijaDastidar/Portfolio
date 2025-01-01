import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Project Intern",
      company: "Infosys",
      location: "Remote",
      period: "Nov 2024 - Present",
      duration: "2 months",
      type: "Internship",
      description: [
        {
          text: "Built MediTrain AI, a medical chatbot processing 100+ documents using LangChain and Hugging Face embeddings.",
          metric: "100+",
          metricLabel: "Documents Processed",
        },
        {
          text: "Enabled fast retrieval with Pinecone Vector Search, handling 1M+ vectors for efficient query matching.",
          metric: "1M+",
          metricLabel: "Vectors Handled",
        },
        {
          text: "Deployed on Render, achieving a 95% accuracy rate in context-driven question-answering with GroqAI.",
          metric: "95%",
          metricLabel: "Accuracy Rate",
        },
      ],
      tags: [
        "LangChain",
        "Hugging Face",
        "Pinecone",
        "GroqAI",
        "Flask",
        "Chatbot",
        "AI",
        "Vector Search",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "BasketHunt Pvt Ltd",
      location: "Remote",
      period: "Aug 2024 - Dec 2024",
      duration: "5 months",
      type: "Internship",
      description: [
        {
          text: "Designed and implemented interactive dashboards using React.js, improving data visualization and increasing user engagement.",
          metric: "35%",
          metricLabel: "Engagement Increase",
        },
        {
          text: "Built a daily conversational bot using LangChain and Groq integrated with Flask, enhancing customer support efficiency.",
          metric: "40%",
          metricLabel: "Query Resolution Improvement",
        },
        {
          text: "Streamlined workflows by integrating APIs and third-party services.",
          metric: "25%",
          metricLabel: "Data Accuracy Increase",
        },
      ],
      tags: [
        "React.js",
        "LangChain",
        "Flask",
        "API Integration",
        "Tailwind CSS",
        "Dashboards",
        "Frontend",
        "UX Design",
      ],
    },
    {
      title: "Human Resources Intern",
      company: "Tech Analogy",
      location: "Remote",
      period: "Jun 2023 - Aug 2023",
      duration: "3 months",
      type: "Internship",
      description: [
        {
          text: "Managed employee records and scheduled interviews, streamlining recruitment with an online tracking system.",
          metric: "150+",
          metricLabel: "Employee Records",
        },
        {
          text: "Reduced time-to-fill by 40% and increased qualified applicants.",
          metric: "40%",
          metricLabel: "Time-to-fill Reduction",
        },
      ],
      tags: [
        "HR Management",
        "Recruitment",
        "Process Optimization",
        "Employee Tracking",
        "Interview Scheduling",
        "HR Tech",
      ],
    },
    {
      title: "Subject Matter Expert",
      company: "Learn As You Go",
      location: "Remote",
      period: "Aug 2022 - Nov 2022",
      duration: "4 months",
      type: "Internship",
      description: [
        {
          text: "Handled real-time Math and Python queries, boosting website traffic.",
          metric: "2000+",
          metricLabel: "Queries Handled",
        },
        {
          text: "Created learning materials used by educators, increasing student satisfaction.",
          metric: "300+",
          metricLabel: "Educators Reached",
        },
      ],
      tags: [
        "Mathematics",
        "Python",
        "Education",
        "Content Creation",
        "E-learning",
        "Problem Solving",
        "Student Engagement",
      ],
    },
  ];

  return (
    <Container fluid className="experience-section py-5 my-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="project-heading">
              My Professional <strong className="purple">Experience</strong>
            </h1>
            <div style={{ color: "white" }}>
              A snapshot of my contributions and roles.
            </div>
          </Col>
        </Row>
        <Row>
          {experiences.map((experience, index) => (
            <Col md={6} className="mb-4 my-4" key={index}>
              <Card className="project-card-view">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <Card.Title className="purple d-flex align-items-center">
                        <FaBriefcase className="mr-2 my-2 mx-4" />
                        {experience.title}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
                        <FaCalendarAlt className="mr-2 my-2 mx-4" />
                        {experience.period} · {experience.duration}
                      </Card.Subtitle>
                      <Card.Text className="text-muted d-flex align-items-center">
                        <FaMapMarkerAlt className="mr-2 my-2 mx-4" />
                        <strong>{experience.company}</strong>&nbsp;&nbsp;
                        {experience.location}
                      </Card.Text>
                    </div>
                  </div>
                  <hr />
                  {experience.description.map((item, i) => (
                    <div key={i} className="mb-3">
                      <h5 className="font-weight-bold text-primary">
                        {item.metric}
                      </h5>
                      <p className="text-muted">{item.metricLabel}</p>
                      <p>{item.text}</p>
                    </div>
                  ))}
                  <div className="tags-wrapper mt-3">
                    {experience.tags.map((tag, idx) => (
                      <Badge
                        variant="secondary"
                        className="ml-1 mx-2 my-2"
                        key={idx}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

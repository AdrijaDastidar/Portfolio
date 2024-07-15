import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <a href={props.ghLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">View on GitHub</button>
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adrija Dastidar </span>
            from <span className="purple">West Bengal, </span>currently residing
            in <span className="purple">Pune, Maharashtra </span>.
            <br />I am currently pursuing my{" "}
            <span className="purple">
              B.Tech in Computer Science Engineering{" "}
            </span>
            from MIT WPU, Pune with <span className="purple">cgpa 8.4</span>.
            <br />
            Apart from coding and academics, some other activities that I am
            passonate are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Col } from "react-bootstrap";

function TechItem({ Icon, label, imgSrc, imgAlt }) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      {Icon ? <Icon /> : <img src={imgSrc} alt={imgAlt} style={{ width: "50px", height: "50px" }} />}
      <p style={{ fontSize: "14px", marginTop: "5px" }}>{label}</p>
    </Col>
  );
}

export default TechItem;

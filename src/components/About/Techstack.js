import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
  DiMysql,
} from "react-icons/di";
import { SiRedis, SiExpress } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>HTML5</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "14px", marginTop: "5px" }}>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;

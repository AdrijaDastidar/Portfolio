import React from "react";
import { Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiReact, DiNodejs, DiMongodb, DiGit, DiPhp, DiMysql, DiBootstrap, DiPython } from "react-icons/di";
import { SiExpress, SiJavascript, SiTailwindcss, SiTypescript, SiFlask, SiNeo4J, SiDocker, SiWordpress } from "react-icons/si";
import { FaAws, FaWix } from "react-icons/fa";
import TechItem from "./TechItems";  

function Techstack() {
  return (
    <div>
      {/* Programming Languages */}
      <h2>
        My <strong className="purple">Programming Languages</strong>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <TechItem Icon={CgCPlusPlus} label="C++" />
        <TechItem Icon={DiPython} label="Python" />
      </Row>

      {/* Frontend Technologies Heading */}
      <h2>
        My <strong className="purple">Frontend</strong> Technologies
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <TechItem Icon={SiJavascript} label="JavaScript" />
        <TechItem Icon={SiTypescript} label="TypeScript" />
        <TechItem Icon={DiReact} label="React" />
        <TechItem Icon={SiTailwindcss} label="Tailwind CSS" />
        <TechItem Icon={DiBootstrap} label="Bootstrap" />
      </Row>

      {/* Backend Technologies Heading */}
      <h2>
        My <strong className="purple">Backend</strong> Technologies
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <TechItem Icon={SiExpress} label="Express.js" />
        <TechItem Icon={DiNodejs} label="Node.js" />
        <TechItem Icon={SiFlask} label="Flask" />
        <TechItem Icon={DiPhp} label="PHP" />
      </Row>

      {/* Databases Technologies Heading */}
      <h2>
        My <strong className="purple">Database</strong> Technologies
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <TechItem Icon={DiMysql} label="MySQL" />
        <TechItem Icon={DiMongodb} label="MongoDB" />
        <TechItem Icon={SiNeo4J} label="Neo4j" />
      </Row>

      {/* Cloud Technologies Heading */}
      <h2>
        My <strong className="purple">Cloud</strong> Technologies
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <TechItem Icon={FaAws} label="AWS" />
        <TechItem Icon={SiDocker} label="Docker" />
      </Row>

      {/* CMS Technologies Heading */}
      <h2>
        My <strong className="purple">CMS</strong> Technologies
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <TechItem Icon={SiWordpress} label="WordPress" />
        <TechItem Icon={FaWix} label="Wix" />
      </Row>

      {/* Version Control */}
      <h2>
        My <strong className="purple">Version Control</strong> Technologies
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <TechItem Icon={DiGit} label="Git" />
      </Row>
    </div>
  );
}

export default Techstack;

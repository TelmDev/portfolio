import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Dias que  <strong className="purple">Programo</strong>
      </h1>
      <GitHubCalendar
        username="TelmDev"
        blockSize={15}
        blockMargin={5}
        color="#38a793"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Telm </span>
            de <span className="purple"> Buenos aires Argentina.</span>
            <br />
            Actualmente trabajo como desarrollador de software y aplicaciones web segun me surga un cliente, ademas de diseño grafico.
            <br />
            He completado varios proyectos de programacion y diseño grafico.
            <br />
            <br />
            ¡Además de programar, algunas otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escribir blogs tecnológicos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver Netflix
            </li>
          </ul>

          <p style={{ color: "white" }}>
            "¡Esfuérzate por construir cosas que marquen la diferencia!"{" "}
          </p>
          <footer className="blockquote-footer">TELM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

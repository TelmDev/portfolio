import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Dejame <span className="purple"> presentarme. </span>
            </h1>
            <p className="home-about-body">
              ¡Hola! Soy un apasionado del desarrollo y el diseño gráfico. 🚀
              <br />
              <br />
              🎨 Me encanta combinar creatividad con tecnología para crear experiencias digitales impactantes. Mi enfoque se encuentra en construir soluciones modernas con lenguajes como{" "}
              <i>
                <b className="purple">
                  C++, JavaScript, Python, PHP, HTML, Go
                </b>
              </i>{" "}
              y frameworks como{" "}
              <i>
                <b className="purple">React.js y Next.js</b>.
              </i>
              <br />
              <br />
              💻 Además, estoy fascinado con las nuevas tecnologías como la{" "}
              <b className="purple">blockchain</b>, y siempre busco integrar el diseño gráfico en mis proyectos para darles una identidad visual única.
              <br />
              <br />
              🌟 <b>Habilidades principales:</b>
              <ul>
                <li>
                  <b className="purple">Desarrollo web:</b> Especializado en
                  frontend y backend, con experiencia en{" "}
                  <b className="purple">Node.js</b> y bibliotecas modernas de
                  JavaScript.
                </li>
                <li>
                  <b className="purple">Diseño gráfico:</b> Creación de
                  interfaces y contenido visual que impacta y conecta con los
                  usuarios.
                </li>
              </ul>
              📱 ¡Conectemos y construyamos algo increíble juntos! 💡
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME</h1>
            <p>
              No dudes en <span className="purple">conectarte</span> conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TelmDev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Telm_1010"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mlmbxs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

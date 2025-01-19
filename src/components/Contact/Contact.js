import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Todos los campos son obligatorios.");
      setSuccess(false);
      return;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Introduce un correo válido.");
      setSuccess(false);
      return;
    }

    if (formData.message.length < 10) {
      setError("El mensaje debe tener al menos 10 caracteres.");
      setSuccess(false);
      return;
    }

    // Envía el formulario con EmailJS
    emailjs
      .send(
        "service_0gyr0qg",
        "template_f59gt4r",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "NeQVze3KeEOEoTgPe"
      )
      .then(() => {
        setError("");
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setError("Hubo un error al enviar el mensaje.");
        setSuccess(false);
      });
  };

  return (
    <Container
      fluid
      className="contact-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Particle style={{ position: "absolute", zIndex: "0" }} />
      <Container style={{ position: "relative", zIndex: "2" }}>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col md={7} style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              ¡Contáctame! <strong className="purple">Ponte en contacto</strong>
            </h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">¡Mensaje enviado correctamente!</Alert>}
            <Form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
              <Form.Group controlId="formName" style={{ marginBottom: "15px" }}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" style={{ marginBottom: "15px" }}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage" style={{ marginBottom: "15px" }}>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Escribe tu mensaje (mínimo 10 caracteres)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                variant="danger"
                type="submit"
                style={{ marginTop: "15px", transition: "0.3s" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#9adfb0")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#38a793")}
              >
                Enviar
              </Button>
            </Form>
          </Col>
          <Col md={5} style={{ paddingTop: "30px", display: "flex", justifyContent: "center" }}>
            <img
              src="https://i.ibb.co/7X5QMKS/Telm-1010.png"
              alt="contact-img"
              className="img-fluid"
              style={{ maxHeight: "450px", animation: "float 3s ease-in-out infinite" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;

import React from 'react'
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ContactUsform() {
  return (
    <div
        className="form-container"
      >
        <img id='contact-us-img' src="/Home/contact-us-img.png" alt=""/>
        <form className="form-contact-us" action="" >
          <h3>Contáctanos</h3>
          <p>Estamos aquí para ayudarte en cada parte del proceso.</p>

          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInput"
                label="Nombre completo"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Juan Hernandez" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInput"
                label="Teléfono"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Teléfono" />
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel
            controlId="floatingInput"
            label="Correo electrónico"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="nombre@gmail.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Escribe aquí tus ideas">
            <Form.Control
              // as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <button className="btn-contact-us-send" type="submit">Enviar</button>
        </form>
      </div>
  )
}

export default ContactUsform
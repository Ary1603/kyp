import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { apiSendConfitmation } from "../../controllers/guest_management_controller";

function BronzeConfirmationForm({ class_Id, image, id }) {
  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [phone, setPhone] = useState();
  const [rsvp, setRsvp] = useState();

  const setConfirmation = (e) => {
    e.preventDefault();
    apiSendConfitmation(id, name, surnames, "", rsvp, "", phone);
  };

  return (
    <div
      style={
        window.innerWidth < 860
          ? { backgroundImage: `url(${image})` }
          : { backgroundImage: "none" }
      }
      className={`invitation-form-bronze-container invitation-form-bronze-container-${class_Id}`}
    >
      <img className={`form-image form-image-${class_Id}`} src={image} alt="" />

      <div className={`form-invitation form-invitaion-${class_Id}`}>
        <h2 style={{ textAlign: "center" }} className="mb-4">
          Confirma tu asistencia
        </h2>

        <Form onSubmit={setConfirmation}>
          <Row className="mb-3">
            <Form.Group
              className="bronze-form-group"
              as={Col}
              controlId="formGridName"
            >
              <Form.Label>Nombre: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su(s) nombre(s)"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              className="bronze-form-group"
              as={Col}
              controlId="formGridPassword"
            >
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese sus apellidos"
                onChange={(e) => {
                  setSurnames(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3 mt-4">
            <Form.Group
              className="bronze-form-group"
              as={Col}
              controlId="formGridState"
            >
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control
                type="tel"
                maxLength={10}
                placeholder="Ingrese su teléfono"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="bronze-form-group"
              as={Col}
              controlId="formGridZip"
              onChange={(e) => setRsvp(e.target.value)}
            >
              <Form.Label>Confirmar asistencia:</Form.Label>
              <div className="checkbox-box-container">
                <div key={`inline-radio`} className="mb-3">
                  <Form.Check
                    inline
                    label="Sí"
                    name="group1"
                    type="radio"
                    id={`inline-radio-1`}
                    value={"Si"}
                  />
                  <Form.Check
                    inline
                    label="No"
                    name="group1"
                    type="radio"
                    id={`inline-radio-2`}
                    value={"No"}
                  />
                </div>
              </div>
            </Form.Group>
          </Row>

          <input
            variant="primary"
            type="submit"
            className={`btn-form-bronze btn-form-bronze-${class_Id}`}
            value="Enviar"
          />
        </Form>
      </div>
    </div>
  );
}

export default BronzeConfirmationForm;

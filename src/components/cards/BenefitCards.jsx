import React from "react";
import { benefits_info } from "../../data/benefits";
import { RiTimerFlashLine } from 'react-icons/ri';
import { BsCardChecklist, BsFillSendCheckFill } from 'react-icons/bs';
function BenefitCards() {
  return (
    <>
      <div className="benefits-cards-container">
        <div className="benefit-card" id="benefit-card-0">
          <RiTimerFlashLine className="benefit-card-icon"/>
          <div className="benefit-card-text-body">
            <h4>Comodidad y rapidez</h4>
            <p>Invitaciones digitales personalizadas al instante para eventos, con comodidad y rapidez excepcionales</p>
          </div>
        </div>

        <div className="benefit-card" id="benefit-card-1">
          <BsCardChecklist className="benefit-card-icon"/>
          <div className="benefit-card-text-body">
            <h4>Seguimiento y confirmación de asistencia</h4>
            <p>Las invitaciones incluyen herramientas de seguimiento y confirmación de asistencia, lo que facilita la gestión de la lista de invitados</p>
          </div>
        </div>

        <div className="benefit-card" id="benefit-card-2">
          <BsFillSendCheckFill className="benefit-card-icon"/>
          <div className="benefit-card-text-body">
            <h4>Comparte fácilmente</h4>
            <p>Reenvía tu invitación digital a amigos y familiares con un solo clic. Haz que todos estén al tanto y emocionados por asistir al evento</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BenefitCards;

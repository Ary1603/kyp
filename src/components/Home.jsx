import React from "react";
import NavbarBootstrap from "./navbars/NavbarBootstrap";
import BenefitCards from "./cards/BenefitCards";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { invitation_items } from "../data/items";
import PricingplansCard from "./cards/PricingplansCard";
import ContactUsform from "./forms/ContactUsform";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "./cards/TestimonialCard";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import { invitations_data } from "../data/invitations_data";
function Home() {
  console.log(invitations_data.bronze_demo);
  return (
    <>
      <NavbarBootstrap />
      <section id="cover">
        <img
        id="img-waves-cover"
          src="./Home/prueba4.png"
          alt=""
          style={{
            height: "600px",
            position: "absolute",
            bottom: "0px",
            right: "0px",
          }}
        />
        
        <div className="cover-text">
          <h1>DESTACA TUS EVENTOS CON UNA INVITACIÓN IMPECABLE</h1>
          <p>Momentos Inolvidables, Invitaciones Memorables</p>
          <a href="#pricing-plans"><button className="btn-cover">CONOCE YA</button></a>
        </div>
        <img
        src={screen.width > 750 ? "./Home/cover-img-correct.png": "./Home/cover-img-phone.png" }
          id="img-phone-cover"
          
          alt=""
          
        />
      </section>

      <section id="benefits">
        <BenefitCards />
      </section>

      <section id="invitations" className="mt-4">
        <div className="invitations-section-container">
          <div className="invitations-text-container">
            <h2>Invitaciones digitales para todo tipo de evento</h2>
            <p className="invitations-tex">
              Celebra momentos especiales con invitaciones digitales
              personalizadas. Desde bodas inolvidables hasta fiestas de
              cumpleaños únicas, nuestras invitaciones añaden estilo y
              comodidad. Perfectas para eventos corporativos, baby showers
              encantadores, reuniones familiares y mucho más.
              <br />
              <br />
              Confirma asistencias y comparte detalles en un formato ecológico y
              moderno. Kyp hace que tus eventos sean memorables con nuestras
              invitaciones digitales. ¡Descubre la modernidad y elegancia en
              cada clic!
            </p>
          </div>
          <div className="example-invitations-container">
            <img src="/Home/img_invitations.png" alt="" />
          </div>
        </div>
      </section>

      <section id="pricing-plans">
        <div className="brand-logo">
          <div className="square-logo"></div>
          <span>Invitaciones KYP</span>
        </div>

        <h2>Paquetes</h2>
        <p id="subtitle-pricing-plans">Elige tu favorito</p>
        <div className="pricing-plans-container">
          <PricingplansCard plan={invitation_items[0]} path={'/Daniela&Ricardo'}/>
          <PricingplansCard plan={invitation_items[1]} path={'/Sofia&Diego'}/>
          {/* <PricingplansCard plan={invitation_items[2]} path={'/demo-diamante'}/> */}
        </div>
      </section>

      <section id="contact-us">
        <div className="contact-us-img-container">
          <ContactUsform />
        </div>
      </section>

      <section id="testimonials">
        <div className="brand-logo">
          <div className="square-logo"></div>
          <span>Invitaciones KYP</span>
        </div>
        <h3 id="testimonial-title">Tesitominos</h3>
        <p id="testimonial-subtitle">¿Qué dicen nuestros clientes?</p>

        <div className="testimonial-container">
          <TestimonialCard card_text={testimonials[0]} />
          <TestimonialCard card_text={testimonials[1]} />
          <TestimonialCard card_text={testimonials[2]} />
        </div>
      </section>

      <footer className="home-footer">
        <img id="kyp-logo-footer" src="/Home/kyp-logo.png" alt="" />
        <div className="footer-body">
          <div className="footer-body-head">
            <p>Comparte la emoción, sin límites ni fronteras.</p>
            <div className="icons-footer-container">
              <span>
                <BsInstagram />
              </span>
              <span>
                <BsFacebook />
              </span>
            </div>
          </div>

          <div className="hr-footer"></div>
          <div className="footer-body-bottom">
            <p>Copyright © Invitaciones Kyp</p>
            <p id="footer-links">
              <span><a href="#">Avisos de privacidad</a> </span> |{" "}
              <span><a href="">Términos y condiciones</a></span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/portada.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60 color">Hola!!!</h1>
            <h1 className="weight800 font60 color">
              Somos Madmen
            </h1>
            <p className="font19">
              Somos una agencia de gestión comunicacional. Creamos propuestas trascendentes convencidos de que la generación de un discurso, es tan importante como el soporte, donde ese discurso necesita establecerse para producir efectividad y eficiciencia.
            </p>
            <Button label="ESCRIBENOS" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;

import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.jpg";
import Person02 from "../../assets/about/person02.jpg";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="NOSOTROS" />
      <p className="font20 color-about">
        Contamos con un núcleo de personas que comprende que lo significativo está en el otro.<br /> Por eso hablamos de una gestión comunicacional, porque es un trabajo de escucha, de pregunta y re pregunta<br /> entre ustedes y nosotros, porque tenemos la convicción de que los resultados se obtienen<br /> cuando en esas relaciones grupales- vinculares, se comienza a gestar un equipo
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt<br></br>ut labore et dolore magna aliqua. */}
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="sebastian" job="Web designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;

import React from "react";
import Swiper from './swiper';
import Title from "../ui-components/title/title";

//SCSS
import "./partners.scss";

const partners = () => (
  <div id="partners">
    <div className="wrapper">
      <Title title="CLIENTES" />
      <Swiper />
    </div>
  </div>
);

export default partners;

import React from "react";
// SCSS
import "./teamInfo.scss";

const about = () => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">Conceptos</h4>
      <p>.Generar ventas de productos</p>
      <h4 className="font20 weight800">Realizamos</h4>
      <p >
        .Planificación de medios<br />
        .Presentación y lanzamiento de productos<br />
        .Promociones<br />
        .Desarrollo de contenidos institucionales<br />
        .Comunicación interna<br />
      </p>
      {/* <p className="font12 weight500">Read More</p> */}
    </div>
  </div>
);

export default about;

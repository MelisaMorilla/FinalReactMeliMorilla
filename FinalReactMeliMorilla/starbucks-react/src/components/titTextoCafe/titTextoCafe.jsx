import React from "react";
import "./titTextoCafe.css"

/**
*
* TitTextoCafe contiene titulos, subtitulos, descripciones e imagenes del Cafe
*/

function TitTextoCafe({ h3, h2, p, title, subtitle, description, description2, description3, img }) {
  return (
    <div class="tit-texto">
      <div>
        
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <p>{description }</p>
        <img class= "imagen" src={img} alt="" />
        <p>{description2}</p>
        <p>{description3}</p>
        
      </div>
      
    </div>
  );
}

export default TitTextoCafe;

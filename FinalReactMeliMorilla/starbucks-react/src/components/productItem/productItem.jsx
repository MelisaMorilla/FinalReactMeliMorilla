import React from "react";
import "./productItem.css"

/**
*
* @param {img} img - agrega una imagen del producto
* @param {text} p - texto descripcion del producto
* 
*/
function ProductItem({ img, title }) {
  return (
    <div class="producto_container">
      <div>
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default ProductItem;

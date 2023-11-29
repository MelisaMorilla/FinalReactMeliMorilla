import React, { useContext } from "react";
import TittleBar from "../components/titleBar/tittleBar";
import { AppContext } from "../App";
import ProductItem from "../components/productItem/productItem";
import initialState from "../App"
function MenuPage() {
  const { appState } = useContext(AppContext);
  console.log("Estamos en el menu", appState.productos);
  return (
    <div>
      <TittleBar text={"Menu"}></TittleBar>

      <h2>Bebidas</h2>
      <hr />
      {appState.Bebidas.map((Bebidas) => {
        return (
          <ProductItem img={Bebidas.img} title={Bebidas.title}></ProductItem>
        );
      })}
      
      <h2>Comida</h2>
      <hr />
      {appState.Comida.map((Comida) => {
        return (
          <ProductItem img={Comida.img} title={Comida.title}></ProductItem>
        );
      })}

      <h2>En casa</h2>
      <hr />
      {appState.En_casa.map((En_casa) => {
        return (
          <ProductItem img={En_casa.img} title={En_casa.title}></ProductItem>
        );
      })}
    </div>
  );
}

export default MenuPage;

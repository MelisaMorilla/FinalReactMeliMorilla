/*Contenedor */
import { useContext } from "react";
import HeaderButton from "./headerButton/headerButton";
import "./header.css";
import logo from "../../assets/ico/logo.svg";
import { ThemeContext } from "../../App";

/*@param buttonList Lista de botones, es constante porque no cambia nunca, y dentro colocamos los elementos del header*/
const buttonList = [
  {
    name: "logo",
    link: "home",
    customCss: "",
    img: logo,
  },
  {
    name: "COFFEE",
    link: "cafe",
    customCss: "",
    img: "",
  },
  {
    name: "MENU",
    link: "menu",
    customCss: "",
    img: "",
  },
  {
    name: "EXPERIENCIA",
    link: "experiencia",
    customCss: "",
    img: "",
  },
  {
    name: "ADMIN",
    link: "form",
    customCss: "header__button--admin",
    img: "",
  },
  {
    name: "Localizar tienda",
    link: "https://www.google.com.ar/maps/search/Starbucks/@-34.6556054,-58.4823916,11z?entry=ttu",
    customCss: "header__button--right",
    img: "",
  },
];
/** 
*  Header component es la barra de navegacion de la web
*/
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme); 
    localStorage.setItem("theme", newTheme); 
  };

  return (
    <header>
      <nav>
        <div className="wrapper">
          <ul className="header__container">
             {buttonList.map((aButton, index) => {/** *el map sirve para iterar una lista de botones*/
              return <HeaderButton key={index} data={aButton} /*data= {aButton} contiene las propiedades de name, link, css, img *//>;
            })}
            <button onClick={handleClick}>cambiar tema</button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

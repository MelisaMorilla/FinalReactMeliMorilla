import "./tittleBar.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

/**
*
* TitleBar esta debajo del header, es un subtitulo
* @param {text} Texto del subtitulo
* 
*/
function TittleBar({ text }) {
  const { theme } = useContext(ThemeContext);
  return <div className={`title-bar-${theme}`}>{text}</div>;
}

export default TittleBar;

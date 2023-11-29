import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./routes/home";
import CafePage from "./routes/cafe.jsx";
import MenuPage from "./routes/menu";
import ExperienciaPage from "./routes/experiencia";
import NotFoundPage from "./routes/notFound";
import Wrapper from "./components/wrapper";
import FormItems from "./components/form/formItems.jsx";
import bakery from "./assets/img/tienda/bakery.png"
import cafe_caliente from "./assets/img/tienda/cafe_caliente.png"
import cafe_en_granos from "./assets/img/tienda/cafe_en_granos.png"
import cafe_helado from "./assets/img/tienda/cafe_helado.png"
import caliente from "./assets/img/tienda/caliente.png"
import frapuchino from "./assets/img/tienda/frapuchino.png"
import helada from "./assets/img/tienda/helada.png"
import sandwich_y_preparados from "./assets/img/tienda/sandwich_y_preparados.png"
import snacks from "./assets/img/tienda/snacks.png"
import te from "./assets/img/tienda/te.png"
import te_caliente from "./assets/img/tienda/te_caliente.png"
import te_helado from "./assets/img/tienda/te_helado.png"
import "./components/productItem/productItem.css"
import footer from "./components/footer/footer.jsx";
import facebook from "./assets/ico/facebook.png"
import instagram from "./assets/ico/instagram.jpg"
import linkedin from "./assets/ico/linkedin.png"
import "./components/footer/footer.css";



export const ThemeContext = createContext(null);
export const AppContext = createContext(null);
const themeLocalStorage = localStorage.getItem("theme") || "light";
const initialState = {
  Bebidas: [
    { img: cafe_caliente, title: "Cafe calientes" },
    { img: cafe_helado, title: "Cafe helados" },
    { img: frapuchino, title: "Frappuchino" },
    { img: te_caliente, title: "Te Calientes" },
    { img: te_helado, title: "Te helado" },
    { img: helada, title: "Heladas" },
    { img: caliente, title: "Calientes" },
    
  ],
  Comida: [
    { img: bakery, title: "Bakery" },
    { img: sandwich_y_preparados, title: "Sandwich & preparados"},
    { img: snacks, title: "Snacks" },
  ],
  En_casa: [
    { img: cafe_en_granos, title: "Cafe en granos" },
    { img: te, title: "Te" },
  ],
 
};

function reducer(state, action) {
  const oldState = { ...state };
  switch (action.type) {
    case "ADD_PRODUCT":
      oldState.productos.push(action.payload);
      alert("Producto agregado correctamente");
      return oldState;
    case "ADD_BEBIDA":
      oldState.bebidas.push(action.payload);
      return oldState;
    case "MODIFY_PRODUCT":
      return oldState;
    default:
      alert("No se reconoce la acción");
      return state;
  }
}

function App() {
  const [theme, setTheme] = useState(themeLocalStorage);
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
    <AppContext.Provider value={{ appState, dispatch }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Wrapper>
          <Router>
            {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
            <Header />
            <Routes>
              {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/experiencia" element={<ExperienciaPage />} />
              <Route path="/cafe" element={<CafePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/form" element={<FormItems />} />
            
            </Routes>
            
            
            {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
      <footer>
            <ul className="redes-sociales">
      
                <li className="redes"><img src={facebook} alt="" /> </li>
                <li className="redes"> <img src={instagram} alt="" /></li>
                <li className="redes"> <img src={linkedin} alt="" />   </li> 
            </ul>
            <p className="derechos">Ⓒ 2023. Starbucks Cofee Company. Reservados todos los derechos</p>


            </footer>
          </Router>
        </Wrapper>
        
      </ThemeContext.Provider>
    </AppContext.Provider>
  
    </div>
    
  );
}

export default App;

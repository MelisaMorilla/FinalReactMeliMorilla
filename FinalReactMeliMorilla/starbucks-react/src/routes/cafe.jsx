import React from "react";
import TittleBar from "../components/titleBar/tittleBar";
import TitTextoCafe from "../components/titTextoCafe/titTextoCafe";
import Café1 from "../assets/img/Café1.png"
import Café2 from "../assets/img/Café2.jpg"
import Café3 from "../assets/img/Café3.jpg"
function CafePage() {
  return (
    <div>
      <TittleBar text={"Nuestro Cafe"}></TittleBar>
      <br/>
   
      <TitTextoCafe
        title={""}
        subtitle={""}
        description={"El olor al café, a unos granos recién tostados, es la mejor bienvenida que cada día planificamos para brindarles cuando abrimos las puertas de nuestras tiendas. Pero eso es sólo el comienzo."}
        img={Café1}
        description2={"De cuerpo entero, un poco ahumado, con notas cítricas, con fuerte presencia de chocolate…el desafío que tenemos constantemente es que cada uno de nuestros clientes encuentre su mezcla favorita y a la vez, que explore nuestras amplias selecciones más singulares."}
        description3={"Para alcanzarlo nos abastecemos de los mejores granos de café arábicos siguiendo siempre estrictos principios éticos."}
       />
      <TitTextoCafe
        title={"Nuestro tostado Starbucks"}
        subtitle={""}
        description={"Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café."}
        img={Café2}      
        />
        <TitTextoCafe
        title={""}
        subtitle={"Rubio"}
        description={"El café Starbucks tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves."}
             
        />
         <TitTextoCafe
        title={""}
        subtitle={"Medio"}
        description={"El café con tostado medio es balanceado con sabores agradables y enriquecidos."}
      
        
        />
         <TitTextoCafe
        title={""}
        subtitle={"Oscuro"}
        description={"Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos. "}
    
        
        />
        <TitTextoCafe
        title={"Descubre los métodos de preparación en Starbucks, ¿Cuál es el correcto para vos?"}
        subtitle={""}
        description={"Desde el cultivo responsable hasta el tostado, cada detalle en la elaboración de manera artesanal es fundamental para poder disfrutar de una taza de café Starbucks. Y además de la esencia de los granos, sabemos que la forma en la que se prepara el café tiene un efecto sorprendente en el sabor de cada taza y define su cuerpo. "}       
        img={Café3}
        description2={"Es por eso que nuestros magníficos baristas se enfocan en crear diariamente rituales escogiendo diferentes métodos de preparación para que sean nuestros clientes quienes se sorprenden. Así, de la mano de las explicaciones de nuestros expertos, no sólo cultivarán la curiosidad sino que podrán seleccionar el mejor método para su experiencia Starbucks."}
        
        />
   
   </div>
    
    
  );
}

export default CafePage;

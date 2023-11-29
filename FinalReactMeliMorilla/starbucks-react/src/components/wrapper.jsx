import React from "react";
/**
*Maximiza la reutilizacion del codigo en las diferentes paginas
*/

function Wrapper({ children }) {
  return <div style={{ maxWidth: "1000px", margin: "0 auto" }}>{children}</div>;
}

export default Wrapper;

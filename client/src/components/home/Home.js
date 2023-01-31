import React from "react";
import Config from "../config/config";
import Datos from "../datos/datos";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <h2>soy pagina home</h2>
      <div className="bigContainer">
        <div className="container_a">
          <Config />
        </div>
        <div className="container_b">
          <Datos />
        </div>
      </div>
    </div>
  );
}

export default Home;

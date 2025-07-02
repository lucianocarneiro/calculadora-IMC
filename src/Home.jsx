import React from "react";
import { Link } from "react-router-dom"; 
import './index.css';
import ButtonReturn from './ButtonReturn';

//criando os arquivos das páginas
const Home = () => {
  return (
    <div>

      <div className="home-container">
        <h1>Descubra seu IMC em segundos!</h1>
        <p>Simples, rápido e direto ao ponto. Em menos de 1 minuto, você descobre seu índice de massa corporal.</p>

        <Link to="/calculadora">
          <button className="btn-imc">Calcular meu IMC agora</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
// Resultado.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ButtonReturn from "./ButtonReturn";
import ButtonCalculadora from './ButtonCalculadora';

const Resultado = () => {
  const [dados, setDados] = useState({
    nome: "",
    imc: "",
    classificacao: "",
  });

  useEffect(() => {
    const nome = localStorage.getItem("nome") || "Usuário";
    const imc = localStorage.getItem("imc");
    const classificacao = localStorage.getItem("classificacao");

    setDados({ nome, imc, classificacao });
  }, []);

  const getColorClass = () => {
    if (dados.classificacao === "Abaixo do peso") return "azul";
    if (dados.classificacao === "Peso normal") return "verde";
    if (dados.classificacao === "Sobrepeso") return "amarelo";
    return "vermelho";
  };


  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'spa ', // um botão à esquerda, outro à direita
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto 2rem auto', // centralizar o container e dar margem inferior
        }}
      >

        <ButtonReturn />
        <ButtonCalculadora />

      </div>
      <div className="resultado-container">
        <h2 className="fade-in">Resultado do IMC</h2>
        <div className={`card-resultado ${getColorClass()}`}>
          <p className="escrevendo">
            <strong>{dados.nome}</strong>, seu IMC é <strong>{dados.imc}</strong>
          </p>
          <p className="fade-in">
            Classificação: <strong>{dados.classificacao}</strong>
          </p>
        </div>
        <p className="font-light">
          Fonte:{" "}
          <a
            href="https://www.saude.rj.gov.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Secretaria de Saúde do RJ
          </a>
        </p>

        <Link to="/calculadora">
          <button className="btn-imc voltar-btn">Calcular Novamente</button>
        </Link>
      </div>
    </div>
  );

};

export default Resultado;

import React, { useEffect, useState } from "react";
import ButtonReturn from "../ButtonReturn";
import ButtonCalculadora from "../Calculadora";
import '../index.css'; // Mantém o estilo global

const ResultadoListas = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("/resultados.json")
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  const calcularIMC = (peso, altura) => {
    if (!peso || !altura) return null;
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    else if (imc < 24.9) return "Peso normal";
    else if (imc < 29.9) return "Sobrepeso";
    else return "Obesidade";
  };

  const getCorClasse = (imc) => {
    if (imc < 18.5) return "azul";
    else if (imc < 24.9) return "verde";
    else if (imc < 29.9) return "amarelo";
    else return "vermelho";
  };

  return (
    <div 
    className="resultado-container fade-in">
      
      <ButtonReturn />

      <h2 className="escrevendo">Resultados anteriores</h2>

      {dados.length === 0 ? (
        <p>Carregando resultados...</p>
      ) : (
        dados.map((pessoa, index) => {
          const imc = calcularIMC(pessoa.peso, pessoa.altura);
          const classificacao = classificarIMC(imc);
          const corClasse = getCorClasse(imc);

          return (
            <div key={index} className={`card-resultado ${corClasse}`}>
              <p><strong>Nome:</strong> {pessoa.nome}</p>
              <p><strong>Sexo:</strong> {pessoa.sexo}</p>
              <p><strong>Idade:</strong> {pessoa.idade}</p>
              <p><strong>Peso:</strong> {pessoa.peso} kg</p>
              <p><strong>Altura:</strong> {pessoa.altura} m</p>
              <p><strong>IMC:</strong> {imc}</p>
              <p><strong>Classificação:</strong> {classificacao}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ResultadoListas;

import React, { useState, useEffect } from "react";
import ButtonReturn from './ButtonReturn';
import ButtonResultadoLista from './ButtonResultadoLista';

import './index.css';


const Calculadora = () => {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');



  // Carrega os dados do localStorage ao abrir a tela
  useEffect(() => {
    setNome(localStorage.getItem("nome") || '');
    setSexo(localStorage.getItem("sexo") || '');
    setIdade(localStorage.getItem("idade") || '');
    setPeso(localStorage.getItem("peso") || '');
    setAltura(localStorage.getItem("altura") || '');

  }, []);

  const handleAlturaChange = (e) => {
    let novaAltura = e.target.value.replace(/\./g, ',');
    setAltura(novaAltura);
  };

 


  const calcularIMC = () => {
    if (!nome || !sexo || !idade || !peso || !altura) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    setErro("");

    const alturaCorrigida = altura.replace(/,/g, '.');
    const alturaM = parseFloat(alturaCorrigida);
    const pesoKg = parseFloat(peso);

    if (isNaN(alturaM) || isNaN(pesoKg)) {
      setErro('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const imc = pesoKg / (alturaM * alturaM);

    // Salvando dados no local store
    localStorage.setItem("nome", nome);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("idade", idade);
    localStorage.setItem("peso", peso);
    localStorage.setItem("altura", altura);
    localStorage.setItem("imc", imc.toFixed(2));

    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    localStorage.setItem("classificacao", classificacao);

    setResultado({
      imc: imc.toFixed(2),
      classificacao
    });

    // Redireciona para a tela de resultado
    window.location.href = "/resultado";
  };

  return (
    <div>
      <div
      style={{
      display: 'flex',
      justifyContent: 'space-between', //um botão à esqueda o outro à direita
      alignItems: 'center',
      maxWidth: '400px',
      margin: '0 auto 2rem auto', // centralizar o container e dar margem inferior
}}
>
      <ButtonReturn />
      <ButtonResultadoLista />

      </div>
    <div className="calc-container">
      <h2>Calculadora de IMC</h2>
      <form className="form-calculadora-imc" onSubmit={e => { e.preventDefault(); calcularIMC(); }}>
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="">Selecione o sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura (m)"
          value={altura}
          onChange={handleAlturaChange}
        />
        <button type="submit">Calcular IMC</button>
      </form>

      {erro && <p className="erro-msg">{erro}</p>}

      {resultado && (
        <div className="resultado">
          <p><strong>{nome}</strong>, seu IMC é <strong>{resultado.imc}</strong></p>
          <p>Classificação: <strong>{resultado.classificacao}</strong></p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Calculadora;
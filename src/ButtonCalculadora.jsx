import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BsCalculator } from "react-icons/bs";

//chamando a calculadora
const ButtonCalculadora = () => {
  const navigate = useNavigate();

  const irParaCalculadora = () => {
    navigate('/Calculadora')
  };

  return (
    <button 
      onClick={irParaCalculadora} 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '6px',
        border: '1px solid #000',
        backgroundColor: 'transparent',
        margin: '0 auto',
        
      }}
      aria-label="Voltar"
    >
      <BsCalculator  size={20} />
      Calculadora
    </button>
  );
};

export default ButtonCalculadora;

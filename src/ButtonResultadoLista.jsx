import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BsCalculator } from "react-icons/bs";
import { MdListAlt } from "react-icons/md";

const ButtonResultadoLista = () => {
  const navigate = useNavigate();

  const irParaCalculadora = () => {
    navigate('/resultados')
  };

  return (
    <button 
      className='button-list'
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
        /*margin: '0 auto',*/
        
        
      }}
      aria-label="Voltar"
    >
      <MdListAlt  size={20} />
      Lista
    </button>
  );
};

export default ButtonResultadoLista;

import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ButtonReturn = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <button 
      id='return-button'
      onClick={handleReturn} 
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
      }}
      aria-label="Voltar"
    >
      <FaAngleLeft size={20} />
      Voltar
    </button>
  );
};

export default ButtonReturn;

// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';  // Pode reutilizar seu CSS ou criar específico
import ButtonReturn from './ButtonReturn'; 

const NotFound = () => {
  return (
    <div className="notfound-container" style={{ padding: '2rem', textAlign: 'center' }}>
      <ButtonReturn />
      <h1>404 - Página não encontrada</h1>
      <p>Ops! A página que você está procurando não existe.</p>
    </div>
  );
};

export default NotFound;

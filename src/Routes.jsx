import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Calculadora from "./Calculadora";
import Resultado from "./Resultado"; //
import NotFound from "./NotFound";
import Footer from "./Footer";
import ResultadoListas from "./pages/ResultadoListas";





const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculadora" element={<Calculadora />} />
      <Route path="/resultado" element={<Resultado />} />
      <Route path="/resultados" element={<ResultadoListas />} />


      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaLogin from "./pages/login/TelaLogin"; // Importa o componente da tela de login
import TelaRegistro from "./pages/registro/TelaRegistro"; // Importa o componente da tela de registro
import TelaHome from "./pages/home/TelaHome"; // Importa o componente da tela inicial

function App() {
  return (
    <Router> {/* Define o roteador do aplicativo */}
      <Routes> {/* Define as rotas do aplicativo */}
        <Route path="/" element={<TelaLogin />} /> {/* Define a tela de login como a tela inicial */}
        <Route path="/login" element={<TelaLogin />} /> {/* Define a tela de login como uma rota*/}
        <Route path="/registro" element={<TelaRegistro />} /> {/* Define a tela de registro como uma rota */}
        <Route path="/home" element={<TelaHome />} /> {/* Define a tela inicial como uma rota */}
      </Routes> 
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaLogin from "./pages/login/TelaLogin";
import TelaRegistro from "./pages/registro/TelaRegistro";
import TelaHome from "./pages/home/TelaHome"; // Importe o componente da tela inicial

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/registro" element={<TelaRegistro />} />
        <Route path="/home" element={<TelaHome />} />
      </Routes>
    </Router>
  );
}

export default App;
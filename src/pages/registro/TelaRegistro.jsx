import React from "react";
import "./registro.css";
import { useNavigate } from "react-router-dom";

function TelaRegistro() {
  const navigate = useNavigate();

  const handleEntrarClick = () => {
    navigate("/home");
  }

  const handleLoginClick = () => {
    navigate("/login");
  }
  return (
    <div>
      <div class="top-tela-registro direita-tela-registro">
        <img src="src/img/logo.png" alt="" />
        <h1>Venha fazer parte da maior rede social também!</h1>
      </div>
      <div class="bot-tela-registro esquerda-tela-registro">
        <h1>Registrar</h1>
        <form>
          <fieldset>
            <label for="name">Nome</label>
            <input type="text" id="name" />
            <label for="email">E-mail</label>
            <input type="email" id="email" />
            <label for="password">Senha</label>
            <input type="password" id="password" />
            <label for="password">Confirmar senha</label>
            <input type="password" id="password" />

            <div class="gender-image">
              <div class="div-select-estiloso">
                <label for="gender">Sexo</label>
                <select name="gender" id="gender">
                  <option selected disabled></option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                  <option value="others">Outros</option>
                </select>
              </div>

              <div class="input-type-image-estiloso">
                <label for="picture-input">Imagem</label>
                <input type="file" accept="image/*" class="picture-input" />
                <span class="picture-image">Selecionar imagem</span>
              </div>
            </div>

            <button type="submit" onClick={handleEntrarClick} >Registrar-se</button>
          </fieldset>
        </form>
        <a onClick={handleLoginClick}>Já possui conta?</a>
      </div>
    </div>
  );
}

export default TelaRegistro;
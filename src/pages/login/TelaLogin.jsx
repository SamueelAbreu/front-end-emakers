// TelaLogin.js
import "./login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function TelaLogin() {
    const navigate = useNavigate();

    const handleRegistrarClick = () => {
        navigate("/registro");
    }

    const handleEntrarClick = () => {
        navigate("/home");
    }

    return (
        <div class="div-principal-tela-login">
            <div class="div-esquerda-tela-login">
                <img src="src/img/brancologo.png" alt="Logo Emakers" class="logo-emakers" draggable="false" />
                <div class="div-esquerda-conteudo"></div>
                <h1 class="entre">Entre em Sua Conta</h1>
                <form action="" autocomplete="off" class="form-login">
                    <fieldset>
                        <label for="email" class="form-email">E-mail:</label>
                        <input type="email" name="email" />
                        <label for="password" class="form-password">Senha:</label>
                        <div class="password-container">
                            <input type="password" name="password" id="password" />
                            <i class="bi bi-eye-fill" id="btn-password" onclick="mostrarSenha()"></i>
                        </div>
                        <button type="submit" class="form-button-entrar" onClick={handleEntrarClick}>Entrar</button>
                    </fieldset>
                </form>
            </div>
            <div class="div-direita-tela-login">
                <div class="div-direita-conteudo">
                    <h1>Novo Aqui?</h1>
                    <p>Registre-se e venha fazer parte da maior rede social!</p>
                    <button class="button-registrar" onClick={handleRegistrarClick}>Registrar-se</button>
                </div>
            </div>
        </div>
    );
}

export default TelaLogin;

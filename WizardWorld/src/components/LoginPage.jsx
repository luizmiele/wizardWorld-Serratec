import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='E-mail' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Senha' required />
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Lembrar-me</label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button type='submit'>Entrar em sessão</button>

                <div className="register-link">
                    <p>Não tem uma conta?</p>
                </div>
                <button className='submit'>Inscrever-se</button>

            </form>
        </div>
    );
};

export default Login;
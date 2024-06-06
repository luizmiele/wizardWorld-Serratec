import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaUser, FaLock } from "react-icons/fa";
import Wizarding_World_Logo from '../../assets/images/Wizarding_World_Logo.png'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
          navigate(`/slytherin`);
      };

    return (
        <div className={styles.principal}>
            <div className={styles.wwlogo}>
                    <a className= {styles.model}href="https://www.wizardingworld.com/" target="_blank">
                        <img src={Wizarding_World_Logo} alt="Wizarding World Logo" />
                    </a>
                </div>
            <div className={styles.wrapper}>
                
                <form action="">
                    <h1>Login</h1>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder='E-mail' required />
                        <FaUser className={styles.icon}/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" placeholder='Senha' required />
                        <FaLock className={styles.icon}/>
                    </div>

                
                    <div className={styles.rememberForgot}>
                        <label><input type="checkbox" />Lembrar-me</label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                
                    <button type='submit' onClick={handleLogin}>Entrar em sessão</button>

                    <div className={styles.registerLink}>
                        <p>Não tem uma conta?</p>
                    </div>
                    <button className={styles.submit}>Inscrever-se</button>

                </form>
            </div>
        </div>
    );
};

export default Login;
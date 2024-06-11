// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import Wizarding_World_Logo from "../../assets/images/Wizarding_World_Logo.png";
import { useNavigate } from "react-router-dom";
import LoginMusic from "../../components/BackgroundMusic/LoginMusic.jsx"
import LoginVideo from './backgroundLoginVideo.jsx';
import loginVideoSrc from '../../assets/videos/FundoLogin.mp4';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [checaLogin, setChecaLogin] = useState(0);
  const [house, setHouse] = useState("");

  const users = [
    { email: "alunoG", password: "123", house: "gryffindor" },
    { email: "alunoS", password: "1234", house: "slytherin" },
    { email: "alunoH", password: "12345", house: "hufflepuff" },
    { email: "alunoR", password: "123456", house: "ravenclaw" },
  ];

  useEffect(() => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (checaLogin > 0) {
      if (user) {
        handleHouse(user.house);
      } else {
        alert("login invalido!");
      }
    }
  }), [checaLogin];

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSenha(e) {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    setChecaLogin(checaLogin + 1);
  };

  const handleHouse = (house) => {
    navigate(`/${house}`);
  };

  return (
    <div className={styles.principal}>
      <LoginVideo src={loginVideoSrc} />
      <LoginMusic />
      <div className={styles.wwlogo}>
        <a
          className={styles.model}
          href="https://www.wizardingworld.com/"
          target="_blank"
        >
          <img src={Wizarding_World_Logo} alt="Wizarding World Logo" />
        </a>
      </div>
      <div className={styles.wrapper}>
        <form action="">
          <h1>Login</h1>
          <div className={styles.inputBox}>
            <input type="text"
              placeholder="E-mail"
              value={email}
              onChange={handleEmail}
              required />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputBox}>
            <input type="password"
              placeholder="Senha"
              value={password}
              onChange={handleSenha}
              required />
            <FaLock className={styles.icon} />
          </div>

          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" />
              Lembrar-me
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" onClick={handleLogin}>
            Entrar em sessão
          </button>

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
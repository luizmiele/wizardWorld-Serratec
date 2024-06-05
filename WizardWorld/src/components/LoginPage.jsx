import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [house, setHouse] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (house) {
      navigate(`/${house.toLowerCase()}`);
    }
  };

  return (
    <div className={styles.loginPage}>
      <h1>Bem-vindo à Escola de Hogwarts</h1>
      <select value={house} onChange={(e) => setHouse(e.target.value)}>
        <option value="">Selecione sua casa</option>
        <option value="Gryffindor">Grifinória</option>
        <option value="Slytherin">Sonserina</option>
        <option value="Ravenclaw">Corvinal</option>
        <option value="Hufflepuff">Lufa-Lufa</option>
      </select>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default LoginPage;

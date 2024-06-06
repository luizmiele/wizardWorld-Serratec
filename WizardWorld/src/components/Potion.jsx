import React, { useState } from "react";
import "./Potion.module.css";
import moldura from "./WizardWorld/src/assets/images/moldura.png";
import sala from "./images/Salawebp";
import styles from "./Potion.module.css"


const potion = () => {
  const [NomePocao, setNomePocao] = useState("");
  const [receita, setReceita] = useState("");

  const pesquisar = (e) => {
    // Função para lidar com a busca da poção
    e.preventDefault();
    // Aqui você pode adicionar a lógica para buscar a receita da poção
    setReceita(`Receita da ${NomePocao}`); // Apenas um exemplo
  };

  return (
    <div className="app">
      <img src = {sala} alt="plano de fundo mostrando uma sala com pocoes"/>
      <header className="header">
        <p>Olá estudante! Qual poção você gostaria de pesquisar?</p>
      </header>
      <main className="main">
        <div className="search-section">
          <h2>Qual poção está procurando?</h2>
          <form onSubmit={pesquisar}>
            <input
              type="text"
              placeholder="Procure sua poção..."
              value={potionName}
              onChange={(e) => setNomePocao(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
        </div>
        <div className="recipe-section">
          <h2>Receita da {NomePocao}</h2>
          <p>{receita}</p>
        </div>
      </main>
      <aside className="aside">
        <img src={moldura} alt="Professor" />
      </aside>
    </div>
  );
};

export default Potion;

import React, { useState } from "react";
import moldura from "../../assets/images/enzo-diretor-moldura.png";
import sala from "../../assets/images/Sala.webp";
import styles from "./styles.module.css"

const Potion = () => {
  // const [NomePocao, setNomePocao] = useState("");
  // const [receita, setReceita] = useState("");

  // const pesquisar = (e) => {
  //   // Função para lidar com a busca da poção
  //   e.preventDefault();
  //   // Aqui você pode adicionar a lógica para buscar a receita da poção
  //   setReceita(`Receita da nome da receita`); // Apenas um exemplo
  // };

  return (
    <div className={styles.app}>
      <img src={sala} alt="plano de fundo mostrando uma sala com pocoes" />
      <header className={styles.header}>
        <p>Olá estudante! Qual poção você gostaria de pesquisar?</p>
      </header>
      <main className={styles.main}>
        <div className={styles.searchSection}>
          <h2>Qual poção está procurando?</h2>
          <form>
            <input
              type="text"
              placeholder="Procure sua poção..."
            />
            <button type="submit">🔍</button>
          </form>
        </div>
      </main>
      <aside className={styles.aside}>
        <img src={moldura} alt="Professor" />
      </aside>
    </div>
  );
};

export default Potion;
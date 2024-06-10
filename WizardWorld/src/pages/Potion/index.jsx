import React, { useState, useEffect } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/index.jsx";
import styles from "./styles.module.css";
import videoSrc from "../../assets/videos/corvinal.mp4";
import centerImage from "../../assets/images/paginaVelha.png";
import crest from "../../assets/images/casas/hogwarts.png";
import studentImage from "../../assets/images/enzo-diretor-moldura.png";
import { getElixirList } from "../../services/Api.js";

const Potion = () => {
  const [showChat, setShowChat] = useState(true);
  const [potions, setPotions] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [potionsFiltradas, setPotionsFiltradas] = useState([]);
  const [foundPotion, setFoundPotion] = useState(null);
  const [invisivel, setInvisivel] = useState(true);
  const [detalheInvisivel, setDetalheInvisivel] = useState(true);
  const [linkText, setLinkText] = useState("");
  const [effect, setEffect] = useState("");
  const [sideEffect, setSideEffect] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [desconhecidoInvisivel, setDesconhecidoInvisivel] = useState(true);

  function mostraDetalhes() {
    const potion = findByName(linkText);
    setFoundPotion(potion);
    setDifficulty(potion.difficulty);
    setEffect(potion.effect);
    setSideEffect(potion.sideEffect);
    const names = potion.ingredients.map((ingredient) => ingredient.name);
    setIngredients(names);
  }

  function findByName(name) {
    return potions.find((potion) => potion.name === name);
  }

  const handleContent = (e) => {
    e.preventDefault();
    setLinkText(e.target.textContent);
    mostraDetalhes();
    setDetalheInvisivel(false);
    setDesconhecidoInvisivel(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    if (filtro === "") {
      setInvisivel(true);
    } else {
      setInvisivel(false);
      pesquisa();
    }
  }, [filtro]);

  async function getApiData() {
    const results = await getElixirList();
    setPotions(results.data);
    setPotionsFiltradas(results.data);
  }

  function handleFiltro(e) {
    setFiltro(e.target.value);
  }

  function pesquisa() {
    const filtradas = potions.filter((potion) =>
      potion.name.toLowerCase().includes(filtro.toLowerCase())
    );
    setPotionsFiltradas(filtradas);
  }

  const handleStudentClick = () => {
    setShowChat(!showChat);
  };

  return (
    <div className={styles.principal}>
      <BackgroundVideo src={videoSrc} />
      <div className={styles.crestContainer}>
        <img className={styles.crest} src={crest} alt="Crest" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.paginaContainer}>
          <div
            className={styles.paginas}
            style={{ backgroundImage: `url(${centerImage})` }}
            alt="Pegaminho velho"
          >
            <div className={styles.paginaEsquerda}>
              <div className={styles.pesquisa}>
                <h2>Qual feitiço está procurando?</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    onChange={handleFiltro}
                    placeholder="Procure sua poção..."
                  />
                </form>
                {invisivel ? (
                  <p>NADA</p>
                ) : (
                  <div className={styles.scrollContainer}>
                    {potionsFiltradas.map((potion) => (
                      <div className={styles.potions} key={potion.id}>
                        <a href="#" onClick={handleContent}>
                          {potion.name}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.paginaDireita}>
              {detalheInvisivel ? (
                <p></p>
              ) : (
                <p>
                  <span>Nome: </span> {linkText} <br />
                  <span>Efeito: </span> {effect}
                  <br />
                  <span>Efeito colateral: </span> {sideEffect}
                  <br />
                  <span>Dificuldade: </span> {difficulty}
                  <br />
                  <span>Ingredientes: </span>
                </p>
              )}

              {ingredients.length > 0 && !desconhecidoInvisivel ? (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {ingredients.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              ) : !detalheInvisivel ? (
                <p>
                  <ul>
                    <li>Ingredientes desconhecidos</li>
                  </ul>
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.monitorContainer}>
        <div className={styles.monitorTexto}>
          {showChat && (
            <div className={styles.chatBox}>
              <div className={styles.studentText}>
                <p>
                  Suas poções favoritas são
                  <ul>
                    <li>tananan</li>
                    <li>tananin</li>
                    <li>trolous</li>
                    <li>Boeck OO</li>
                    <li></li>
                  </ul>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.monitorImagem}>
          <img
            className={styles.studentImage}
            src={studentImage}
            alt="Student"
            onClick={handleStudentClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Potion;

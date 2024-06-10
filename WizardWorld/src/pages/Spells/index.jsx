import React, { useState, useEffect } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/index.jsx";
import styles from "./styles.module.css";
import videoSrc from "../../assets/videos/corvinal.mp4";
import centerImage from "../../assets/images/paginaVelha.png";
import crest from "../../assets/images/casas/hogwarts.png";
import studentImage from "../../assets/images/enzo-diretor-moldura.png";
import { getSpells } from "../../services/Api.js";

const Spell = () => {
  const [showChat, setShowChat] = useState(true);
  const [spells, setSpells] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [spellsFiltradas, setSpellsFiltradas] = useState([]);
  const [invisivel, setInvisivel] = useState(true);
  const [detalheInvisivel, setDetalheInvisivel] = useState(true);
  const [linkText, setLinkText] = useState("");
  const [foundSpell, setFoundSpell] = useState(null);
  const [incantation, setIncantation] = useState("");
  const [effect, setEffect] = useState("");
  const [type, setType] = useState("");
  const [light, setLight] = useState("");

  function mostraDetalhes() {
    const spell = findByName(linkText);
    setFoundSpell(spell);
    setIncantation(spell.incantation);
    setEffect(spell.effect);
    setType(spell.type);
    setLight(spell.light);
  }

  function findByName(name) {
    return spells.find((spell) => spell.name === name);
  }

  const handleContent = (e) => {
    e.preventDefault();
    setLinkText(e.target.textContent);
    mostraDetalhes();
    setDetalheInvisivel(false);
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
    try {
      const results = await getSpells();
      setSpells(results.data);
      setSpellsFiltradas(results.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleFiltro(e) {
    setFiltro(e.target.value);
  }

  function pesquisa() {
    const filtradas = spells.filter((spell) =>
      spell.name.toLowerCase().includes(filtro.toLowerCase())
    );
    setSpellsFiltradas(filtradas);
  }

  const handleStudentClick = () => {
    setShowChat(!showChat);
  };

  return (
    <div className={styles.principal}>
      <BackgroundVideo src={videoSrc} />
      <div className={styles.crestContainer}>
        <a href="http://localhost:5173/gryffindor">
          <img className={styles.crest} src={crest} alt="Crest" />
        </a>
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
                    placeholder="Procure seu feitiço..."
                  />
                </form>
                {invisivel ? (
                  <p>NADA</p>
                ) : (
                  <div className={styles.scrollContainer}>
                    {spellsFiltradas.map((spell) => (
                      <div className={styles.spells} key={spell.id}>
                        <a href="#" onClick={handleContent}>
                          {spell.name}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.paginaDireita}>
              {detalheInvisivel ? (
                <p>Detalhe INVISIVEL</p>
              ) : (
                <p>
                  <span>Nome: </span> {linkText} <br />
                  <span>Encantamento: </span> {incantation} <br />
                  <span>Efeito: </span> {effect} <br />
                  <span>Tipo: </span> {type} <br />
                  <span>Luz: </span> {light} <br />
                </p>
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
                Suas poções favoritas são
                <ul>
                  <li>tananan</li>
                  <li>tananin</li>
                  <li>trolous</li>
                  <li>Boeck OO</li>
                </ul>
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

export default Spell;
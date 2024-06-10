import React, { useState, useEffect } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/index.jsx";
import styles from "./styles.module.css";
import videoSrc from "../../assets/videos/SalaSpells.mp4";
import centerImage from "../../assets/images/paginaVelha.png";
import crest from "../../assets/images/casas/hogwarts.png";
import pena from "../../assets/images/icones/pena.png"
import studentImage from "../../assets/images/enzo-diretor-moldura.png";
import { getSpells } from "../../services/Api.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const estilo = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


function voltaPagina(){
  window.history.back();
}

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
        <a href="#" onClick={voltaPagina}>
          <img className={styles.crest} src={crest} alt="Crest" />
        </a>
      </div>

      <div className={styles.criarFeitico}> <h2>Crie seu feitiço!</h2>
        <div className={styles.modal}>
        <Button onClick={handleOpen}> <img src={pena} alt="criar feitiço" /></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={estilo}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
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
                  className={styles.formulario}
                    type="text"
                    onChange={handleFiltro}
                    placeholder="Procure seu feitiço..."
                  />
                </form>
                {invisivel ? (
                  <p></p>
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
                  <span className={styles.atributo}>Nome: </span> {linkText} <br />

                  <span className={styles.atributo}>Encantamento: </span> {incantation} <br />

                  <span className={styles.atributo}>Efeito: </span> {effect} <br />

                  <span className={styles.atributo}>Tipo: </span> {type} <br />

                  <span className={styles.atributo}>Luz: </span> {light} <br />
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
                <p>
                Suas poções favoritas são
                  <ul>tananan</ul>
                  <ul>tananin</ul>
                  <ul>trolous</ul>
                  <ul>Boeck OO</ul>
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

export default Spell;
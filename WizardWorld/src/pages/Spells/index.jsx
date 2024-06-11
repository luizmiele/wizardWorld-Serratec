import React, { useState, useEffect, useContext } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/index.jsx";
import styles from "./styles.module.css";
import videoSrc from "../../assets/videos/SalaSpells.mp4";
import centerImage from "../../assets/images/paginaVelha.png";
import crest from "../../assets/images/casas/hogwarts.png";
import pena from "../../assets/images/icones/pena.png";
import studentImage from "../../assets/images/enzo-diretor-moldura.png";
import { getSpells } from "../../services/Api.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SpellsMusic from "../../components/BackgroundMusic/SpellsMusic.jsx";
import CustomThemeProvider from "../../components/CustomThemeProvider/index.jsx";
import IconLabelButtons from "../../components/IconLabelButtons/index.jsx";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { FavoritesContext } from "../../contexts/FavoriteScreen.jsx";

const estilo = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(241, 218, 143, 0.8)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
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
  const [spellName, setSpellName] = useState("");
  const [incantation, setIncantation] = useState("");
  const [effect, setEffect] = useState("");
  const [type, setType] = useState("");
  const [light, setLight] = useState("");
  const [newSpellName, setNewSpellName] = useState("");
  const [newIncantation, setNewIncantation] = useState("");
  const [newEffect, setNewEffect] = useState("");
  const [newType, setNewType] = useState("");
  const [newLight, setNewLight] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function voltaPagina() {
    window.history.back();
  }

  const { favorite, addFavorite } = useContext(FavoritesContext);

  function mostraDetalhes(nome) {
    const spell = findByName(nome);
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
    mostraDetalhes(e.target.textContent);
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
      const results = await getSpells();
      setSpells(results.data);
      setSpellsFiltradas(results.data);
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

  // Função para enviar dados para a API
  const sendFormToApi = async () => {
    try {
      const formData = {
        nomeSpell: newSpellName,
        encantamento: newIncantation,
        efeito: newEffect,
        tipo: newType,
        luz: newLight,
      };
      console.log("FORMA DATA: " + formData);
      const url = "https://6632937ac51e14d69564d9af.mockapi.io/test/v1";
      const endpoint = "/spells";
      await axios.post(url + endpoint, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Formulario enviado com sucesso!")
      console.log("Formulário enviado com sucesso:", formData);
      // Resetar o formulário aqui, se necessário
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.principal}>
      <BackgroundVideo src={videoSrc} />
      <SpellsMusic />
      <div className={styles.crestContainer}>
        <a href="#" onClick={voltaPagina}>
          <img className={styles.crest} src={crest} alt="Crest" />
        </a>
      </div>

      <div className={styles.criarFeitico}>
        {" "}
        <h2>Crie seu feitiço!</h2>
        <div className={styles.modal}>
          <Button onClick={handleOpen}>
            {" "}
            <img src={pena} alt="criar feitiço" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={estilo}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Criar Feitiço
              </Typography>
              <CustomThemeProvider>
                <TextField
                  fullWidth
                  label="Nome do Feitiço"
                  id="fullWidth"
                  onChange={(e) => setNewSpellName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Encantamento"
                  id="fullWidth"
                  onChange={(e) => setNewIncantation(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Efeito"
                  id="fullWidth"
                  onChange={(e) => setNewEffect(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Tipo"
                  id="fullWidth"
                  onChange={(e) => setNewType(e.target.value)}
                />
                <TextField
                  fullWidth
                  label="Luz"
                  id="fullWidth"
                  onChange={(e) => setNewLight(e.target.value)}
                />
                <IconLabelButtons onClick={sendFormToApi} />
              </CustomThemeProvider>
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
              <div className={styles.atributos}>
                <div>
                  <button className={styles.adicionaRemove} onClick={() => addFavorite(linkText)}>
                    Add / Remove
                  </button>
                </div>
                {detalheInvisivel ? (
                  <p></p>
                ) : (
                  <p>
                    <span className={styles.atributo}>Nome: </span> {linkText}{" "}
                    <br />
                    <span className={styles.atributo}>Encantamento: </span>{" "}
                    {incantation} <br />
                    <span className={styles.atributo}>Efeito: </span> {effect}{" "}
                    <br />
                    <span className={styles.atributo}>Tipo: </span> {type}{" "}
                    <br />
                    <span className={styles.atributo}>Luz: </span> {light}{" "}
                    <br />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.monitorContainer}>
        <div className={styles.monitorTexto}>
          {showChat && (
            <div className={styles.chatBox}>
              <div className={styles.studentText}>
                <p>POÇÕES FAVORITAS</p>
                <ul>
                  {favorite.map((fav, index) => (
                    <ul>
                      <a href="#" key={index} onClick={handleContent}>
                        {fav}
                      </a>
                    </ul>
                  ))}
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

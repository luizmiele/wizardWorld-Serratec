import React, { useState, useEffect } from "react";
import BackgroundVideo from "../../components/BackgroundVideo/index.jsx";
import styles from "./styles.module.css";
import videoSrc from "../../assets/videos/SalaPotions.mp4";
import centerImage from "../../assets/images/paginaVelha.png";
import crest from "../../assets/images/casas/hogwarts.png";
import pena from "../../assets/images/icones/pena.png";
import studentImage from "../../assets/images/enzo-diretor-moldura.png";
import { getElixirList } from "../../services/Api.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PotionMusic from "../../components/BackgroundMusic/PotionMusic.jsx"
import CustomThemeProvider from "../../components/CustomThemeProvider/index.jsx";
import IconLabelButtons from "../../components/IconLabelButtons/index.jsx";
import axios from "axios";
import TextField from "@mui/material/TextField";

const Potion = () => {
  const [showChat, setShowChat] = useState(true);
  const [potions, setPotions] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [potionsFiltradas, setPotionsFiltradas] = useState([]);
  const [foundPotion, setFoundPotion] = useState(null);
  const [invisivel, setInvisivel] = useState(true);
  const [detalheInvisivel, setDetalheInvisivel] = useState(true);
  const [linkText, setLinkText] = useState("");
  const [potionName, setPotionName] = useState('');
  const [effect, setEffect] = useState("");
  const [sideEffect, setSideEffect] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState([]);
  const [desconhecidoInvisivel, setDesconhecidoInvisivel] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const labels = [
    "Nome da Poção",
    "Efeito",
    "Efeito colateral",
    "Dificuldade",
    "Ingredientes",
  ];

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

  function mostraDetalhes(nome) {
    const potion = findByName(nome);
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
    mostraDetalhes(e.target.textContent);
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

  function voltaPagina() {
    window.history.back();
  }

  const handleStudentClick = () => {
    setShowChat(!showChat);
  };

  // Função para enviar dados para a API
  const sendFormToApi = async () => {
    console.log("FRED")
    try {
      const formData = {
        nomePotion: potionName,
        efeito: effect,
        efeitoColateral: sideEffect,
        dificuldade: difficulty,
        ingredientes: newIngredients,
      };
      console.log("FORMA DATA: " + formData)
      const url = "https://6632937ac51e14d69564d9af.mockapi.io/test/v1";
      const endpoint = "/form";
      await axios.post(url + endpoint, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Formulário enviado com sucesso:", formData);
      // Resetar o formulário aqui, se necessário
    } catch (error) {
      console.error(error);
    }
  };

  // Função para limpar o formulário
  const clearForm = () => {
    // Limpa os estados que mantêm os dados do formulário
    setLinkText("");
    setEffect("");
    setSideEffect("");
    setDifficulty("");
    setIngredients([]);

    // Outras ações de limpeza, se necessário
    console.log("Formulário limpo.");
  };

  return (
    <div className={styles.principal}>
      <BackgroundVideo src={videoSrc} />
      <PotionMusic />
      <div className={styles.crestContainer}>
        <a href="#" onClick={voltaPagina}>
          <img className={styles.crest} src={crest} alt="Crest" />
        </a>
      </div>

      <div className={styles.criarPocao}>
        <div className={styles.modal}>
          <Button onClick={handleOpen}>
            <img src={pena} alt="criar poção" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={estilo}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Criar Poção
              </Typography>
              <CustomThemeProvider>
                <TextField fullWidth label="Nome da Função" id="fullWidth" onChange={(e) => setPotionName(e.target.value)} />
                <TextField fullWidth label="Efeito" id="fullWidth" onChange={(e) => setEffect(e.target.value)}/>
                <TextField fullWidth label="Efeito Colateral" id="fullWidth" onChange={(e) => setSideEffect(e.target.value)}/>
                <TextField fullWidth label="Dificuldade" id="fullWidth" onChange={(e) => setDifficulty(e.target.value)}/>
                <TextField fullWidth label="Ingredientes" id="fullWidth" onChange={(e) => setNewIngredients(e.target.value)}/>
                <IconLabelButtons onClick={sendFormToApi}/>
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
                <h2>Qual Poção você deseja?</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    className={styles.formulario}
                    type="text"
                    onChange={handleFiltro}
                    placeholder="Procure sua poção..."
                  />
                </form>
                {invisivel ? (
                  <p></p>
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
                    <ul key={index}> {name} </ul>
                  ))}
                </ul>
              ) : !detalheInvisivel ? (
                <p>
                  <ul>Ingredientes desconhecidos</ul>
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

export default Potion;

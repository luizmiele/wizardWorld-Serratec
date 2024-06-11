import React, { useState, useEffect, useContext } from "react";
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
import PotionMusic from "../../components/BackgroundMusic/PotionMusic.jsx";
import IconLabelButtons from "../../components/IconLabelButtons/index.jsx";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { FavoritesContext } from "../../contexts/FavoriteScreen.jsx";


const Potion = () => {
  const [showChat, setShowChat] = useState(true);
  const [potions, setPotions] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [potionsFiltradas, setPotionsFiltradas] = useState([]);
  const [foundPotion, setFoundPotion] = useState(null);
  const [invisivel, setInvisivel] = useState(true);
  const [detalheInvisivel, setDetalheInvisivel] = useState(true);
  const [linkText, setLinkText] = useState("");
  const [potionName, setPotionName] = useState("");
  const [effect, setEffect] = useState("");
  const [sideEffect, setSideEffect] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [newPotionName, setNewPotionName] = useState("");
  const [newEffect, setNewEffect] = useState("");
  const [newSideEffect, setNewSideEffect] = useState("");
  const [newDifficulty, setNewDifficulty] = useState("");
  const [newIngredients, setNewIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [desconhecidoInvisivel, setDesconhecidoInvisivel] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { favorite, addFavorite} = useContext(FavoritesContext);

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

  const sendFormToApi = async () => {
    try {
      const formData = {
        nomePotion: newPotionName,
        efeito: newEffect,
        efeitoColateral: newSideEffect,
        dificuldade: newDifficulty,
        ingredientes: newIngredients,
      };
      const url = "https://6632937ac51e14d69564d9af.mockapi.io/test/v1";
      const endpoint = "/potions";
      await axios.post(url + endpoint, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Formulario enviado com sucesso!")
      console.log("Formulário enviado com sucesso:", formData);
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setLinkText("");
    setEffect("");
    setSideEffect("");
    setDifficulty("");
    setIngredients([]);
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
        <h2>Crie sua poção!</h2>
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
              <TextField
                fullWidth
                label="Nome da Função"
                id="fullWidth"
                onChange={(e) => setNewPotionName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Efeito"
                id="fullWidth"
                onChange={(e) => setNewEffect(e.target.value)}
              />
              <TextField
                fullWidth
                label="Efeito Colateral"
                id="fullWidth"
                onChange={(e) => setNewSideEffect(e.target.value)}
              />
              <TextField
                fullWidth
                label="Dificuldade"
                id="fullWidth"
                onChange={(e) => setNewDifficulty(e.target.value)}
              />
              <TextField
                fullWidth
                label="Ingredientes"
                id="fullWidth"
                onChange={(e) => setNewIngredients(e.target.value)}
              />
              <IconLabelButtons onClick={sendFormToApi} />
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
                <div className={styles.atributos}>
                  <div>
                    <button className={styles.adicionaRemove} onClick={() => addFavorite(linkText)}> 
                      Add / Romove
                    </button>
                  </div>
                  <p>
                    <span className={styles.atributo}>Nome: </span> {linkText}{" "}
                    <br />
                    <span className={styles.atributo}>Efeito: </span> {effect}
                    <br />
                    <span className={styles.atributo}>
                      Efeito colateral:{" "}
                    </span>{" "}
                    {sideEffect}
                    <br />
                    <span className={styles.atributo}>Dificuldade: </span>{" "}
                    {difficulty}
                    <br />
                    <span className={styles.atributo}>Ingredientes: </span>
                  </p>
                </div>
              )}

              {ingredients.length > 0 && !desconhecidoInvisivel ? (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {ingredients.map((name, index) => (
                    <li key={index}> {name} </li>
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
                <p>POÇÕES FAVORITAS</p>
                <ul>
                  {favorite.map((fav, index) => (
                    <ul>
                      <a href="#"key={index} onClick={handleContent}>{fav}</a>
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

export default Potion;

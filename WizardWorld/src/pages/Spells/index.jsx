import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getSpells } from "../../services/Api.js";

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [spellsFiltradas, setSpellsFiltradas] = useState([]);
  const [invisivel, setInvisivel] = useState([true]);
  

  async function getApiData() {
    const results = await getSpells();
    setSpells(results.data);
    setSpellsFiltradas(results.data);
  }

  function handleFiltro(e) {
    setFiltro(e.target.value);
  }

  function pesquisa() {
    //e.preventDefault();
    const filtradas = spells.filter(spell => spell.name.toLowerCase().includes(filtro.toLowerCase()));
    setSpellsFiltradas(filtradas);
  }

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    if(filtro === ""){
      setInvisivel(true);
    } else {
      setInvisivel(false);
      pesquisa();
    }
  }, [filtro])

  return (
    <div className={styles.principal}>
      <h2>Qual feitiço está procurando?</h2>
      <form>
        <input type="text" onChange={handleFiltro}  laceholder="Procure sua poção..." />
        <button type="submit">🔍</button>
      </form>
      {invisivel ? (<p>NADA</p>) : (
        spellsFiltradas.map(spell => (
          <div className={styles.spells} key={spell.id}>
            <p>{spell.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Spells;

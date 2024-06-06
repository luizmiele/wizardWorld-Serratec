import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import potionIcon from "../../assets/images/icone-temporario.png";
import spellIcon from "../../assets/images/icone-temporario.png";
import quidditchIcon from "../../assets/images/icone-temporario.png";
import creditsIcon from "../../assets/images/icone-temporario.png";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <div className={styles.pocoes}><li><Link to="/potion"><img src={potionIcon} alt="Pocões" /></Link></li></div>
        <div className={styles.feiticos}><li><Link to="/spells"><img src={spellIcon} alt="Feitiços" /></Link></li></div>
        <div className={styles.quadribol}><li><Link to="/quidditch"><img src={quidditchIcon} alt="Quadribol" /></Link></li></div>
        <div className={styles.creditos}><li><Link to="/fundadores"><img src={creditsIcon} alt="Fundadores" /></Link></li></div>
      </ul>
    </nav>
  );
};

export default Menu;

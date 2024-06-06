import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import potionIcon from "../assets/images/icone-temporario.jpg";
import spellIcon from "../assets/images/icone-temporario.jpg";
import quidditchIcon from "../assets/images/icone-temporario.jpg";
import creditsIcon from "../assets/images/icone-temporario.jpg";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <div className= {styles.pocoes}><li><img src={potionIcon} alt="Potions" /><Link to="/potions">Poções</Link></li></div>
        <div className= {styles.feiticos}><li><img src={spellIcon} alt="Spells" /><Link to="/spells">Feitiços</Link></li></div>
        <div className= {styles.quadribol}><li><img src={quidditchIcon} alt="Quidditch" /><Link to="/quidditch">Quadribol</Link></li></div>
        <div className= {styles.creditos}><li><img src={creditsIcon} alt="Credits" /><Link to="/credits">Créditos</Link></li></div>
      </ul>
    </nav>
  );
};

export default Menu;

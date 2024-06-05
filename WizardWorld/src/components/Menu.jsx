import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><Link to="/potions">Poções</Link></li>
        <li><Link to="/spells">Feitiços</Link></li>
        <li><Link to="/quidditch">Quadribol</Link></li>
        <li><Link to="/credits">Créditos</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;

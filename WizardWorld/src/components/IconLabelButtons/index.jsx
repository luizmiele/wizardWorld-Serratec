import React from "react";
import axios from "axios";
import styles from "./styles.module.css";

export default function IconLabelButtons({
  onClick
}) {
  return (
    <button className={styles.botao} onClick={onClick}>Enviar</button>
  );
}
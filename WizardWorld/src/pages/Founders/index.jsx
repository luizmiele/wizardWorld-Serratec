// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./styles.module.css";
import videoSrc from "../../assets/videos/jornal.mp4";
import CreditsMusic from '../../components/BackgroundMusic/CreditsMusic.jsx';
import porta from "../../assets/images/icones/saida-icone.png";

const DailyProphet = () => {
  function voltaPagina() {
    window.history.back();
  }

  return (
    <div className={styles.principal}>
      <CreditsMusic />
      <div className={styles.exitImageBackground}>
                <div className={styles.exitImageIcon}>
                    <a href="#" onClick={voltaPagina}>
                     <img className={styles.porta} src={porta} alt="porta" />
                    </a>
                </div>
            </div>
      <div className={styles.jornal}>
        <video src={videoSrc} autoPlay muted/>
      </div>
    </div>
  );
};

export default DailyProphet;

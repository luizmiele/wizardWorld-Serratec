import React from "react";
import styles from "./styles.module.css";
import videoSrc from "../../assets/videos/jornal.mp4";
import CreditsMusic from '../../components/BackgroundMusic/CreditsMusic.jsx';

const DailyProphet = () => {
  return (
    <div className={styles.principal}>
      <CreditsMusic />
      <div className={styles.jornal}>
        <video src={videoSrc} autoPlay muted/>
      </div>
    </div>
  );
};

export default DailyProphet;

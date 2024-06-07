import React from 'react';
import styles from './styles.module.css';
import videoSrc from '../../assets/videos/jornal.mp4'
import gh from '../../assets/images/gh.png'
import lin from '../../assets/images/in.png'
const DailyProphet = () => {
  return (
    <div className={styles.principal}>
      <div className={styles.jornal}>
        <video src={videoSrc} autoPlay muted />
        <div className={styles.iconesMiele}>
          <img src={gh} className={styles.icone} />
          <img src={lin} className={styles.icone} />
        </div>
        <div className={styles.iconesBoeck}>
          <img src={gh} className={styles.icone} />
          <img src={lin} className={styles.icone} />
        </div>
        <div className={styles.iconesVictor}>
          <img src={gh} className={styles.icone} />
          <img src={lin} className={styles.icone} />
        </div>
        <div className={styles.iconesCassio}>
          <img src={gh} className={styles.icone} />
          <img src={lin} className={styles.icone} />
        </div>
        <div className={styles.iconesEnzo}>
          <img src={gh} className={styles.icone} />
          <img src={lin} className={styles.icone} />
        </div>
        
      </div>
    </div>
  )
};

export default DailyProphet;

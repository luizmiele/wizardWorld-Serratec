import React from 'react';
import styles from './styles.module.css'
import mapa from '../../assets/images/mapa.png'
import ErrorMusic from '../../components/BackgroundMusic/ErrorMusic.jsx';

const ErrorPage = () => {
  return (
    <div className={styles.principal}>
      <ErrorMusic />
        <div className={styles.t1}>
            <h2>Parece que você está perdido!</h2>
            <h2>Essa pagina não existe!</h2>
        </div>

        <div className={styles.t2}>
            <h2>Toma esse mapa ai!</h2>
        </div>
        <div className={styles.mapa}>
             <img src={mapa}></img>
        </div>
    </div>
  );
};

export default ErrorPage;
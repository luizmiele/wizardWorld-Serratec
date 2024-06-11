import React from 'react';
import styles from './backgroundLoginVideo.module.css';

const LoginVideo = ({ src }) => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src={src} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
    </div>
  );
};

export default LoginVideo;

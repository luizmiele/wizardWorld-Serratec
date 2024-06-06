import React from 'react';
import styles from './styles.module.css';

const BackgroundVideo = ({ src }) => {
  return (
    <div className={styles.backgroundVideo}>
      <video autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;

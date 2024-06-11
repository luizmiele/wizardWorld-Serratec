// src/components/BackgroundMusic/LoginMusic.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Music.module.css';

const CreditsMusic = () => {
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);

   const handleVolumeChange = (e) => {
      const newVolume = e.target.value;
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    };

    useEffect(() => {
        audioRef.current.play();
    }, []);

    return (
      <div className={styles.musicControl}>
        <audio ref={audioRef} loop autoPlay>
          <source src="/src/assets/audio/recorder.mp3" type="audio/mpeg" />
          Seu navegador não suporta este arquivo de áudio.
        </audio>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
  );
};

export default CreditsMusic;
// src/components/BackgroundMusic/LoginMusic.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Music.module.css';

const ErrorMusic = () => {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

 const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
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
      <button className={styles.musicButton} onClick={togglePlayPause}>
        {isPlaying ? 'Pausar Música' : 'Tocar Música'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
)};

export default ErrorMusic;
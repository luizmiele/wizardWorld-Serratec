/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import BackgroundVideo from '../BackgroundVideo/index.jsx';
import Menu from '../Menu/index.jsx';
import styles from './styles.module.css';
import centerImage from '../../assets/images/livro.png';

const HousePage = ({ videoSrc, studentImage, studentText, crest }) => {
  const [showChat, setShowChat] = useState(true);

  const handleStudentClick = () => {
    setShowChat(!showChat);
  };

  return (
    <div className={styles.housePage}>
      <BackgroundVideo src={videoSrc} />
      <div className={styles.centerImageContainer}>
        <img className={styles.centerImage} src={centerImage} alt="Livro"/>
      </div>
      <div className={styles.studentImageContainer}>
        <img className={styles.studentImage} src={studentImage} alt="Student" onClick={handleStudentClick} />
        {showChat && (
          <div className={styles.chatBox}>
            <div className={styles.studentText}>
              {studentText}
            </div>
          </div>
        )}
      </div>
      <div className={styles.crestContainer}>
        <img className={styles.crest} src={crest} alt="Crest" />
      </div>
      <Menu />
    </div>
  );
};

export default HousePage;

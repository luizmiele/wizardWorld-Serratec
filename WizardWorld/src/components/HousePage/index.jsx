/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import BackgroundVideo from '../BackgroundVideo/index.jsx';
import Menu from '../Menu/index.jsx';
import styles from './styles.module.css';
import centerImage from '../../assets/images/livro.png';

const HousePage = ({ videoSrc, studentImage, studentText, crest }) => {
  return (
    <div className={styles.housePage}>
      <BackgroundVideo src={videoSrc} />
      <div className={styles.centerImageContainer}>
        <img src= {centerImage} alt="Livro" className={styles.centerImage} />
      </div>
      <div className={styles.studentInfo}>
        <p className={styles.studentText}>
          {studentText}
        </p>
        <div className={styles.studentImageContainer}>
          <img className={styles.studentImage} src={studentImage} alt="Student" />
        </div>
      </div>
      <div className={styles.crestContainer}>
          <img className={styles.crest} src={crest} alt="Crest" />
      </div>
      <Menu />
    </div>
  );
};

export default HousePage;

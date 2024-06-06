/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Menu from './Menu';
import styles from './HousePage.module.css';
import centerImage from '../assets/images/livro.png';

const HousePage = ({ videoSrc, studentImage, studentText }) => {
  return (
    <div className={styles.housePage}>
      <BackgroundVideo src={videoSrc} />
      <div className={styles.centerImageContainer}>
        <img src= {centerImage} alt="Livro" className={styles.centerImage} />
      </div>
      <div className={styles.studentInfo}>
        <img src={studentImage} alt="Student" />
        <p className={styles.studentText}>{studentText}</p>
      </div>
      <Menu />
    </div>
  );
};

export default HousePage;

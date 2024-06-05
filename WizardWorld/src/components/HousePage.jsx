import React from 'react';
import BackgroundVideo from './BackgroundVideo.jsx';
import Menu from './Menu';
import styles from './HousePage.module.css';

const HousePage = ({ videoSrc, studentImage, studentText }) => {
  return (
    <div className={styles.housePage}>
      <BackgroundVideo src={videoSrc} />
      <div className={styles.studentInfo}>
        <img src={studentImage} alt="Student" />
        <p>{studentText}</p>
      </div>
      <Menu />
    </div>
  );
};

export default HousePage;

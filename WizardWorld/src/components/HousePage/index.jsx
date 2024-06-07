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
 /*   <div className={styles.housePage}>
      <BackgroundVideo src={videoSrc} />
      <div className={styles.contentContainer}>
        <div className={styles.centerImageContainer}>
          <img className={styles.centerImage} src={centerImage} alt="Livro"/>
        </div>
        <div className={styles.menuContainer}>
          <Menu />
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
      </div>
      <div className={styles.crestContainer}>
        <img className={styles.crest} src={crest} alt="Crest" />
      </div>
    </div>*/
    <div className={styles.principal}>
      <BackgroundVideo src={videoSrc}/>
      <div className={styles.crestContainer}>
        <img className={styles.crest} src={crest} alt="Crest" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.livroContainer}>
          <div className={styles.livro} style={{ backgroundImage: `url(${centerImage})` }} alt="Livro">
            <div className={styles.menuItems}>
              <div className={styles.paginaEsquerda}>
                <div className={styles.pocaoContainer}>
                  <div className={styles.pocaoIcone}>
                   
                  </div>
                    <h1>Poções</h1>
                </div>
                <div className={styles.feiticoContainer}>
                  <div className={styles.feiticoIcone}>
                   
                  </div>
                  <h1>Feitiços</h1>
                  </div>
              </div>
              <div className={styles.paginaDireita}>
                <div className={styles.quadribolContainer}>
                  <div className={styles.quadribolIcone}>
                    
                  </div>
                  <h1>Quadribol</h1>
                </div>
                <div className={styles.creditosContainer}>
                  <div className={styles.creditosIcone}>
                    
                  </div>
                  <h1>Créditos</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.monitorContainer}>
          <div className={styles.monitorTexto}>
          {showChat && (
            <div className={styles.chatBox}>
              <div className={styles.studentText}>
                {studentText}
              </div>
            </div>
          )}
          </div>
          <div className={styles.monitorImagem}>
            <img className={styles.studentImage} src={studentImage} alt="Student" onClick={handleStudentClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousePage;

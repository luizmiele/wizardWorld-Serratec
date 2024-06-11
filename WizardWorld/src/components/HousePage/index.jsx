/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import BackgroundVideo from '../BackgroundVideo/index.jsx';
import HousePageMusic from '../../components/BackgroundMusic/HousePageMusic.jsx';
import styles from './styles.module.css';
import centerImage from '../../assets/images/livro.png';
import { Link } from 'react-router-dom';

const HousePage = ({ videoSrc, studentImage, studentText, crest }) => {
  const [showChat, setShowChat] = useState(true);

  const handleStudentClick = () => {
    setShowChat(!showChat);
  };

  return (
    <div className={styles.principal}>
      <BackgroundVideo src={videoSrc}/>
      <HousePageMusic />
      <div className={styles.crestContainer}>
        <img className={styles.crest} src={crest} alt="Crest" />
        <div className={styles.exitImageBackground}>
          <div className={styles.exitImageIcon}>
            <Link to="/"><img src="./src/assets/images/icones/saida-icone.png" alt="icone-saida" className={styles.exitImage} /></Link>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.livroContainer}>
          <div className={styles.livro} style={{ backgroundImage: `url(${centerImage})` }} alt="Livro">
            <div className={styles.menuItems}>
              <div className={styles.paginaEsquerda}>
                <div className={styles.textoCentralEsquerda}>Você parece indeciso.</div>
                <div className={styles.pocaoContainer}>
                  <div className={styles.pocaoIcone}>
                    <div className={styles.pocaoIconeImagem}>
                      <un><Link to="/potion"><p><img src="./src/assets/images/icones/pocao.png" alt="pocoes" /></p></Link></un>
                    </div>
                  </div>
                  <h1 className={styles.linkTexto}>Poções</h1>
                </div>
                <div className={styles.feiticoContainer}>
                  <div className={styles.feiticoIcone}>
                    <div className={styles.feiticoIconeImagem}>
                      <un><Link to="/spell"><p><img src="./src/assets/images/icones/varinha.png" alt="feiticos" /></p></Link></un>
                    </div>
                  </div>
                  <h1 className={styles.linkTexto}>Feitiços</h1>
                  </div>
              </div>
              <div className={styles.paginaDireita}>
                <div className={styles.textoCentralDireita}>Escolha uma opção.</div>
                <div className={styles.quadribolContainer}>
                  <div className={styles.quadribolIcone}>
                    <div className={styles.quadribolIconeImagem}>
                      <un><Link to="/shop"><p><img src="./src/assets/images/icones/vassoura.png" alt="shop" /></p></Link></un>
                    </div>
                  </div>
                  <h1 className={styles.linkTexto}>Loja</h1>
                </div>
                <div className={styles.creditosContainer}>
                  <div className={styles.creditosIcone}>
                    <div className={styles.creditosIconeImagem}>
                      <un><Link to="/founders"><p><img src="./src/assets/images/icon-hogwarts-escudo.png" alt="fundadores" /></p></Link></un>
                    </div>
                  </div>
                  <h1 className={styles.linkTexto}>Créditos</h1>
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
                <p>
                  {studentText}
                </p>
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
import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import hufflepuffVideo from '../../assets/videos/lufalufa.mp4';
import hufflepuffStudent from '../../assets/images/boeck-lufalufa-moldura.png';
import houseCrest from '../../assets/images/casas/hufflepuff.png';

const Hufflepuff = () => {
  return (
    <HousePage
      videoSrc={hufflepuffVideo}
      studentImage={hufflepuffStudent}
      studentText="Bem-vindo(a) querido aluno da Lufa-lufa! O que iremos aprender hoje?"
      crest={houseCrest}
    />
  );
};

export default Hufflepuff;

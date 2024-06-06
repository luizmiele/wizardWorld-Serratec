import React from 'react';
import HousePage from '../components/HousePage';
import hufflepuffVideo from '../assets/videos/Lufalufa2.mp4';
import hufflepuffStudent from '../assets/images/boeck-lufalufa-moldura.png';

const Hufflepuff = () => {
  return (
    <HousePage
      videoSrc={hufflepuffVideo}
      studentImage={hufflepuffStudent}
      studentText="Bem-vindo(a) querido aluno da Lufa-lufa! O que iremos aprender hoje?"
    />
  );
};

export default Hufflepuff;

import React from 'react';
import HousePage from '../components/HousePage';
import slytherinVideo from '../assets/videos/Sonserina2.mp4';
import slytherinStudent from '../assets/images/miele-sonserina-moldura.png';

const Slytherin = () => {
  return (
    <HousePage
      videoSrc={slytherinVideo}
      studentImage={slytherinStudent}
      studentText="Bem-vindo(a) querido aluno da Sonserina! O que iremos aprender hoje?!"
    />
  );
};

export default Slytherin;

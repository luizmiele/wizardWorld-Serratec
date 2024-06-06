import React from 'react';
import HousePage from '../components/HousePage';
import ravenclawVideo from '../assets/videos/Corvinal2.mp4';
import ravenclawStudent from '../assets/images/victor-corvinal-moldura.png';

const Ravenclaw = () => {
  return (
    <HousePage
      videoSrc={ravenclawVideo}
      studentImage={ravenclawStudent}
      studentText="Bem-vindo(a) querido aluno da Corvinal! O que iremos aprender hoje?!"
    />
  );
};

export default Ravenclaw;

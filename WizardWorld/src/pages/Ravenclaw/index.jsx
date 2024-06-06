import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import ravenclawVideo from '../../assets/videos/corvinal.mp4';
import ravenclawStudent from '../../assets/images/victor-corvinal-moldura.png';

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

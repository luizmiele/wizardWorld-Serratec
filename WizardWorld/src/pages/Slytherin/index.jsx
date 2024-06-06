import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import slytherinVideo from '../../assets/videos/sonserina.mp4';
import slytherinStudent from '../../assets/images/miele-sonserina-moldura.png';

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

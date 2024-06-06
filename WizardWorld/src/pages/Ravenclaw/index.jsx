import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import ravenclawVideo from '../../assets/videos/corvinal.mp4';
import ravenclawStudent from '../../assets/images/victor-corvinal-moldura.png';
import houseCrest from '../../assets/images/casas/ravenclaw.png';

const Ravenclaw = () => {
  return (
    <HousePage
      videoSrc={ravenclawVideo}
      studentImage={ravenclawStudent}
      studentText="Bem-vindo(a) querido aluno da Corvinal! O que iremos aprender hoje?!"
      crest={houseCrest}
    />
  );
};

export default Ravenclaw;

import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import ravenclawVideo from '../../assets/videos/corvinal.mp4';
import ravenclawStudent from '../../assets/images/victor-corvinal-moldura.png';
import houseCrest from '../../assets/images/casas/ravenclaw.png';

const Ravenclaw = () => {
  const studentText = (
    <>
      <p>
        Bem-vindo(a) querido aluno da Corvinal!
      <br />
      O que iremos aprender hoje?!
      </p>
    </>
  );

  return (
    <HousePage
      videoSrc={ravenclawVideo}
      studentImage={ravenclawStudent}
      studentText={studentText}
      crest={houseCrest}
    />
  );
};

export default Ravenclaw;

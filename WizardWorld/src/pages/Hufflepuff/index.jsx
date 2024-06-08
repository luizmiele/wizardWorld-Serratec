import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import hufflepuffVideo from '../../assets/videos/lufalufa.mp4';
import hufflepuffStudent from '../../assets/images/boeck-lufalufa-moldura.png';
import houseCrest from '../../assets/images/casas/hufflepuff.png';

const Hufflepuff = () => {
  const studentText = (
    <>
      <p>
      Bem-vindo(a) querido aluno da Lufa-lufa!
      <br />
      O que iremos aprender hoje?!
      </p>
    </>
  );

  return (
    <HousePage
      videoSrc={hufflepuffVideo}
      studentImage={hufflepuffStudent}
      studentText={studentText}
      crest={houseCrest}
    />
  );
};

export default Hufflepuff;

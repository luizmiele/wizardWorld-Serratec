import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import hufflepuffVideo from '../../assets/videos/lufalufa.mp4';
import hufflepuffStudent from '../../assets/images/boeck-lufalufa-moldura.png';
import houseCrest from '../../assets/images/casas/hufflepuff.png';

const Hufflepuff = () => {
  const studentText = (
    <>
      <p style={{color : 'yellow'}}>
      {`                                                                             Bem-vindo aluno da Lufa-lufa!
        O que iremos aprender hoje?`.split('').map((letter, index) => (
          <span key={index} style={{ '--index': index }}>{letter}</span>
        ))}
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

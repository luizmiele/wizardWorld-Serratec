import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import slytherinVideo from '../../assets/videos/sonserina.mp4';
import slytherinStudent from '../../assets/images/miele-sonserina-moldura.png';
import houseCrest from '../../assets/images/casas/slytherin.png';

const Slytherin = () => {
  const studentText = (
    <>
      <p style={{color : 'green'}}>
      {`                                                                             Bem-vindo aluno da Sonserinal!
        O que iremos aprender hoje?`.split('').map((letter, index) => (
          <span key={index} style={{ '--index': index }}>{letter}</span>
        ))}
      </p>
    </>
  );

  return (
    <HousePage
      videoSrc={slytherinVideo}
      studentImage={slytherinStudent}
      studentText={studentText}
      crest={houseCrest}
    />
  );
};

export default Slytherin;

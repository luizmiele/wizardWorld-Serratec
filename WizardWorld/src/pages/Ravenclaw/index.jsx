import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import ravenclawVideo from '../../assets/videos/corvinal.mp4';
import ravenclawStudent from '../../assets/images/victor-corvinal-moldura.png';
import houseCrest from '../../assets/images/casas/ravenclaw.png';

const Ravenclaw = () => {
  const studentText = (
    <>
      <p style={{ color: 'rgb(65, 105, 225)' }}>
        {`                                                                             Bem-vindo aluno da Corvinal!
        O que iremos aprender hoje?`.split('').map((letter, index) => (
          <span key={index} style={{ '--index': index }}>{letter}</span>
        ))}
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

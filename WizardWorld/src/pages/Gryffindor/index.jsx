/* eslint-disable no-unused-vars */
import React from 'react';
import HousePage from '../../components/HousePage/index.jsx';
import gryffindorVideo from '../../assets/videos/grifinoria.mp4';
import gryffindorStudent from '../../assets/images/cassio-grifinoria-moldura.png';
import houseCrest from '../../assets/images/casas/gryffindor.png';

const Gryffindor = () => {
  const studentText = (
    <>
      <p style={{color : 'red'}}>
      {`                                                                             Bem-vindo aluno da Grifinória!
        O que iremos aprender hoje?`.split('').map((letter, index) => (
          <span key={index} style={{ '--index': index }}>{letter}</span>
        ))}
      </p>
    </>
  );

  return (
    <HousePage
      videoSrc={gryffindorVideo}
      studentImage={gryffindorStudent}
      studentText={studentText}
      crest={houseCrest}
    />
  );
};

export default Gryffindor;

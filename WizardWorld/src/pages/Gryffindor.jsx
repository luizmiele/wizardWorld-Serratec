/* eslint-disable no-unused-vars */
import React from 'react';
import HousePage from '../components/HousePage';
import gryffindorVideo from '../assets/videos/Grifinória2.mp4';
import gryffindorStudent from '../assets/images/cassio-grifinoria-moldura.png';

const Gryffindor = () => {
  return (
    <HousePage
      videoSrc={gryffindorVideo}
      studentImage={gryffindorStudent}
      studentText="Bem-vindo(a) querido aluno da Grifinória! O que iremos aprender hoje?"
    />
  );
};

export default Gryffindor;

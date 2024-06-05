import React from 'react';
import HousePage from '../components/HousePage';
import gryffindorVideo from '../assets/videos/Grifinória2.mp4';
import gryffindorStudent from '../assets/images/cassio-grifinoria.png';

const Gryffindor = () => {
  return (
    <HousePage
      videoSrc={gryffindorVideo}
      studentImage={gryffindorStudent}
      studentText="Olá, sou da Grifinória!"
    />
  );
};

export default Gryffindor;

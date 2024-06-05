import React from 'react';
import HousePage from '../components/HousePage';
import hufflepuffVideo from '../assets/videos/Lufalufa2.mp4';
import hufflepuffStudent from '../assets/images/boeck-lufalufa.png';

const Hufflepuff = () => {
  return (
    <HousePage
      videoSrc={hufflepuffVideo}
      studentImage={hufflepuffStudent}
      studentText="Olá, sou da Lufa-lufa!"
    />
  );
};

export default Hufflepuff;

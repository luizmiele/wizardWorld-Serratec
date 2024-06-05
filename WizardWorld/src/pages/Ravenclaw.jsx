import React from 'react';
import HousePage from '../components/HousePage';
import ravenclawVideo from '../assets/videos/Corvinal2.mp4';
import ravenclawStudent from '../assets/images/victor-corvinal.png';

const Ravenclaw = () => {
  return (
    <HousePage
      videoSrc={ravenclawVideo}
      studentImage={ravenclawStudent}
      studentText="Olá, sou da Corvinal!"
    />
  );
};

export default Ravenclaw;

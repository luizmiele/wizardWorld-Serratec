import React from 'react';
import HousePage from '../components/HousePage';
import slytherinVideo from '../assets/videos/Sonserina2.mp4';
import slytherinStudent from '../assets/images/miele-sonserina.png';

const Slytherin = () => {
  return (
    <HousePage
      videoSrc={slytherinVideo}
      studentImage={slytherinStudent}
      studentText="Olá, sou da Sonserina!"
    />
  );
};

export default Slytherin;

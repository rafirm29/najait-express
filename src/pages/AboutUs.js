import React from 'react';
import HeaderContent from '../components/aboutus/sections/HeaderContent';
import OurServices from '../components/aboutus/sections/OurServices';
import Faq from '../components/aboutus/sections/Faq';
import Testimonials from '../components/aboutus/sections/Testimonials';
import Copyright from '../components/Copyright';

const AboutUs = () => {
  return (
    <>
      <HeaderContent />
      <OurServices />
      <Faq />
      <Testimonials />
      <Copyright />
    </>
  );
};

export default AboutUs;

import React from 'react';
import IntroSection from '../components/home/IntroSection';
import HeroSection from '../components/home/HeroSection';
import Services from '../components/home/Services';
import Gallery from '../components/home/Gallery';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ScrollingWords from '../components/home/ScrollingWords';

const Home: React.FC = () => (
  <main>
    <HeroSection />
    <Services />
    <IntroSection />
    <WhyChooseUs />
    <ScrollingWords />
    <Gallery />
    
  </main>
);

export default Home;
import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import QuickLinks from '../components/QuickLinks/QuickLinks';
import DepositSection from '../components/DepositSection/DepositSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import NewsSection from '../components/NewsSection/NewsSection';
import ChairmanMessage from '../components/ChairmanMessage/ChairmanMessage';
import AwardsSection from '../components/AwardsSection/AwardsSection';
import StatsSection from '../components/StatsSection/StatsSection';
import FadeContent from '../components/FadeContent/FadeContent';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FadeContent blur={true} duration={0.8} threshold={0.2}>
        <QuickLinks />
      </FadeContent>
      <FadeContent blur={true} duration={0.8} threshold={0.2} delay={0.1}>
        <DepositSection />
      </FadeContent>
      <FadeContent blur={true} duration={0.8} threshold={0.2} delay={0.1}>
        <ServicesSection />
      </FadeContent>
      <FadeContent blur={true} duration={0.8} threshold={0.2} delay={0.1}>
        <NewsSection />
      </FadeContent>
      <FadeContent blur={true} duration={0.8} threshold={0.2} delay={0.1}>
        <ChairmanMessage />
      </FadeContent>
      <FadeContent blur={true} duration={0.8} threshold={0.2} delay={0.1}>
        <AwardsSection />
      </FadeContent>
      <FadeContent blur={false} duration={1} threshold={0.3}>
        <StatsSection />
      </FadeContent>
    </>
  );
};

export default Home;

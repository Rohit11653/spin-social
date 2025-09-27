import React from "react";
import Banner from '../components/Banner'
import DailySpinRewards from '../components/DailySpinRewards';
import TrustSection from '../components/TrustSection';
import BonusSpins from '../components/BonusSpins';
import EndlessFun from '../components/EndlessFun';
import SpinSocial from '../components/SpinSocial';
import HaveQuestions from '../components/HaveQuestions';

function Home() {
  return (
    <>
        <Banner />
        <DailySpinRewards />
        <TrustSection />
        <BonusSpins />
        <EndlessFun />
        <SpinSocial />
        <HaveQuestions />
    </>
  );
}

export default Home;

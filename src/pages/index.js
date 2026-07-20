import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import FeaturedProjects from '../components/FeaturedProjects';
import SupportMidilabSection from '../components/SupportMidilabSection';
import CommunitySection from '../components/CommunitySection';

export default function Home() {
  return (
    <Layout
      title="DIY Electronic Music Instruments"
      description="Open hardware, open firmware, and open source plugins for electronic musicians. Explore JC-303, Aciduino, and µClock — community-driven, MIT licensed, built by makers."
    >
      <main>
        <HeroSection />
        <PhilosophySection />
        <FeaturedProjects />
        <SupportMidilabSection />
        <CommunitySection />
      </main>
    </Layout>
  );
}

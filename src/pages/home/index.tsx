import clsx from 'clsx';

import {
  AboutSection,
  HeroSection,
  ReasonsSection,
  TicketsSection,
  VideoSection,
} from './components';

const LandingPage = () => {
  return (
    <main className={clsx('relative min-h-screen bg-[#f6f8fd] text-[#0c1420]')}>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <ReasonsSection />
      <TicketsSection />
    </main>
  );
};

export default LandingPage;

import clsx from 'clsx';

import {
  AboutSection,
  GallerySection,
  HeroSection,
  ProgramSection,
  ReasonsSection,
  StarsSection,
  TicketsSection,
  VideoSection,
} from './components';

const LandingPage = () => {
  return (
    <main
      className={clsx(
        'min-h-screen bg-[#f6f8fd] pb-20 text-[#0c1420]',
        'sm:pb-24',
        'lg:pb-28'
      )}
    >
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <StarsSection />
      <ReasonsSection />
      <ProgramSection />
      <GallerySection />
      <TicketsSection />
    </main>
  );
};

export default LandingPage;

import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';
import { AboutExpertusProjectsSection } from './components/AboutExpertusProjectsSection';
import { AboutHistorySection } from './components/AboutHistorySection';
import { AboutInternationalCooperationSection } from './components/AboutInternationalCooperationSection';
import { AboutLicensesSection } from './components/AboutLicensesSection';
import { AboutMissionValuesSection } from './components/AboutMissionValuesSection';

export default function AboutPage() {
  return (
    <main className="py-24 text-white">
      <div className={PAGE_CONTAINER_CLASS}>
        <AboutHistorySection />
        <AboutMissionValuesSection />
        <AboutInternationalCooperationSection />
        {/* <AboutLicensesSection /> */}
        {/* <AboutExpertusProjectsSection /> */}
      </div>
    </main>
  );
}

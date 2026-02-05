import { PAGE_CONTAINER_CLASS } from '@/shared/layout/constants';

import { ForAuthorsExpertusPolicySection } from './components/ForAuthorsExpertusPolicySection';

export default function ForAuthorsPage() {
  return (
    <main className="py-24 text-white">
      <div className={PAGE_CONTAINER_CLASS}>
        <h1 className="sr-only">Для авторов</h1>
        <ForAuthorsExpertusPolicySection />
      </div>
    </main>
  );
}

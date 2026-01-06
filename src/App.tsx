import HomePage from '@/pages/home';

import { Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/about';
import EquipmentPage from './pages/equipment';
import ExpertisePage from './pages/expertise';
import TeamPage from './pages/team';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

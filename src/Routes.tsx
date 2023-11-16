import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignInPage from './SignInPage';
// import DesktopSix from './DesktopSix'; // Import your DesktopSix component
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import DesktopSix from 'pages/DesktopSix';
import SignInPage from 'pages/login';
import DesktopSeven from 'pages/DesktopSeven';
import DesktopEleven from 'pages/DesktopEleven';
import DesktopFifteen from 'pages/DesktopFifteen';
import Dashboard1 from 'pages/Dashboard1/page';
// import Dashboard1 from 'pages/Dashboard1';

// const DesktopFifteen = React.lazy(() => import('pages/DesktopFifteen'));
// const DesktopSeven = React.lazy(() => import('pages/DesktopSeven'));
// const DesktopEleven = React.lazy(() => import('pages/DesktopEleven'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/Dashboard1" element={<Dashboard1 />} />
        <Route path="/DesktopSix" element={<DesktopSix />} />
        <Route path="/desktopseven" element={<DesktopSeven />} />
        <Route path="/desktopeleven" element={<DesktopEleven />} />
        <Route path="/desktopfifteen" element={<DesktopFifteen />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

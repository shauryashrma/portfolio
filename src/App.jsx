import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import ContactPage from './pages/ContactPage';
import ProjectDetail from './pages/ProjectDetail';

import CheckeredTransition from './components/CheckeredTransition';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CheckeredTransition />
      {/* Outer framing with 3D canvas aesthetic matching Figma presentation */}

      <div className="min-h-screen bg-[#FFF4F6] md:py-8 md:px-6 flex flex-col justify-between overflow-x-clip">
        {/* Main 3D Container with Cyan #00A8CC extrusion */}
        <div className="portfolio-frame w-full max-w-4xl mx-auto bg-white flex flex-col min-h-screen md:min-h-[92vh] md:shadow-[16px_16px_0px_0px_#00A8CC] md:rounded-sm">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

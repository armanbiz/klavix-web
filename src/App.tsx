import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import ProcessSection from './components/process/ProcessSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/Footer';
import MouseGlow from './components/effects/MouseGlow';
import NewsletterPage from './pages/NewsletterPage';
import UnsubscribePage from './pages/UnsubscribePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/unsubscribe" element={<UnsubscribePage />} />
        <Route path="/" element={
          <div className="bg-black text-white min-h-screen relative overflow-hidden">
            <MouseGlow />
            <Header />
            <main>
              <HeroSection />
              <FeaturesSection />
              <ProcessSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import ProcessSection from './components/process/ProcessSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/Footer';
import MouseGlow from './components/effects/MouseGlow';

function App() {
  return (
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
  );
}

export default App;
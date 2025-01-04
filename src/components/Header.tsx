import React, { useState } from 'react';
import NavLinks from './navigation/NavLinks';
import MobileMenuButton from './navigation/MobileMenuButton';
import Logo from './navigation/Logo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-sm bg-black/50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        
        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
          fixed top-[72px] right-0 bottom-0 w-64 bg-black/95 backdrop-blur-lg
          transform transition-transform duration-300 ease-in-out md:hidden
          border-l border-white/10 p-6`}>
          <NavLinks isMobile={true} onItemClick={() => setIsMobileMenuOpen(false)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
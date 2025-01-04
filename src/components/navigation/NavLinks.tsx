import React from 'react';
import { scrollToElement } from '../../utils/scroll';
import { useNewsletterPopup } from '../../hooks/useNewsletterPopup';
import NewsletterPopup from '../newsletter/NewsletterPopup';

interface NavLinksProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const NavLinks = ({ isMobile, onItemClick }: NavLinksProps) => {
  const { isOpen, openPopup, closePopup } = useNewsletterPopup();

  const handleGetStarted = () => {
    scrollToElement('solutions');
    onItemClick?.();
  };

  const handleSubscribe = () => {
    openPopup();
    onItemClick?.();
  };

  return (
    <>
      <div className={`${isMobile ? 'flex flex-col space-y-6' : 'flex items-center space-x-6'}`}>
        <button onClick={handleSubscribe} className="nav-link">[ SUBSCRIBE ]</button>
        <button 
          onClick={handleGetStarted} 
          className={`nav-button ${isMobile ? 'w-full justify-center' : ''}`}
        >
          GET STARTED
        </button>
      </div>
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </>
  );
};

export default NavLinks;
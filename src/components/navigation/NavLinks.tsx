import React from 'react';
import { scrollToElement } from '../../utils/scroll';
import { useNavigate } from 'react-router-dom';

interface NavLinksProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const NavLinks = ({ isMobile, onItemClick }: NavLinksProps) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    scrollToElement('solutions');
    onItemClick?.();
  };

  const handleSubscribe = () => {
    navigate('/newsletter');
    onItemClick?.();
  };

  return (
    <div className={`${isMobile ? 'flex flex-col space-y-6' : 'flex items-center space-x-6'}`}>
      <button onClick={handleSubscribe} className="nav-link">[ SUBSCRIBE ]</button>
      <button 
        onClick={handleGetStarted} 
        className={`nav-button ${isMobile ? 'w-full justify-center' : ''}`}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default NavLinks;
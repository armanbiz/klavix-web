import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} All rights reserved. Klavix AI
      </div>
    </footer>
  );
};

export default Footer;
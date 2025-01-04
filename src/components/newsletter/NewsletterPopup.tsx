import React, { useRef, useEffect } from 'react';
import NewsletterForm from './NewsletterForm';
import { X } from 'lucide-react';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={popupRef}
        className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-white/10 relative animate-scale-in"
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h3 className="tech-heading text-2xl mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-400 mb-6">
          Get weekly insights on AI automation and industry trends.
        </p>
        
        <NewsletterForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default NewsletterPopup;
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CalendlyButtonProps {
  meetingUrl: string;
  children: React.ReactNode;
  className?: string;
}

const CalendlyButton = ({ meetingUrl, children, className = '' }: CalendlyButtonProps) => {
  const handleClick = () => {
    window.open(meetingUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`group flex items-center justify-center gap-2 ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}

export default CalendlyButton;
import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ProcessStepProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ icon: Icon, number, title, description }: ProcessStepProps) => {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div 
      ref={cardRef}
      className={`p-6 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-1000 hover:transform hover:scale-105 hover:bg-blue-900/10 group transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="flex flex-col items-center mb-6">
        <div className="animate-float">
          <Icon className="h-12 w-12 text-blue-500 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-blue-400 font-mono text-sm mt-4">STEP {number}</span>
      </div>
      <h3 className="tech-heading text-xl mb-4 text-center">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

export default ProcessStep;
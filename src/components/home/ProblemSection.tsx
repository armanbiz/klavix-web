import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const problems = [
  "Slow customer response times",
  "Missed leads and opportunities",
  "Inefficient manual scheduling",
  "Overwhelming support queries"
];

const ProblemSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-scroll>
            <h2 className="tech-heading text-3xl md:text-4xl">
              Struggling with Manual Tasks and Missed Opportunities?
            </h2>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-400">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6" data-scroll>
            <h3 className="tech-heading text-2xl text-blue-400">The Solution</h3>
            <p className="text-lg text-gray-300">
              Our AI-powered tools take care of repetitive tasks so you can focus on growing your business.
            </p>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <span className="text-green-400">90% reduction in manual tasks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
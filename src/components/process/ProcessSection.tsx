import React from 'react';
import ProcessStep from './ProcessStep';
import { PhoneCall, Lightbulb, Rocket } from 'lucide-react';
import { MEETING_TYPES } from '../../config/calendly';
import CalendlyButton from '../common/CalendlyButton';

const ProcessSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="tech-heading text-3xl md:text-4xl mb-6 animate-fade-in">
          Our Implementation Process
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Experience a streamlined onboarding process designed to get you started quickly and efficiently.
        </p>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          <ProcessStep 
            icon={PhoneCall}
            number="01"
            title="Discovery Call"
            description="We'll discuss your current operations, pain points, and objectives to identify the perfect AI solutions for your needs."
          />
          <ProcessStep 
            icon={Lightbulb}
            number="02"
            title="Custom Strategy"
            description="Our team develops a tailored implementation plan, including timeline, deliverables, and expected ROI projections."
          />
          <ProcessStep 
            icon={Rocket}
            number="03"
            title="Implementation"
            description="Seamless integration of AI solutions with dedicated support and regular check-ins to ensure optimal results."
          />
        </div>

        <div className="mt-12 flex justify-center">
          <CalendlyButton
            meetingUrl={MEETING_TYPES.DISCOVERY}
            className="nav-button text-lg group bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
          >
            Schedule Your Discovery Call
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
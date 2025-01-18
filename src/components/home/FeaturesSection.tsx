import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: "AI Phone Assistant",
    description: "Automate your phone communications with AI that handles calls, schedules appointments, and manages follow-ups.",
    detailedDescription: "Our AI Phone Assistant revolutionizes business communication by handling incoming calls 24/7, routing inquiries, scheduling appointments, and even making outbound calls. It understands context, manages follow-ups, transcribes conversations, and integrates with your CRM. Perfect for businesses looking to scale their phone operations without increasing staff.",
    stat: "24/7 availability"
  },
  {
    icon: Mail,
    title: "Fully Automated AI Cold Email Outreach",
    description: "Intelligent email system that crafts and sends highly personalized outreach campaigns to your leads, maximizing response rates.",
    detailedDescription: "Advanced AI-powered email automation that goes beyond traditional mail merges. Our system researches prospects, crafts highly personalized messages, A/B tests content, and automatically adjusts sending times for optimal engagement. It handles follow-ups intelligently and integrates with your sales pipeline for seamless lead nurturing.",
    stat: "85% open rate"
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "Smart conversational AI that engages visitors, answers questions, and captures qualified leads around the clock.",
    detailedDescription: "More than just a chatbot, our AI-powered conversation engine learns from every interaction to provide increasingly accurate responses. It qualifies leads, books meetings, provides product recommendations, and seamlessly hands off to human agents when needed. Includes multilingual support and advanced analytics dashboard.",
    stat: "90% inquiry resolution"
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = feature.icon;

  return (
    <div className="h-[400px] perspective-1000">
      {/* Touch devices: handle click/touch */}
      <div 
        className="md:hidden h-full"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`relative h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}>
          <Front feature={feature} Icon={Icon} />
          <Back feature={feature} />
        </div>
      </div>

      {/* Desktop: handle hover */}
      <div className="hidden md:block h-full group">
        <div className="relative h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
          <Front feature={feature} Icon={Icon} />
          <Back feature={feature} />
        </div>
      </div>
    </div>
  );
};

const Front = ({ feature, Icon }: { feature: typeof features[0], Icon: typeof features[0]['icon'] }) => (
  <div className="absolute inset-0 p-6 rounded-lg border border-white/10 bg-black backface-hidden">
    <Icon className="h-12 w-12 text-blue-500 mb-6 animate-float" />
    <h3 className="tech-heading text-xl mb-4">{feature.title}</h3>
    <p className="text-gray-400 mb-4">{feature.description}</p>
    <p className="text-blue-400 font-mono text-sm animate-pulse-slow">{feature.stat}</p>
  </div>
);

const Back = ({ feature }: { feature: typeof features[0] }) => (
  <div className="absolute inset-0 p-6 rounded-lg border border-blue-500/50 bg-blue-900/10 backface-hidden rotate-y-180">
    <h3 className="tech-heading text-xl mb-4 text-blue-400">{feature.title}</h3>
    <p className="text-gray-300 leading-relaxed">
      {feature.detailedDescription}
    </p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="solutions" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="tech-heading text-2xl sm:text-3xl md:text-4xl text-center mb-12 sm:mb-16 animate-fade-in">
          AI Solutions Tailored for Your Business Needs
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 stagger-children">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
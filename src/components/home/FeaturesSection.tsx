import { Phone, Mail, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: "AI Phone Assistant",
    description: "Automate your phone communications with AI that handles calls, schedules appointments, and manages follow-ups.",
    stat: "24/7 availability"
  },
  {
    icon: Mail,
    title: "Fully Automated AI Cold Email Outreach",
    description: "Intelligent email system that crafts and sends highly personalized outreach campaigns to your leads, maximizing response rates.",
    stat: "85% open rate"
  },
  {
    icon: MessageSquare,
    title: "AI Website Chatbot",
    description: "Smart conversational AI that engages visitors, answers questions, and captures qualified leads around the clock.",
    stat: "90% inquiry resolution"
  }
];

const FeaturesSection = () => {
  return (
    <section id="solutions" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="tech-heading text-2xl sm:text-3xl md:text-4xl text-center mb-12 sm:mb-16 animate-fade-in">
          AI Solutions Tailored for Your Business Needs
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 stagger-children">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="p-6 rounded-lg border border-white/10 hover:border-blue-500/50 
                  transition-all duration-300 hover:transform hover:scale-105 hover:bg-blue-900/10"
              >
                <Icon className="h-12 w-12 text-blue-500 mb-6 animate-float" />
                <h3 className="tech-heading text-xl mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <p className="text-blue-400 font-mono text-sm animate-pulse-slow">{feature.stat}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
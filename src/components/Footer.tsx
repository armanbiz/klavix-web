import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Address */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold">Address</h3>
            </div>
            <p className="text-gray-400">Prague, Czech Republic</p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold">Contact</h3>
            </div>
            <a 
              href="mailto:arman@klavix-ai.com" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              arman@klavix-ai.com
            </a>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <a 
              href="https://www.linkedin.com/company/klavix-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 pt-8 border-t border-white/10">
          © {new Date().getFullYear()} All rights reserved. Klavix AI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
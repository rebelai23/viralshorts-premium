import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  return (
    <AnimatedSection delay={0} className="bg-surface-2 backdrop-blur-sm py-12 border-t border-border text-text-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center text-xl font-heading text-text animate-neon-glow mb-4">
              <img src="/logo.svg" alt="ViralShorts AI Logo" className="h-8 w-8 mr-2"/>
              ViralShorts AI
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Unleashing the power of AI to transform your long videos into viral short-form content. Maximize your reach and engagement effortlessly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300"><Facebook size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300"><Twitter size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300"><Instagram size={20} /></a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#features" className="hover:text-primary transition-colors duration-300">Features</a></li>
              <li><a href="/#pricing" className="hover:text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="/#testimonials" className="hover:text-primary transition-colors duration-300">Testimonials</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors duration-300">FAQ</a></li>
              <li><Link to="/auth" className="hover:text-primary transition-colors duration-300">Login/Register</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors duration-300">Dashboard</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-lg text-text mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">DMCA</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-heading text-lg text-text mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Mail size={18} className="mr-2 text-primary" /> support@viralshorts.ai</li>
              <li className="flex items-center"><Phone size={18} className="mr-2 text-primary" /> +1 (555) 123-4567</li>
              <li className="flex items-start"><MapPin size={18} className="mr-2 mt-1 text-primary" /> 123 AI Avenue, Silicon Valley, CA 90210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} ViralShorts AI. All rights reserved.
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Footer;
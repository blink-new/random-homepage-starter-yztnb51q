import { LayoutType } from '../lib/randomUtils';
import { Heart, Twitter, Instagram, Github, Linkedin, Facebook } from 'lucide-react';

type RandomFooterProps = {
  companyName: string;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  layout: LayoutType;
  fontHeading: string;
  fontBody: string;
};

export default function RandomFooter({
  companyName,
  colorPalette,
  layout,
  fontHeading,
  fontBody
}: RandomFooterProps) {
  
  // Generate footer style based on layout
  const getFooterStyle = () => {
    // Dark footer is common across many designs
    if (layout === 'centered' || layout === 'cards') {
      return {
        backgroundColor: '#111827', // dark gray
        color: '#f3f4f6', // light gray
      };
    }
    
    // For some layouts, match header style
    if (layout === 'split' || layout === 'asymmetric') {
      return {
        backgroundColor: '#1f2937', // slightly lighter dark
        color: '#f9fafb', // almost white
      };
    }
    
    // For fullWidth, use a gradient
    if (layout === 'fullWidth') {
      return {
        background: `linear-gradient(135deg, ${colorPalette.primary} 0%, ${colorPalette.accent} 100%)`,
        color: '#ffffff',
      };
    }
    
    return {
      backgroundColor: colorPalette.background,
      color: colorPalette.text,
    };
  };
  
  // Footer links
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];
  
  // Social media links
  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Facebook, href: '#' },
  ];
  
  // Render different footer layouts
  const renderFooterLayout = () => {
    switch (layout) {
      case 'centered':
      case 'fullWidth':
        return (
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                <h3 
                  className="text-2xl font-bold"
                  style={{ fontFamily: fontHeading }}
                >
                  {companyName}
                </h3>
                <p 
                  className="mt-2 opacity-70"
                  style={{ fontFamily: fontBody }}
                >
                  Building amazing experiences since 2023
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {footerLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="hover:opacity-80 transition-opacity"
                    style={{ fontFamily: fontBody }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              
              <div 
                className="text-sm opacity-70"
                style={{ fontFamily: fontBody }}
              >
                © {new Date().getFullYear()} {companyName}. All rights reserved.
              </div>
            </div>
          </div>
        );
        
      case 'split':
      case 'cards':
        return (
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: fontHeading }}
                >
                  {companyName}
                </h3>
                <p 
                  className="opacity-70 mb-4"
                  style={{ fontFamily: fontBody }}
                >
                  Building amazing experiences since 2023
                </p>
                <div className="flex gap-3">
                  {socialLinks.slice(0, 3).map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 
                    className="font-semibold mb-4"
                    style={{ fontFamily: fontHeading }}
                  >
                    Company
                  </h4>
                  <ul className="space-y-2">
                    {['About', 'Team', 'Careers', 'Contact'].map((item, index) => (
                      <li key={index}>
                        <a 
                          href="#"
                          className="opacity-70 hover:opacity-100 transition-opacity"
                          style={{ fontFamily: fontBody }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 
                    className="font-semibold mb-4"
                    style={{ fontFamily: fontHeading }}
                  >
                    Resources
                  </h4>
                  <ul className="space-y-2">
                    {['Blog', 'Documentation', 'Help Center', 'Guides'].map((item, index) => (
                      <li key={index}>
                        <a 
                          href="#"
                          className="opacity-70 hover:opacity-100 transition-opacity"
                          style={{ fontFamily: fontBody }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 
                    className="font-semibold mb-4"
                    style={{ fontFamily: fontHeading }}
                  >
                    Legal
                  </h4>
                  <ul className="space-y-2">
                    {['Privacy', 'Terms', 'Security', 'Cookies'].map((item, index) => (
                      <li key={index}>
                        <a 
                          href="#"
                          className="opacity-70 hover:opacity-100 transition-opacity"
                          style={{ fontFamily: fontBody }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div 
              className="border-t border-gray-700 mt-12 pt-8 text-sm opacity-70 flex flex-col md:flex-row justify-between items-center"
              style={{ fontFamily: fontBody }}
            >
              <div>
                © {new Date().getFullYear()} {companyName}. All rights reserved.
              </div>
              <div className="mt-4 md:mt-0">
                Made with <Heart size={14} className="inline mx-1" /> by Random Homepage Generator
              </div>
            </div>
          </div>
        );
        
      case 'asymmetric':
        return (
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="md:w-1/3">
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: fontHeading }}
                >
                  {companyName}
                </h3>
                <p 
                  className="opacity-70 mb-6"
                  style={{ fontFamily: fontBody }}
                >
                  We're on a mission to help businesses create impactful digital experiences that drive growth and engagement.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href}
                        className="w-9 h-9 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 
                    className="font-semibold mb-4"
                    style={{ fontFamily: fontHeading }}
                  >
                    Quick Links
                  </h4>
                  <ul className="space-y-2">
                    {footerLinks.slice(0, 4).map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="opacity-70 hover:opacity-100 transition-opacity"
                          style={{ fontFamily: fontBody }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 
                    className="font-semibold mb-4"
                    style={{ fontFamily: fontHeading }}
                  >
                    Company
                  </h4>
                  <ul className="space-y-2">
                    {['About Us', 'Our Team', 'Careers', 'News'].map((item, index) => (
                      <li key={index}>
                        <a 
                          href="#"
                          className="opacity-70 hover:opacity-100 transition-opacity"
                          style={{ fontFamily: fontBody }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 
                    className="font-semibold mb-4"
                    style={{ fontFamily: fontHeading }}
                  >
                    Contact
                  </h4>
                  <ul className="space-y-2 opacity-70">
                    {[
                      'hello@example.com',
                      '+1 (555) 123-4567',
                      '123 Innovation Street',
                      'San Francisco, CA 94103'
                    ].map((item, index) => (
                      <li 
                        key={index}
                        style={{ fontFamily: fontBody }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div 
              className="border-t border-gray-700 mt-12 pt-8 text-sm opacity-70 flex flex-col md:flex-row justify-between items-center"
              style={{ fontFamily: fontBody }}
            >
              <div>
                © {new Date().getFullYear()} {companyName}. All rights reserved.
              </div>
              <div className="mt-4 md:mt-0 flex gap-4">
                {['Privacy Policy', 'Terms of Service', 'Cookies Policy'].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <footer 
      id="contact"
      style={getFooterStyle()}
    >
      {renderFooterLayout()}
    </footer>
  );
}
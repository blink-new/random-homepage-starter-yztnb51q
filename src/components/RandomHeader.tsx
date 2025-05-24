import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HeaderType } from '../lib/randomUtils';

type RandomHeaderProps = {
  companyName: string;
  colorPalette: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  headerType: HeaderType;
  fontHeading: string;
};

export default function RandomHeader({ companyName, colorPalette, headerType, fontHeading }: RandomHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for transparent headers
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate header style based on type
  const getHeaderStyle = () => {
    const baseStyle = {
      backgroundColor: headerType === 'transparent' && !scrolled 
        ? 'transparent' 
        : colorPalette.background,
      color: headerType === 'transparent' && !scrolled
        ? '#fff'
        : colorPalette.text,
      boxShadow: scrolled || headerType !== 'transparent' 
        ? '0 1px 3px rgba(0,0,0,0.1)' 
        : 'none',
      transition: 'all 0.3s ease',
    };

    return baseStyle;
  };

  // Generate menu items
  const menuItems = ['Home', 'Features', 'Testimonials', 'Contact'];

  return (
    <header 
      className="fixed w-full z-50 py-4 px-6 md:px-12 transition-all duration-300"
      style={getHeaderStyle()}
    >
      <div className={`
        flex items-center justify-between
        ${headerType === 'centered' ? 'flex-col md:flex-row gap-4' : 'flex-row'}
      `}>
        <div className="flex items-center">
          <h1 
            className="text-xl md:text-2xl font-bold" 
            style={{ 
              fontFamily: fontHeading,
              color: headerType === 'transparent' && !scrolled 
                ? '#fff' 
                : colorPalette.primary 
            }}
          >
            {companyName}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                font-medium hover:opacity-75 transition-opacity
                ${headerType === 'transparent' && !scrolled ? 'text-white' : ''}
              `}
              style={{ color: headerType === 'transparent' && !scrolled ? '#fff' : undefined }}
            >
              {item}
            </a>
          ))}
          <button 
            className="px-4 py-2 rounded-md font-medium transition-all duration-300"
            style={{ 
              backgroundColor: colorPalette.primary,
              color: '#fff',
            }}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className="text-current" />
          ) : (
            <Menu size={24} className="text-current" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden pt-4 pb-2 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="px-4 py-2 rounded-md font-medium w-full text-center mt-2 transition-all duration-300"
              style={{ 
                backgroundColor: colorPalette.primary,
                color: '#fff',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
import React from 'react';
import { Button } from '../ui/button';
import { ContentItem, CompanyInfo, NavigationItem } from '../../data/content';

interface HeroLayoutProps {
  company: CompanyInfo;
  hero: ContentItem;
  navigation: NavigationItem[];
  colorClasses: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
  };
  fontClasses: {
    headingFont: string;
    bodyFont: string;
  };
  spacing: {
    container: string;
    section: string;
    element: string;
  };
  buttonStyle: string;
}

const HeroLayout: React.FC<HeroLayoutProps> = ({
  company,
  hero,
  navigation,
  colorClasses,
  fontClasses,
  spacing,
  buttonStyle,
}) => {
  return (
    <div className={`min-h-screen ${colorClasses.background} ${colorClasses.text} ${fontClasses.bodyFont}`}>
      {/* Navigation */}
      <header className={`w-full py-4 ${spacing.container}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className={`text-2xl font-bold ${fontClasses.headingFont} ${colorClasses.accent}`}>
            {company.name}
          </div>
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                className={`hover:${colorClasses.accent} transition-colors duration-200`}
              >
                {item.text}
              </a>
            ))}
          </nav>
          <Button className={`${buttonStyle} ${colorClasses.primary} md:hidden`}>
            Menu
          </Button>
        </div>
      </header>

      {/* Hero section */}
      <section className={`${spacing.section} py-20 md:py-32`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-16 mb-10 md:mb-0 space-y-6">
            <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${fontClasses.headingFont}`}>
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-80">
              {hero.description}
            </p>
            <div className="pt-4">
              <Button className={`${buttonStyle} ${colorClasses.primary} text-lg px-8 py-3`}>
                {hero.ctaText || 'Get Started'}
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src={hero.image} 
              alt={hero.title} 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${spacing.container} border-t border-opacity-20`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm opacity-70">
                © {new Date().getFullYear()} {company.name}. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              {navigation.slice(0, 4).map((item, index) => (
                <a 
                  key={index} 
                  href={item.url} 
                  className="text-sm opacity-70 hover:opacity-100"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroLayout;
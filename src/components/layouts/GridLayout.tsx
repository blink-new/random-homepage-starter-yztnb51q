import React from 'react';
import { Button } from '../ui/button';
import { ContentItem, CompanyInfo, NavigationItem } from '../../data/content';

interface GridLayoutProps {
  company: CompanyInfo;
  hero: ContentItem;
  features: ContentItem[];
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

const GridLayout: React.FC<GridLayoutProps> = ({
  company,
  hero,
  features,
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

      {/* Hero section with a centered, smaller format */}
      <section className={`${spacing.section} text-center py-16`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${fontClasses.headingFont}`}>
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            {hero.description}
          </p>
          <Button className={`${buttonStyle} ${colorClasses.primary} text-lg px-8 py-3`}>
            {hero.ctaText || 'Get Started'}
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`${spacing.section} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${fontClasses.headingFont}`}>
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`${spacing.element} bg-opacity-5 ${colorClasses.text} bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${fontClasses.headingFont}`}>{feature.title}</h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className={`${spacing.section} py-16 text-center`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`${spacing.element} rounded-xl ${colorClasses.accent} text-white bg-opacity-10 p-8 md:p-12`}>
            <h2 className={`text-3xl font-bold mb-4 ${fontClasses.headingFont}`}>Ready to get started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of customers who are already transforming their experience with {company.name}.
            </p>
            <Button className={`${buttonStyle} ${colorClasses.primary} text-lg px-8 py-3`}>
              Start Free Trial
            </Button>
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

export default GridLayout;
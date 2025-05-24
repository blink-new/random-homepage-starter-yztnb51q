import React from 'react';
import { Button } from '../ui/button';
import { ContentItem, CompanyInfo, NavigationItem } from '../../data/content';

interface MinimalLayoutProps {
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

const MinimalLayout: React.FC<MinimalLayoutProps> = ({
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
      {/* Minimal Navigation */}
      <header className={`w-full py-6 ${spacing.container}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className={`text-xl font-bold ${fontClasses.headingFont} ${colorClasses.accent}`}>
            {company.name}
          </div>
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                className={`hover:${colorClasses.accent} transition-colors duration-200 text-sm`}
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

      {/* Centered hero section */}
      <section className={`${spacing.section} py-24 md:py-32`}>
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <h1 className={`text-4xl md:text-6xl font-bold mb-8 ${fontClasses.headingFont} leading-tight`}>
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className={`${buttonStyle} ${colorClasses.primary} text-lg px-8 py-3`}>
              {hero.ctaText || 'Get Started'}
            </Button>
            <Button className={`${buttonStyle} ${colorClasses.secondary} text-lg px-8 py-3`}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Minimal feature list */}
      <section className={`${spacing.section} py-16`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.slice(0, 4).map((feature, index) => (
              <div key={feature.id} className="flex items-start">
                <div className={`text-3xl mr-4 ${colorClasses.accent}`}>{index + 1}</div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${fontClasses.headingFont}`}>{feature.title}</h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple image section */}
      <section className={`${spacing.section} py-16`}>
        <div className="container mx-auto px-4">
          <img 
            src={hero.image} 
            alt="Feature illustration" 
            className="w-full h-auto rounded-lg shadow-lg max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Simple CTA */}
      <section className={`${spacing.section} py-24 text-center`}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className={`text-3xl font-bold mb-6 ${fontClasses.headingFont}`}>
            Ready to experience {company.name}?
          </h2>
          <p className="text-lg mb-10 opacity-80">
            {company.tagline}
          </p>
          <Button className={`${buttonStyle} ${colorClasses.primary} text-lg px-8 py-3`}>
            Start Now
          </Button>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className={`py-8 ${spacing.container} border-t border-opacity-10`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm opacity-60">
                © {new Date().getFullYear()} {company.name}
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.slice(0, 4).map((item, index) => (
                <a 
                  key={index} 
                  href={item.url} 
                  className="text-sm opacity-60 hover:opacity-100"
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

export default MinimalLayout;
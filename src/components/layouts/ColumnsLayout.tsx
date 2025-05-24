import React from 'react';
import { Button } from '../ui/button';
import { ContentItem, CompanyInfo, NavigationItem, Testimonial } from '../../data/content';

interface ColumnsLayoutProps {
  company: CompanyInfo;
  hero: ContentItem;
  features: ContentItem[];
  testimonials: Testimonial[];
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

const ColumnsLayout: React.FC<ColumnsLayoutProps> = ({
  company,
  hero,
  features,
  testimonials,
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

      {/* Two-column hero section */}
      <section className={`${spacing.section} py-16`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${fontClasses.headingFont}`}>
                {hero.title}
              </h1>
              <p className="text-lg opacity-80 mb-8">
                {hero.description}
              </p>
              <Button className={`${buttonStyle} ${colorClasses.primary} text-lg px-6 py-2`}>
                {hero.ctaText || 'Get Started'}
              </Button>
            </div>
            <div>
              <img 
                src={hero.image} 
                alt={hero.title} 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features in columns */}
      <section className={`${spacing.section} py-16 bg-opacity-5 bg-black`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${fontClasses.headingFont}`}>
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.id} className="text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${fontClasses.headingFont}`}>{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${spacing.section} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-12 text-center ${fontClasses.headingFont}`}>
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className={`${spacing.element} rounded-lg bg-opacity-5 bg-white shadow-sm`}
              >
                <div className="flex items-start p-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="italic mb-4">"{testimonial.text}"</p>
                    <p className={`font-bold ${fontClasses.headingFont}`}>{testimonial.name}</p>
                    <p className="text-sm opacity-70">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action banner */}
      <section className={`${spacing.section} py-16`}>
        <div className="container mx-auto px-4">
          <div className={`rounded-xl p-10 text-center ${colorClasses.accent} bg-opacity-10`}>
            <h2 className={`text-3xl font-bold mb-4 ${fontClasses.headingFont}`}>
              Ready to transform your experience?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join {company.name} today and discover why thousands of customers trust us.
            </p>
            <Button className={`${buttonStyle} ${colorClasses.primary} text-lg px-8 py-3`}>
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${spacing.container} border-t border-opacity-20`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className={`text-xl font-bold mb-4 ${fontClasses.headingFont} ${colorClasses.accent}`}>
                {company.name}
              </h3>
              <p className="opacity-70 mb-4">{company.tagline}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="opacity-70 hover:opacity-100">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-70 hover:opacity-100">Blog</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Documentation</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Help Center</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="opacity-70">contact@example.com</li>
                <li className="opacity-70">+1 (555) 123-4567</li>
                <li className="opacity-70">123 Main St, City, Country</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-opacity-20">
            <p className="text-sm opacity-70 text-center">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ColumnsLayout;
import React from 'react';
import { Button } from '../ui/button';
import { ContentItem, CompanyInfo, NavigationItem } from '../../data/content';

interface MagazineLayoutProps {
  company: CompanyInfo;
  hero: ContentItem;
  blogPosts: ContentItem[];
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

const MagazineLayout: React.FC<MagazineLayoutProps> = ({
  company,
  hero,
  blogPosts,
  navigation,
  colorClasses,
  fontClasses,
  spacing,
  buttonStyle,
}) => {
  return (
    <div className={`min-h-screen ${colorClasses.background} ${colorClasses.text} ${fontClasses.bodyFont}`}>
      {/* Magazine-style header */}
      <header className={`w-full py-6 border-b border-opacity-20 ${spacing.container}`}>
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className={`text-4xl md:text-5xl font-bold ${fontClasses.headingFont} ${colorClasses.accent}`}>
              {company.name}
            </h1>
            <p className="text-sm uppercase tracking-widest mt-2 opacity-70">{company.tagline}</p>
          </div>
          <nav className="flex justify-center space-x-8 py-2">
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
        </div>
      </header>

      {/* Featured article (hero) */}
      <section className={`${spacing.section} py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${fontClasses.headingFont}`}>
                {hero.title}
              </h2>
              <p className="text-lg opacity-80 mb-6 leading-relaxed">
                {hero.description}
              </p>
              <Button className={`${buttonStyle} ${colorClasses.primary}`}>
                {hero.ctaText || 'Read Full Story'}
              </Button>
            </div>
            <div>
              <img 
                src={hero.image} 
                alt={hero.title} 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm italic mt-2 opacity-70">Featured article</p>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine-style article grid */}
      <section className={`${spacing.section} py-12`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl font-bold mb-8 pb-2 border-b border-opacity-20 ${fontClasses.headingFont}`}>
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className={`text-xl font-bold mb-2 ${fontClasses.headingFont}`}>{post.title}</h3>
                <p className="opacity-80 line-clamp-3 mb-3">{post.description}</p>
                <a 
                  href="#" 
                  className={`text-sm font-medium ${colorClasses.accent} inline-flex items-center`}
                >
                  {post.ctaText} <span className="ml-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className={`${spacing.section} py-16 ${colorClasses.accent} bg-opacity-5 rounded-lg`}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className={`text-3xl font-bold mb-4 ${fontClasses.headingFont}`}>
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-6 opacity-80">
            Get the latest articles and news delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-md flex-grow"
            />
            <Button className={`${buttonStyle} ${colorClasses.primary} whitespace-nowrap`}>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Editor's picks */}
      <section className={`${spacing.section} py-12`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl font-bold mb-8 pb-2 border-b border-opacity-20 ${fontClasses.headingFont}`}>
            Editor's Picks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <div key={post.id} className="flex gap-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div>
                  <h3 className={`text-lg font-bold mb-2 ${fontClasses.headingFont}`}>{post.title}</h3>
                  <p className="opacity-80 text-sm line-clamp-2">{post.description}</p>
                  <a 
                    href="#" 
                    className={`text-sm font-medium ${colorClasses.accent} mt-2 inline-block`}
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine-style footer */}
      <footer className={`py-12 border-t border-opacity-20 ${spacing.container}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className={`text-xl font-bold mb-4 ${fontClasses.headingFont} ${colorClasses.accent}`}>
                {company.name}
              </h3>
              <p className="opacity-70 mb-4 max-w-md">{company.description}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-70 hover:opacity-100">Technology</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Culture</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Business</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Politics</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Science</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="opacity-70 hover:opacity-100">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-opacity-20 text-center">
            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MagazineLayout;
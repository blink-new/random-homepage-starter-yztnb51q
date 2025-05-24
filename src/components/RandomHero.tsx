import { ArrowRight } from 'lucide-react';
import { LayoutType } from '../lib/randomUtils';

type RandomHeroProps = {
  companyName: string;
  tagline: string;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  layout: LayoutType;
  heroImage: string;
  cta: string;
  fontHeading: string;
  fontBody: string;
};

export default function RandomHero({
  companyName,
  tagline,
  colorPalette,
  layout,
  heroImage,
  cta,
  fontHeading,
  fontBody
}: RandomHeroProps) {
  
  // Generate style based on layout type
  const heroStyle = (() => {
    // For split and asymmetric layouts, use an image background
    if (layout === 'split' || layout === 'asymmetric') {
      return {};
    }
    
    // For full width layouts, use a gradient or image background
    if (layout === 'fullWidth') {
      const useGradient = Math.random() > 0.5;
      
      if (useGradient) {
        return {
          backgroundImage: `linear-gradient(135deg, ${colorPalette.primary} 0%, ${colorPalette.accent} 100%)`,
          color: '#ffffff',
        };
      } else {
        return {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
        };
      }
    }
    
    // For other layouts, use a solid background
    return {
      backgroundColor: colorPalette.background,
      color: colorPalette.text,
    };
  })();
  
  // Render different layouts
  const renderHeroContent = () => {
    switch (layout) {
      case 'centered':
        return (
          <div className="container mx-auto px-6 py-20 md:py-32 text-center">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in"
              style={{ fontFamily: fontHeading }}
            >
              {companyName}
            </h1>
            <p 
              className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 animate-slide-up opacity-90"
              style={{ fontFamily: fontBody }}
            >
              {tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300"
                style={{ 
                  backgroundColor: colorPalette.primary,
                  color: '#fff',
                  fontFamily: fontBody
                }}
              >
                {cta} <ArrowRight size={16} />
              </button>
              <button 
                className="px-6 py-3 rounded-md font-medium transition-all duration-300"
                style={{ 
                  backgroundColor: 'transparent',
                  color: layout === 'fullWidth' ? '#fff' : colorPalette.text,
                  border: `2px solid ${layout === 'fullWidth' ? '#fff' : colorPalette.primary}`,
                  fontFamily: fontBody
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        );
        
      case 'split':
        return (
          <div className="flex flex-col md:flex-row h-screen">
            <div 
              className="w-full md:w-1/2 px-6 md:px-12 flex items-center justify-center bg-opacity-90"
              style={{ 
                backgroundColor: colorPalette.background,
                color: colorPalette.text 
              }}
            >
              <div className="py-20 md:py-0 max-w-md">
                <h1 
                  className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in"
                  style={{ fontFamily: fontHeading }}
                >
                  {companyName}
                </h1>
                <p 
                  className="text-xl mb-10 animate-slide-up opacity-90"
                  style={{ fontFamily: fontBody }}
                >
                  {tagline}
                </p>
                <button 
                  className="px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: colorPalette.primary,
                    color: '#fff',
                    fontFamily: fontBody
                  }}
                >
                  {cta} <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div 
              className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
          </div>
        );
        
      case 'asymmetric':
        return (
          <div className="container mx-auto px-6 py-20 md:py-32">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-7/12 pr-0 md:pr-12 mb-12 md:mb-0">
                <h1 
                  className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in"
                  style={{ 
                    fontFamily: fontHeading,
                    color: colorPalette.primary 
                  }}
                >
                  {companyName}
                </h1>
                <p 
                  className="text-xl mb-10 animate-slide-up opacity-90"
                  style={{ fontFamily: fontBody }}
                >
                  {tagline}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    className="px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: colorPalette.primary,
                      color: '#fff',
                      fontFamily: fontBody
                    }}
                  >
                    {cta} <ArrowRight size={16} />
                  </button>
                  <button 
                    className="px-6 py-3 rounded-md font-medium transition-all duration-300"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: colorPalette.text,
                      border: `2px solid ${colorPalette.primary}`,
                      fontFamily: fontBody
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <div 
                  className="rounded-lg overflow-hidden shadow-xl h-64 md:h-96 bg-cover bg-center transform transition-transform hover:scale-105 duration-500"
                  style={{ backgroundImage: `url(${heroImage})` }}
                />
              </div>
            </div>
          </div>
        );
        
      case 'fullWidth':
        return (
          <div className="w-full px-6 md:px-16 py-32 md:py-48 flex items-center justify-center text-center">
            <div className="max-w-3xl">
              <h1 
                className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in"
                style={{ fontFamily: fontHeading }}
              >
                {companyName}
              </h1>
              <p 
                className="text-xl md:text-2xl mb-10 animate-slide-up opacity-90"
                style={{ fontFamily: fontBody }}
              >
                {tagline}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  className="px-8 py-4 rounded-md font-medium flex items-center gap-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: '#ffffff',
                    color: colorPalette.primary,
                    fontFamily: fontBody
                  }}
                >
                  {cta} <ArrowRight size={16} />
                </button>
                <button 
                  className="px-8 py-4 rounded-md font-medium transition-all duration-300"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '2px solid #ffffff',
                    fontFamily: fontBody
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'cards':
        return (
          <div className="container mx-auto px-6 py-20 md:py-32">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div 
                className="w-full md:w-1/2 rounded-xl p-10 shadow-xl"
                style={{ backgroundColor: colorPalette.background }}
              >
                <h1 
                  className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in"
                  style={{ 
                    fontFamily: fontHeading,
                    color: colorPalette.primary 
                  }}
                >
                  {companyName}
                </h1>
                <p 
                  className="text-xl mb-10 animate-slide-up opacity-90"
                  style={{ fontFamily: fontBody }}
                >
                  {tagline}
                </p>
                <button 
                  className="px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: colorPalette.primary,
                    color: '#fff',
                    fontFamily: fontBody
                  }}
                >
                  {cta} <ArrowRight size={16} />
                </button>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item}
                    className="aspect-square rounded-lg overflow-hidden bg-cover bg-center shadow-lg transform transition-transform hover:scale-105 duration-300"
                    style={{
                      backgroundImage: `url(https://source.unsplash.com/random/300x300?sig=${item})`,
                    }}
                  />
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
    <section 
      id="home"
      className="min-h-screen w-full flex items-center justify-center pt-16"
      style={heroStyle}
    >
      {renderHeroContent()}
    </section>
  );
}
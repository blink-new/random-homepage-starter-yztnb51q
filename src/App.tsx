import { useState, useEffect } from 'react';
import RandomHeader from './components/RandomHeader';
import RandomHero from './components/RandomHero';
import RandomFeatures from './components/RandomFeatures';
import RandomTestimonials from './components/RandomTestimonials';
import RandomFooter from './components/RandomFooter';
import { generateRandomContent } from './lib/randomUtils';

function App() {
  const [randomContent, setRandomContent] = useState(() => generateRandomContent());
  
  // Regenerate content on click of a button
  const regenerateContent = () => {
    setRandomContent(generateRandomContent());
  };
  
  // Ensure fonts are preloaded
  useEffect(() => {
    document.body.style.fontFamily = randomContent.fontPair.body;
  }, [randomContent.fontPair.body]);
  
  return (
    <div className="relative">
      {/* Regenerate Button */}
      <button
        onClick={regenerateContent}
        className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full shadow-lg flex items-center gap-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
          <path d="M16 21h5v-5"></path>
        </svg>
        Regenerate Design
      </button>

      {/* Random Header */}
      <RandomHeader
        companyName={randomContent.companyName}
        colorPalette={randomContent.colorPalette}
        headerType={randomContent.headerType}
        fontHeading={randomContent.fontPair.heading}
      />
      
      {/* Random Hero */}
      <RandomHero
        companyName={randomContent.companyName}
        tagline={randomContent.tagline}
        colorPalette={randomContent.colorPalette}
        layout={randomContent.layout}
        heroImage={randomContent.heroImage}
        cta={randomContent.cta}
        fontHeading={randomContent.fontPair.heading}
        fontBody={randomContent.fontPair.body}
      />
      
      {/* Random Features */}
      <RandomFeatures
        features={randomContent.features}
        colorPalette={randomContent.colorPalette}
        layout={randomContent.layout}
        fontHeading={randomContent.fontPair.heading}
        fontBody={randomContent.fontPair.body}
      />
      
      {/* Random Testimonials */}
      <RandomTestimonials
        testimonials={randomContent.testimonials}
        colorPalette={randomContent.colorPalette}
        layout={randomContent.layout}
        fontHeading={randomContent.fontPair.heading}
        fontBody={randomContent.fontPair.body}
      />
      
      {/* Random Footer */}
      <RandomFooter
        companyName={randomContent.companyName}
        colorPalette={randomContent.colorPalette}
        layout={randomContent.layout}
        fontHeading={randomContent.fontPair.heading}
        fontBody={randomContent.fontPair.body}
      />
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import { RandomHeader } from './components/RandomHeader';
import { RandomHero } from './components/RandomHero';
import { RandomFeatures } from './components/RandomFeatures';
import { RandomTestimonials } from './components/RandomTestimonials';
import { RandomCTA } from './components/RandomCTA';
import { RandomFooter } from './components/RandomFooter';
import { generateRandomWebsite } from './lib/randomUtils';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { RefreshCw } from 'lucide-react';

function App() {
  const [websiteData, setWebsiteData] = useState(generateRandomWebsite());
  const [isLoading, setIsLoading] = useState(false);

  // Function to regenerate the website
  const regenerateWebsite = () => {
    setIsLoading(true);
    
    // Use a timeout to show loading state
    setTimeout(() => {
      const newData = generateRandomWebsite();
      setWebsiteData(newData);
      setIsLoading(false);
      toast.success('Homepage regenerated!');
    }, 600);
  };

  // Show a welcome toast on first load
  useEffect(() => {
    toast.success('Welcome to Random Homepage Generator! Click the refresh button to generate a new design.');
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${websiteData.font}`}>
      {/* Floating refresh button */}
      <button
        onClick={regenerateWebsite}
        disabled={isLoading}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
      >
        <RefreshCw size={24} className={isLoading ? 'animate-spin' : ''} />
      </button>
      
      {/* Random header */}
      <RandomHeader 
        colorScheme={websiteData.colorScheme} 
        companyName={websiteData.companyName}
        font={websiteData.font}
      />
      
      {/* Random hero section */}
      <RandomHero 
        colorScheme={websiteData.colorScheme}
        headline={websiteData.headline}
        subheadline={websiteData.subheadline}
        cta={websiteData.cta}
        heroType={websiteData.heroType}
        font={websiteData.font}
      />
      
      {/* Random features section */}
      <RandomFeatures 
        colorScheme={websiteData.colorScheme}
        featureList={websiteData.featureList}
        font={websiteData.font}
      />
      
      {/* Random testimonials section (50% chance of appearing) */}
      {Math.random() > 0.5 && (
        <RandomTestimonials 
          colorScheme={websiteData.colorScheme}
          font={websiteData.font}
        />
      )}
      
      {/* Random CTA section */}
      <RandomCTA 
        colorScheme={websiteData.colorScheme}
        cta={websiteData.cta}
        font={websiteData.font}
      />
      
      {/* Random footer */}
      <RandomFooter 
        colorScheme={websiteData.colorScheme}
        companyName={websiteData.companyName}
        font={websiteData.font}
      />
      
      {/* Toast notifications */}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
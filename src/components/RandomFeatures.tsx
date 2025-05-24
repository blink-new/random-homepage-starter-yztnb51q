import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface RandomFeaturesProps {
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    button: string;
  };
  featureList: Feature[];
  font: string;
}

export function RandomFeatures({ colorScheme, featureList, font }: RandomFeaturesProps) {
  const [featureStyle] = useState<number>(Math.floor(Math.random() * 3));
  
  // Helper function to get Lucide icon
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number }>>)[iconName];
    if (IconComponent) {
      return <IconComponent size={24} />;
    }
    return <LucideIcons.Star size={24} />;
  };

  // Different feature layouts
  const renderFeatureStyle0 = () => (
    <section className={cn("w-full py-16", font, colorScheme.neutral)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-lg mb-0 max-w-2xl mx-auto">
            Discover the tools and features that make our platform unique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <motion.div 
              key={index}
              className={cn("p-6 rounded-lg", colorScheme.secondary)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", colorScheme.accent)}>
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderFeatureStyle1 = () => (
    <section className={cn("w-full py-16", font, colorScheme.neutral)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
              <p className="text-lg mb-6">
                Discover the tools and features that make our platform unique.
              </p>
              <button className={cn("px-6 py-3 rounded-lg", colorScheme.button)}>
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-8">
              {featureList.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={cn("w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center", colorScheme.accent)}>
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderFeatureStyle2 = () => (
    <section className={cn("w-full py-16", font, colorScheme.primary)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-lg mb-0 max-w-2xl mx-auto">
            Discover the tools and features that make our platform unique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature, index) => (
            <motion.div 
              key={index}
              className={cn("p-6 rounded-lg", colorScheme.neutral)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mr-3", colorScheme.accent)}>
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Render the random feature style
  const featureStyles = [renderFeatureStyle0, renderFeatureStyle1, renderFeatureStyle2];
  return featureStyles[featureStyle]();
}
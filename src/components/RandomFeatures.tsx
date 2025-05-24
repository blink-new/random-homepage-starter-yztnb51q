import { LayoutType, Feature } from '../lib/randomUtils';
import * as LucideIcons from 'lucide-react';

type RandomFeaturesProps = {
  features: Feature[];
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  layout: LayoutType;
  fontHeading: string;
  fontBody: string;
};

export default function RandomFeatures({
  features,
  colorPalette,
  layout,
  fontHeading,
  fontBody
}: RandomFeaturesProps) {
  
  // Dynamically render icons from Lucide
  const renderIcon = (iconName: string) => {
    const capitalizedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    const Icon = LucideIcons[capitalizedIconName as keyof typeof LucideIcons];
    
    if (!Icon) {
      return null;
    }
    
    return <Icon size={24} />;
  };
  
  // Helper function to get Lucide icon
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number }>>)[iconName];
    if (IconComponent) {
      return <IconComponent size={24} />;
    }
    return <LucideIcons.Star size={24} />;
  };
  
  // Generate section style based on layout
  const getSectionStyle = () => {
    if (layout === 'split' || layout === 'asymmetric') {
      // Use a light background for these layouts
      return {
        backgroundColor: '#f9fafb', // Light gray
        color: colorPalette.text,
      };
    }
    
    return {
      backgroundColor: colorPalette.background,
      color: colorPalette.text,
    };
  };
  
  // Render different feature layouts
  const renderFeatureLayout = () => {
    switch (layout) {
      case 'centered':
      case 'fullWidth':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                  style={{ 
                    backgroundColor: colorPalette.primary,
                    color: '#fff'
                  }}
                >
                  {getIcon(feature.icon)}
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: fontHeading }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="opacity-80"
                  style={{ fontFamily: fontBody }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        );
        
      case 'split':
      case 'asymmetric':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg flex items-start gap-5 transition-all duration-300 hover:shadow-lg"
              >
                <div 
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-md"
                  style={{ 
                    backgroundColor: colorPalette.primary,
                    color: '#fff'
                  }}
                >
                  {getIcon(feature.icon)}
                </div>
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: fontHeading }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="opacity-80"
                    style={{ fontFamily: fontBody }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );
        
      case 'cards':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: index % 2 === 0 ? colorPalette.primary : '#fff',
                  color: index % 2 === 0 ? '#fff' : colorPalette.text
                }}
              >
                <div className="mb-4">
                  {getIcon(feature.icon)}
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: fontHeading }}
                >
                  {feature.title}
                </h3>
                <p 
                  className={index % 2 === 0 ? 'opacity-90' : 'opacity-80'}
                  style={{ fontFamily: fontBody }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <section 
      id="features"
      className="py-20 md:py-32"
      style={getSectionStyle()}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              fontFamily: fontHeading,
              color: colorPalette.primary 
            }}
          >
            Key Features
          </h2>
          <p 
            className="text-lg md:text-xl opacity-80"
            style={{ fontFamily: fontBody }}
          >
            Discover the powerful capabilities that set us apart
          </p>
        </div>
        
        {renderFeatureLayout()}
      </div>
    </section>
  );
}
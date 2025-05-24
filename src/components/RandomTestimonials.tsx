import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { LayoutType, Testimonial } from '../lib/randomUtils';

type RandomTestimonialsProps = {
  testimonials: Testimonial[];
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

export default function RandomTestimonials({
  testimonials,
  colorPalette,
  layout,
  fontHeading,
  fontBody
}: RandomTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Generate section style based on layout
  const getSectionStyle = () => {
    if (layout === 'fullWidth' || layout === 'cards') {
      // Use a gradient background for these layouts
      return {
        background: `linear-gradient(135deg, ${colorPalette.primary} 0%, ${colorPalette.accent} 100%)`,
        color: '#fff',
      };
    }
    
    if (layout === 'split' || layout === 'asymmetric') {
      // Use a light background for these layouts
      return {
        backgroundColor: '#fff',
        color: colorPalette.text,
      };
    }
    
    return {
      backgroundColor: colorPalette.background,
      color: colorPalette.text,
    };
  };
  
  // Render different testimonial layouts
  const renderTestimonialLayout = () => {
    switch (layout) {
      case 'centered':
      case 'cards':
        return (
          <div className="max-w-3xl mx-auto mt-12">
            <div 
              className="p-8 md:p-12 rounded-lg shadow-lg relative overflow-hidden"
              style={{
                backgroundColor: layout === 'cards' ? 'rgba(255, 255, 255, 0.1)' : '#fff',
                color: layout === 'cards' ? '#fff' : colorPalette.text,
                backdropFilter: layout === 'cards' ? 'blur(10px)' : 'none',
              }}
            >
              <Quote 
                size={48} 
                className="absolute top-6 left-6 opacity-20" 
                style={{ color: layout === 'cards' ? '#fff' : colorPalette.primary }}
              />
              
              <div className="relative z-10">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                  >
                    <p 
                      className="text-xl md:text-2xl mb-8 text-center"
                      style={{ fontFamily: fontBody }}
                    >
                      "{testimonial.quote}"
                    </p>
                    <div className="text-center">
                      <p 
                        className="font-semibold"
                        style={{ fontFamily: fontHeading }}
                      >
                        {testimonial.author}
                      </p>
                      <p 
                        className="opacity-80 text-sm"
                        style={{ fontFamily: fontBody }}
                      >
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {testimonials.length > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-current' : 'bg-current opacity-30'}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
        
      case 'split':
      case 'fullWidth':
        return (
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg shadow-md h-full flex flex-col"
                  style={{
                    backgroundColor: layout === 'fullWidth' ? 'rgba(255, 255, 255, 0.1)' : '#fff',
                    color: layout === 'fullWidth' ? '#fff' : colorPalette.text,
                    backdropFilter: layout === 'fullWidth' ? 'blur(10px)' : 'none',
                  }}
                >
                  <Quote 
                    size={32} 
                    className="mb-4 opacity-70" 
                    style={{ color: layout === 'fullWidth' ? '#fff' : colorPalette.primary }}
                  />
                  <p 
                    className="text-lg flex-grow mb-6"
                    style={{ fontFamily: fontBody }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p 
                      className="font-semibold"
                      style={{ fontFamily: fontHeading }}
                    >
                      {testimonial.author}
                    </p>
                    <p 
                      className="opacity-80 text-sm"
                      style={{ fontFamily: fontBody }}
                    >
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'asymmetric':
        return (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg shadow-md flex gap-6 ${index % 2 === 1 ? 'md:translate-y-8' : ''}`}
              >
                <div 
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ 
                    backgroundColor: colorPalette.primary,
                    color: '#fff'
                  }}
                >
                  <Quote size={20} />
                </div>
                <div>
                  <p 
                    className="text-lg mb-4"
                    style={{ fontFamily: fontBody }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <p 
                    className="font-semibold"
                    style={{ fontFamily: fontHeading }}
                  >
                    {testimonial.author}
                  </p>
                  <p 
                    className="opacity-80 text-sm"
                    style={{ fontFamily: fontBody }}
                  >
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
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
      id="testimonials"
      className="py-20 md:py-32"
      style={getSectionStyle()}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              fontFamily: fontHeading,
              color: layout === 'fullWidth' || layout === 'cards' ? '#fff' : colorPalette.primary 
            }}
          >
            What Our Clients Say
          </h2>
          <p 
            className={`text-lg md:text-xl ${layout === 'fullWidth' || layout === 'cards' ? 'opacity-90' : 'opacity-80'}`}
            style={{ fontFamily: fontBody }}
          >
            Hear from those who have experienced our services
          </p>
        </div>
        
        {renderTestimonialLayout()}
      </div>
    </section>
  );
}
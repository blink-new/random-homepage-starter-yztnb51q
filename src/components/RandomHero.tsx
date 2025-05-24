import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RandomHeroProps {
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    button: string;
  };
  headline: string;
  subheadline: string;
  cta: string;
  heroType: string;
  font: string;
}

export function RandomHero({ 
  colorScheme, 
  headline, 
  subheadline, 
  cta, 
  heroType, 
  font 
}: RandomHeroProps) {
  const [heroStyle] = useState<number>(Math.floor(Math.random() * 3));
  
  // Random background patterns
  const patterns = [
    'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-100 to-slate-100',
    'bg-[linear-gradient(to_right,_#f0f0f0,_#f8f8f8)]',
    'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100 via-slate-100 to-slate-100',
    'bg-gradient-to-br from-slate-100 to-blue-50',
    'bg-gradient-to-r from-rose-50 to-slate-50',
  ];
  
  const [pattern, setPattern] = useState<string>('');
  
  useEffect(() => {
    if (heroType === 'with-pattern') {
      const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
      setPattern(randomPattern);
    }
  }, [heroType]);
  
  // Random hero image
  const heroImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2274&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  ];
  
  const [heroImage, setHeroImage] = useState<string>('');
  
  useEffect(() => {
    if (heroType === 'with-image') {
      const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
      setHeroImage(randomImage);
    }
  }, [heroType]);

  // Different hero layouts
  const renderHeroStyle0 = () => (
    <section className={cn(
      "w-full py-12 md:py-24", 
      font,
      heroType === 'with-pattern' ? pattern : '',
      heroType === 'simple' ? colorScheme.secondary : ''
    )}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1 
            className={cn("text-4xl md:text-5xl lg:text-6xl font-bold mb-6", 
              heroType === 'simple' ? '' : 'text-slate-900'
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {headline}
          </motion.h1>
          <motion.p 
            className={cn("text-xl md:text-2xl mb-8", 
              heroType === 'simple' ? '' : 'text-slate-700'
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className={cn("px-6 py-3 rounded-lg text-lg", colorScheme.button)}>
              {cta}
            </button>
          </motion.div>
          
          {heroType === 'with-image' && (
            <motion.div 
              className="mt-12 w-full max-w-4xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt="Hero" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );

  const renderHeroStyle1 = () => (
    <section className={cn(
      "w-full py-12 md:py-24", 
      font,
      heroType === 'with-pattern' ? pattern : '',
      heroType === 'simple' ? colorScheme.primary : ''
    )}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {headline}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className={cn("px-6 py-3 rounded-lg text-lg", colorScheme.button)}>
                {cta}
              </button>
            </motion.div>
          </div>
          
          {heroType === 'with-image' ? (
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt="Hero" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          ) : (
            <motion.div 
              className={cn("flex-1 rounded-lg p-8", colorScheme.accent)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="aspect-video flex items-center justify-center">
                <div className="text-4xl font-bold">
                  {heroType === 'simple' ? '✨' : '🚀'}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );

  const renderHeroStyle2 = () => (
    <section className={cn(
      "w-full min-h-[80vh] flex items-center", 
      font,
      heroType === 'with-pattern' ? pattern : '',
      heroType === 'simple' ? colorScheme.neutral : ''
    )}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              className={cn("inline-block px-4 py-1 rounded-full text-sm font-medium mb-4", colorScheme.accent)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Introducing Our Platform
            </motion.div>
            <motion.h1 
              className={cn("text-4xl md:text-5xl lg:text-6xl font-bold mb-6", 
                heroType === 'simple' ? 'text-slate-900' : 'text-slate-900'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {headline}
            </motion.h1>
            <motion.p 
              className={cn("text-xl mb-8", 
                heroType === 'simple' ? 'text-slate-700' : 'text-slate-700'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subheadline}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className={cn("px-6 py-3 rounded-lg text-lg", colorScheme.button)}>
                {cta}
              </button>
              <button className="px-6 py-3 rounded-lg text-lg border border-slate-300 hover:bg-slate-100 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
          
          <div className="md:col-span-5 lg:col-span-6 flex items-center">
            {heroType === 'with-image' ? (
              <motion.div 
                className="w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <img 
                  src={heroImage} 
                  alt="Hero" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            ) : (
              <motion.div 
                className={cn("w-full rounded-lg p-8 aspect-square flex items-center justify-center", 
                  colorScheme.secondary
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="text-6xl">
                  {heroType === 'simple' ? '✨' : '🚀'}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  // Render the random hero style
  const heroStyles = [renderHeroStyle0, renderHeroStyle1, renderHeroStyle2];
  return heroStyles[heroStyle]();
}
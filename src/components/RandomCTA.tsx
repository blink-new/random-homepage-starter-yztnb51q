import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RandomCTAProps {
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    button: string;
  };
  cta: string;
  font: string;
}

export function RandomCTA({ colorScheme, cta, font }: RandomCTAProps) {
  const [ctaStyle] = useState<number>(Math.floor(Math.random() * 3));
  
  // Different CTA layouts
  const renderCTAStyle0 = () => (
    <section className={cn("w-full py-16", font, colorScheme.primary)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to get started?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of customers who are already using our platform to grow their business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className={cn("px-8 py-4 rounded-lg text-lg", colorScheme.accent)}>
              {cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const renderCTAStyle1 = () => (
    <section className={cn("w-full py-16", font, colorScheme.neutral)}>
      <div className="container mx-auto px-4">
        <div className={cn("rounded-xl p-8 md:p-12", colorScheme.primary)}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-2/3">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Take your business to the next level
              </motion.h2>
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Start your free trial today. No credit card required.
              </motion.p>
            </div>
            <motion.div
              className="md:w-1/3 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className={cn("px-8 py-4 rounded-lg text-lg w-full md:w-auto", colorScheme.accent)}>
                {cta}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCTAStyle2 = () => (
    <section className={cn("w-full py-16 relative overflow-hidden", font, colorScheme.secondary)}>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Start building today
              </motion.h2>
              <motion.p 
                className="text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our platform provides all the tools you need to succeed. Sign up now and see the difference.
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
            </div>
            <div className="flex justify-center">
              <motion.div 
                className={cn("w-64 h-64 rounded-full", colorScheme.accent)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🚀
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Render the random CTA style
  const ctaStyles = [renderCTAStyle0, renderCTAStyle1, renderCTAStyle2];
  return ctaStyles[ctaStyle]();
}
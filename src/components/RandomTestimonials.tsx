import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getRandomItems } from '@/lib/randomUtils';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface RandomTestimonialsProps {
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    button: string;
  };
  font: string;
}

// Random testimonials
const testimonials = [
  {
    quote: 'This product has completely revolutionized how we operate. The ROI has been incredible.',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'Techwave',
  },
  {
    quote: 'The intuitive interface and powerful features make this an essential tool for our team\'s daily workflow.',
    author: 'Michael Chen',
    role: 'Product Director',
    company: 'InnovateCorp',
  },
  {
    quote: 'We\'ve seen a 40% increase in productivity since implementing this solution across our organization.',
    author: 'Emily Rodriguez',
    role: 'Operations Manager',
    company: 'GlobalTech',
  },
  {
    quote: 'The support team has been exceptional. They go above and beyond to ensure our success.',
    author: 'David Kim',
    role: 'CTO',
    company: 'NextGen Solutions',
  },
  {
    quote: 'This platform offers the perfect balance of power and simplicity. It\'s been a game-changer for our team.',
    author: 'Lisa Wong',
    role: 'Marketing Director',
    company: 'Elevation Media',
  },
];

export function RandomTestimonials({ colorScheme, font }: RandomTestimonialsProps) {
  const [testimonialStyle] = useState<number>(Math.floor(Math.random() * 3));
  const [randomTestimonials] = useState<Testimonial[]>(
    getRandomItems(testimonials, Math.floor(Math.random() * 2) + 2)
  );
  
  // Different testimonial layouts
  const renderTestimonialStyle0 = () => (
    <section className={cn("w-full py-16", font, colorScheme.neutral)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg mb-0 max-w-2xl mx-auto">
            Don't just take our word for it. See what our users have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {randomTestimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={cn("p-6 rounded-lg", colorScheme.secondary)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-lg mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className={cn("w-10 h-10 rounded-full mr-3", colorScheme.accent)}></div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderTestimonialStyle1 = () => (
    <section className={cn("w-full py-16", font, colorScheme.primary)}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg mb-0 max-w-2xl mx-auto">
              Don't just take our word for it. See what our users have to say.
            </p>
          </div>
          
          <div className="space-y-8">
            {randomTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className={cn("p-6 rounded-lg", colorScheme.neutral)}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col items-center md:items-start">
                    <div className={cn("w-16 h-16 rounded-full mb-3", colorScheme.accent)}></div>
                    <div className="text-center md:text-left">
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm">{testimonial.role}</div>
                      <div className="text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-lg">{testimonial.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderTestimonialStyle2 = () => (
    <section className={cn("w-full py-16", font, colorScheme.secondary)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg mb-6">
              Don't just take our word for it. See what our users have to say about their experience with our platform.
            </p>
            <button className={cn("px-6 py-3 rounded-lg", colorScheme.button)}>
              Read More Stories
            </button>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-6">
              {randomTestimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className={cn("p-6 rounded-lg", colorScheme.neutral)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={cn("w-12 h-12 rounded-full mr-4", colorScheme.accent)}></div>
                    <div>
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-lg">{testimonial.quote}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Render the random testimonial style
  const testimonialStyles = [renderTestimonialStyle0, renderTestimonialStyle1, renderTestimonialStyle2];
  return testimonialStyles[testimonialStyle]();
}
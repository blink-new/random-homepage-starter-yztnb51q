// Random color palettes
export type ColorPalette = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export const colorPalettes: ColorPalette[] = [
  // Modern and clean
  {
    primary: '#3B82F6', // blue-500
    secondary: '#10B981', // emerald-500
    accent: '#8B5CF6', // violet-500
    background: '#F9FAFB', // gray-50
    text: '#1F2937', // gray-800
  },
  // Earthy tones
  {
    primary: '#D97706', // amber-600
    secondary: '#059669', // emerald-600
    accent: '#7C3AED', // violet-600
    background: '#FFFBEB', // amber-50
    text: '#4B5563', // gray-600
  },
  // Soft pastels
  {
    primary: '#EC4899', // pink-500
    secondary: '#8B5CF6', // violet-500
    accent: '#06B6D4', // cyan-500
    background: '#FDF2F8', // pink-50
    text: '#4B5563', // gray-600
  },
  // Dark mode
  {
    primary: '#6EE7B7', // emerald-300
    secondary: '#A78BFA', // violet-400
    accent: '#F472B6', // pink-400
    background: '#1F2937', // gray-800
    text: '#F9FAFB', // gray-50
  },
  // Bold and vibrant
  {
    primary: '#EF4444', // red-500
    secondary: '#F59E0B', // amber-500
    accent: '#3B82F6', // blue-500
    background: '#FFFFFF', // white
    text: '#111827', // gray-900
  },
  // Monochromatic blue
  {
    primary: '#2563EB', // blue-600
    secondary: '#60A5FA', // blue-400
    accent: '#1E40AF', // blue-800
    background: '#EFF6FF', // blue-50
    text: '#1E3A8A', // blue-900
  },
  // Sunset
  {
    primary: '#F97316', // orange-500
    secondary: '#EC4899', // pink-500
    accent: '#8B5CF6', // violet-500
    background: '#FFFBEB', // amber-50
    text: '#7C2D12', // orange-900
  },
];

// Random layout types
export type LayoutType = 'centered' | 'asymmetric' | 'split' | 'fullWidth' | 'cards';

// Random header types
export type HeaderType = 'minimal' | 'centered' | 'split' | 'transparent';

// Random fonts
export type FontPair = {
  heading: string;
  body: string;
};

export const fontPairs: FontPair[] = [
  { heading: 'Inter', body: 'Inter' },
  { heading: 'Playfair Display', body: 'Inter' },
  { heading: 'Montserrat', body: 'Roboto' },
  { heading: 'Poppins', body: 'Inter' },
  { heading: 'Merriweather', body: 'Inter' },
];

// Random company names
export const companyNames: string[] = [
  'Horizon',
  'Amplitude',
  'Nebula',
  'Quantum',
  'Atlas',
  'Everest',
  'Prism',
  'Vertex',
  'Lumina',
  'Infinite',
];

// Random taglines
export const taglines: string[] = [
  'Transform your digital experience',
  'Innovate with confidence',
  'Building tomorrow, today',
  'Your vision, our expertise',
  'Beyond expectations',
  'Simplify the complex',
  'Redefine what\'s possible',
  'Craft, create, captivate',
  'Excellence in every pixel',
  'Elevate your digital presence',
];

// Random features
export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    title: 'Powerful Analytics',
    description: 'Gain insights from comprehensive data analysis tools that help you make informed decisions.',
    icon: 'BarChart',
  },
  {
    title: 'Secure Platform',
    description: 'Rest easy knowing your data is protected with enterprise-grade security features.',
    icon: 'Shield',
  },
  {
    title: 'Global Reach',
    description: 'Connect with customers worldwide through our distributed network infrastructure.',
    icon: 'Globe',
  },
  {
    title: 'Intuitive Design',
    description: 'Experience seamless user interfaces that make complex tasks feel effortless.',
    icon: 'Layers',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamlessly connect with your existing cloud services for a unified workflow.',
    icon: 'Cloud',
  },
  {
    title: 'Smart Automation',
    description: 'Save time with intelligent automation tools that streamline your processes.',
    icon: 'Zap',
  },
  {
    title: 'Responsive Support',
    description: '24/7 customer service ensures you always have help when you need it.',
    icon: 'Headphones',
  },
  {
    title: 'Scalable Solutions',
    description: 'Grow with confidence knowing our platform scales with your business needs.',
    icon: 'TrendingUp',
  },
];

// Random testimonials
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'This platform completely transformed how we approach our digital strategy. The results have been remarkable.',
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
    quote: 'The customer support team went above and beyond to ensure our success. Truly impressed with the service.',
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

// Random hero images from Unsplash
export const heroImages: string[] = [
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80',
  'https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
  'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3106&q=80',
  'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
];

// Random CTAs
export const ctas: string[] = [
  'Get Started',
  'Start Free Trial',
  'Learn More',
  'Join Now',
  'Discover',
  'Try It Free',
  'Book a Demo',
  'Explore Features',
];

// Helper functions for randomization
export function getRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFeatures(count: number): Feature[] {
  // Shuffle array and take first 'count' elements
  return [...features]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

export function getRandomTestimonials(count: number): Testimonial[] {
  // Shuffle array and take first 'count' elements
  return [...testimonials]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

// Generate unique content for the current page load
export function generateRandomContent() {
  return {
    colorPalette: getRandomItem(colorPalettes),
    fontPair: getRandomItem(fontPairs),
    layout: getRandomItem<LayoutType>(['centered', 'asymmetric', 'split', 'fullWidth', 'cards']),
    headerType: getRandomItem<HeaderType>(['minimal', 'centered', 'split', 'transparent']),
    companyName: getRandomItem(companyNames),
    tagline: getRandomItem(taglines),
    heroImage: getRandomItem(heroImages),
    cta: getRandomItem(ctas),
    features: getRandomFeatures(getRandomNumber(3, 6)),
    testimonials: getRandomTestimonials(getRandomNumber(1, 3)),
  };
}
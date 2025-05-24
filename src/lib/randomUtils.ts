// Utility functions for generating random homepage elements

// Random color schemes (tailwind class combinations)
export const colorSchemes = [
  {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-blue-100 text-blue-900',
    accent: 'bg-yellow-400 text-blue-900',
    neutral: 'bg-slate-100 text-slate-900',
    button: 'bg-blue-600 hover:bg-blue-700 text-white',
    name: 'Blue Ocean',
  },
  {
    primary: 'bg-purple-600 text-white',
    secondary: 'bg-purple-100 text-purple-900',
    accent: 'bg-pink-400 text-white',
    neutral: 'bg-slate-100 text-slate-900',
    button: 'bg-purple-700 hover:bg-purple-800 text-white',
    name: 'Purple Haze',
  },
  {
    primary: 'bg-emerald-600 text-white',
    secondary: 'bg-emerald-100 text-emerald-900',
    accent: 'bg-yellow-400 text-emerald-900',
    neutral: 'bg-slate-100 text-slate-900',
    button: 'bg-emerald-700 hover:bg-emerald-800 text-white',
    name: 'Emerald Forest',
  },
  {
    primary: 'bg-rose-600 text-white',
    secondary: 'bg-rose-100 text-rose-900',
    accent: 'bg-amber-400 text-rose-900',
    neutral: 'bg-slate-100 text-slate-900',
    button: 'bg-rose-700 hover:bg-rose-800 text-white',
    name: 'Rose Garden',
  },
  {
    primary: 'bg-amber-600 text-white',
    secondary: 'bg-amber-100 text-amber-900',
    accent: 'bg-blue-400 text-white',
    neutral: 'bg-slate-100 text-slate-900',
    button: 'bg-amber-700 hover:bg-amber-800 text-white',
    name: 'Amber Glow',
  },
  {
    primary: 'bg-slate-800 text-white',
    secondary: 'bg-slate-200 text-slate-900',
    accent: 'bg-cyan-400 text-slate-900',
    neutral: 'bg-white text-slate-900',
    button: 'bg-slate-900 hover:bg-black text-white',
    name: 'Dark Mode',
  },
];

// Random fonts
export const fonts = [
  'font-sans',
  'font-serif',
  'font-mono',
];

// Random spacing values
export const spacingValues = [
  'p-4 md:p-6 lg:p-8',
  'p-6 md:p-8 lg:p-10',
  'p-8 md:p-10 lg:p-12',
];

// Random layout types
export const layoutTypes = [
  'centered',
  'split',
  'asymmetric',
  'grid',
];

// Random hero types
export const heroTypes = [
  'simple',
  'with-image',
  'with-pattern',
  'with-video',
];

// Random company names
export const companyNames = [
  'Quantum Dynamics',
  'Stellar Systems',
  'Horizon Innovation',
  'Aurora Technologies',
  'Fusion Solutions',
  'Echo Enterprises',
  'Nebula Networks',
  'Prism Technologies',
  'Vertex Ventures',
  'Zenith Digital',
];

// Random feature sets
export const features = [
  {
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our powerful analytics platform.',
    icon: 'BarChart',
  },
  {
    title: 'Cloud Storage',
    description: 'Secure and scalable storage solutions for all your data needs.',
    icon: 'Cloud',
  },
  {
    title: 'Smart Automation',
    description: 'Save time and reduce errors with intelligent automation.',
    icon: 'Zap',
  },
  {
    title: 'Global Reach',
    description: 'Connect with customers and partners around the world.',
    icon: 'Globe',
  },
  {
    title: 'Premium Support',
    description: '24/7 support from our team of experts.',
    icon: 'LifeBuoy',
  },
  {
    title: 'Robust Security',
    description: 'Enterprise-grade security to protect your data.',
    icon: 'Shield',
  },
  {
    title: 'Mobile Integration',
    description: 'Seamless experience across all your devices.',
    icon: 'Smartphone',
  },
  {
    title: 'AI-Powered',
    description: 'Harness the power of artificial intelligence.',
    icon: 'Brain',
  },
];

// Random headlines
export const headlines = [
  'Transform Your Business with Our Solution',
  'The Future of Technology is Here',
  'Simplify, Streamline, Succeed',
  'Innovation at Your Fingertips',
  'Building Tomorrow\'s Solutions Today',
  'Elevate Your Experience',
  'Power Your Potential',
  'Redefine What\'s Possible',
  'The Smart Choice for Modern Business',
  'Your Vision, Our Expertise',
];

// Random sub-headlines
export const subheadlines = [
  'Powerful tools to take your business to the next level.',
  'Streamlined solutions for the modern workplace.',
  'Cutting-edge technology that delivers real results.',
  'Simple, elegant, and effective solutions for complex problems.',
  'Join thousands of satisfied customers worldwide.',
  'Designed with your needs in mind.',
  'Experience the difference that quality makes.',
  'Unlock your full potential with our suite of tools.',
  'Stay ahead of the competition with our innovative platform.',
  'Everything you need, nothing you don\'t.',
];

// Random CTAs
export const ctas = [
  'Get Started',
  'Try it Free',
  'Learn More',
  'Sign Up Now',
  'Request a Demo',
  'Join Today',
  'Explore Features',
  'Start Your Trial',
  'See it in Action',
  'Discover More',
];

// Random testimonials
export const testimonials = [
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

// Helper function to get a random item from an array
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to get random items without repeating
export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Function to generate a random number between min and max
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random website data
export function generateRandomWebsite() {
  const colorScheme = getRandomItem(colorSchemes);
  const font = getRandomItem(fonts);
  const spacing = getRandomItem(spacingValues);
  const layout = getRandomItem(layoutTypes);
  const heroType = getRandomItem(heroTypes);
  const companyName = getRandomItem(companyNames);
  const headline = getRandomItem(headlines);
  const subheadline = getRandomItem(subheadlines);
  const cta = getRandomItem(ctas);
  const featureList = getRandomItems(features, getRandomNumber(3, 6));
  
  return {
    colorScheme,
    font,
    spacing,
    layout,
    heroType,
    companyName,
    headline,
    subheadline,
    cta,
    featureList
  };
}

// Function to generate a random content
export function generateRandomContent() {
  return {
    colorPalette: getRandomItem(colorSchemes),
    fontPair: getRandomItem(fonts),
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
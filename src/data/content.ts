// Sample content for random homepage elements

export interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  logo?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface NavigationItem {
  text: string;
  url: string;
}

// Sample company information
export const companyOptions: CompanyInfo[] = [
  {
    name: "Nimbus Tech",
    tagline: "Cloud solutions for tomorrow's challenges",
    description: "We provide scalable cloud infrastructure for businesses of all sizes. Our solutions are designed to grow with your needs."
  },
  {
    name: "Evergreen Design",
    tagline: "Sustainable design for a better world",
    description: "Creating beautiful, eco-friendly designs that make a difference. We believe in the power of design to change lives."
  },
  {
    name: "Fusion Foods",
    tagline: "Blending flavors from around the world",
    description: "Discover culinary delights that bring together traditions from across the globe. Experience taste like never before."
  },
  {
    name: "Quantum Fitness",
    tagline: "Revolutionize your workout routine",
    description: "Science-backed fitness programs designed to maximize results in minimum time. Transform your body and mind."
  },
  {
    name: "Stellar Photography",
    tagline: "Capturing moments that last a lifetime",
    description: "Professional photography services for all your special moments. From weddings to corporate events, we've got you covered."
  }
];

// Sample hero content
export const heroOptions: ContentItem[] = [
  {
    id: 1,
    title: "Discover a New Way Forward",
    description: "Innovative solutions for modern problems. Our team of experts is ready to help you navigate the challenges of today's world.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
    ctaText: "Get Started"
  },
  {
    id: 2,
    title: "Transform Your Experience",
    description: "Revolutionize the way you interact with technology. Our platform provides seamless integration across all your devices.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Learn More"
  },
  {
    id: 3,
    title: "Sustainable Solutions for Tomorrow",
    description: "Eco-friendly products designed with the future in mind. Join us in our mission to create a better world for future generations.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Join the Movement"
  },
  {
    id: 4,
    title: "Crafted with Precision",
    description: "Expertly designed products that stand the test of time. Quality craftsmanship meets innovative design in everything we create.",
    image: "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Explore Products"
  },
  {
    id: 5,
    title: "Your Journey Begins Here",
    description: "Embark on an adventure of discovery and growth. Our community of like-minded individuals is waiting to welcome you.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Start Now"
  }
];

// Sample feature content
export const featureOptions: ContentItem[] = [
  {
    id: 1,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics tools. Track performance, identify trends, and make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Seamless Integration",
    description: "Connect with your favorite tools and platforms effortlessly. Our system works with the services you already use.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Our dedicated team is always available to help. Get assistance whenever you need it, day or night.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Cloud Storage",
    description: "Secure, scalable storage for all your important files. Access your data from anywhere, anytime.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Mobile Optimization",
    description: "A seamless experience across all devices. Our responsive design ensures your content looks great everywhere.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Customizable Dashboards",
    description: "Create personalized views of your data. Arrange widgets and visualizations to suit your unique needs.",
    image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2070&auto=format&fit=crop"
  }
];

// Sample testimonial content
export const testimonialOptions: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Global Enterprises",
    text: "This product has completely transformed our workflow. The team has been more productive than ever, and our clients are thrilled with the results.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1922&auto=format&fit=crop&crop=faces&faceindex=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Tech Innovations",
    text: "The support team has been incredible. Whenever we've had questions or concerns, they've been quick to respond and incredibly helpful.",
    avatar: "https://images.unsplash.com/photo-1600878459108-617a253537d5?q=80&w=1974&auto=format&fit=crop&crop=faces&faceindex=1"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Small Business Owner",
    company: "Craft Collective",
    text: "As a small business, we needed a solution that was both affordable and powerful. This exceeded our expectations on both fronts.",
    avatar: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?q=80&w=2070&auto=format&fit=crop&crop=faces&faceindex=1"
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Project Manager",
    company: "BuildRight Construction",
    text: "The interface is intuitive and user-friendly. Our team was able to get up to speed quickly, with minimal training required.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&crop=faces&faceindex=1"
  }
];

// Sample pricing plans
export const pricingOptions: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: "$19",
    period: "per month",
    description: "Perfect for individuals and small projects",
    features: [
      "5 projects",
      "10GB storage",
      "Basic analytics",
      "24/7 support",
      "1 user"
    ],
    isPopular: false,
    ctaText: "Get Started"
  },
  {
    id: 2,
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "Ideal for growing businesses and teams",
    features: [
      "20 projects",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "5 users"
    ],
    isPopular: true,
    ctaText: "Try Pro"
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "Full-featured solution for large organizations",
    features: [
      "Unlimited projects",
      "200GB storage",
      "Custom reports",
      "Dedicated account manager",
      "15 users"
    ],
    isPopular: false,
    ctaText: "Contact Sales"
  }
];

// Sample blog posts
export const blogOptions: ContentItem[] = [
  {
    id: 1,
    title: "10 Tips for Improving Productivity",
    description: "Discover practical strategies to boost your efficiency and get more done in less time. Our experts share their top productivity hacks.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Read More"
  },
  {
    id: 2,
    title: "The Future of Remote Work",
    description: "Explore how remote work is evolving and what it means for businesses and employees. Learn how to build a thriving remote culture.",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
    ctaText: "Read More"
  },
  {
    id: 3,
    title: "Sustainable Business Practices",
    description: "How companies are reducing their environmental impact while improving their bottom line. Case studies and actionable advice.",
    image: "https://images.unsplash.com/photo-1497355366560-b8686b7d2e70?q=80&w=2073&auto=format&fit=crop",
    ctaText: "Read More"
  },
  {
    id: 4,
    title: "Emerging Tech Trends",
    description: "Stay ahead of the curve with our analysis of the latest technological innovations and their potential impact on various industries.",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074&auto=format&fit=crop",
    ctaText: "Read More"
  }
];

// Sample navigation items
export const navigationOptions: NavigationItem[][] = [
  [
    { text: "Home", url: "#" },
    { text: "Features", url: "#features" },
    { text: "Pricing", url: "#pricing" },
    { text: "About", url: "#about" },
    { text: "Contact", url: "#contact" }
  ],
  [
    { text: "Products", url: "#products" },
    { text: "Solutions", url: "#solutions" },
    { text: "Resources", url: "#resources" },
    { text: "Blog", url: "#blog" },
    { text: "Support", url: "#support" }
  ],
  [
    { text: "Services", url: "#services" },
    { text: "Portfolio", url: "#portfolio" },
    { text: "Team", url: "#team" },
    { text: "Testimonials", url: "#testimonials" },
    { text: "FAQ", url: "#faq" }
  ]
];

// Get random content
export const getRandomCompanyInfo = (): CompanyInfo => {
  return companyOptions[Math.floor(Math.random() * companyOptions.length)];
};

export const getRandomHero = (): ContentItem => {
  return heroOptions[Math.floor(Math.random() * heroOptions.length)];
};

export const getRandomFeatures = (count: number = 3): ContentItem[] => {
  const shuffled = [...featureOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getRandomTestimonials = (count: number = 2): Testimonial[] => {
  const shuffled = [...testimonialOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getRandomPricingPlans = (): PricingPlan[] => {
  return pricingOptions;
};

export const getRandomBlogPosts = (count: number = 3): ContentItem[] => {
  const shuffled = [...blogOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getRandomNavigation = (): NavigationItem[] => {
  return navigationOptions[Math.floor(Math.random() * navigationOptions.length)];
};
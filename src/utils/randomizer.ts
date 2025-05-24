// Define types for our different layout and style options
export type LayoutType = 'hero' | 'grid' | 'columns' | 'minimal' | 'magazine';
export type ColorScheme = 'modern' | 'pastel' | 'neon' | 'earthy' | 'monochrome' | 'gradient';
export type FontPair = {
  headingFont: string;
  bodyFont: string;
};
export type SpacingScale = 'compact' | 'balanced' | 'airy';
export type ImageStyle = 'rounded' | 'circle' | 'square' | 'polaroid' | 'overlap';
export type AnimationStyle = 'fade' | 'slide' | 'bounce' | 'zoom' | 'none';

// Color palettes for each scheme
export const colorSchemes: Record<ColorScheme, { 
  background: string, 
  text: string, 
  primary: string, 
  secondary: string, 
  accent: string 
}> = {
  modern: {
    background: 'bg-slate-50',
    text: 'text-slate-900',
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-800',
    accent: 'text-blue-600'
  },
  pastel: {
    background: 'bg-pink-50',
    text: 'text-slate-800',
    primary: 'bg-pink-400 hover:bg-pink-500 text-white',
    secondary: 'bg-blue-200 hover:bg-blue-300 text-blue-800',
    accent: 'text-pink-500'
  },
  neon: {
    background: 'bg-black',
    text: 'text-white',
    primary: 'bg-green-500 hover:bg-green-400 text-black',
    secondary: 'bg-purple-600 hover:bg-purple-500 text-white',
    accent: 'text-green-400'
  },
  earthy: {
    background: 'bg-amber-50',
    text: 'text-stone-800',
    primary: 'bg-amber-700 hover:bg-amber-800 text-white',
    secondary: 'bg-stone-200 hover:bg-stone-300 text-stone-800',
    accent: 'text-amber-700'
  },
  monochrome: {
    background: 'bg-gray-100',
    text: 'text-gray-900',
    primary: 'bg-gray-800 hover:bg-gray-900 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    accent: 'text-gray-700'
  },
  gradient: {
    background: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    text: 'text-white',
    primary: 'bg-white hover:bg-gray-100 text-indigo-600',
    secondary: 'bg-indigo-800 hover:bg-indigo-900 text-white',
    accent: 'text-yellow-300'
  }
};

// Font pairs
export const fontPairs: FontPair[] = [
  { headingFont: 'font-sans', bodyFont: 'font-serif' },
  { headingFont: 'font-serif', bodyFont: 'font-sans' },
  { headingFont: 'font-montserrat', bodyFont: 'font-merriweather' },
  { headingFont: 'font-poppins', bodyFont: 'font-roboto' },
  { headingFont: 'font-roboto', bodyFont: 'font-sans' },
  { headingFont: 'font-serif', bodyFont: 'font-montserrat' }
];

// Spacing scales
export const spacingScales: Record<SpacingScale, { 
  container: string, 
  section: string, 
  element: string 
}> = {
  compact: {
    container: 'p-2 md:p-4',
    section: 'my-4 py-4',
    element: 'p-2 m-2'
  },
  balanced: {
    container: 'p-4 md:p-6',
    section: 'my-8 py-6',
    element: 'p-4 m-4'
  },
  airy: {
    container: 'p-6 md:p-10',
    section: 'my-12 py-10',
    element: 'p-6 m-6'
  }
};

// Button styles
export const buttonStyles = [
  'rounded-md',
  'rounded-full',
  'rounded-none border-2',
  'rounded-lg shadow-md',
  'px-4 py-2 uppercase tracking-wide'
];

// Helper functions to randomly select options
export const getRandomLayout = (): LayoutType => {
  const layouts: LayoutType[] = ['hero', 'grid', 'columns', 'minimal', 'magazine'];
  return layouts[Math.floor(Math.random() * layouts.length)];
};

export const getRandomColorScheme = (): ColorScheme => {
  const schemes: ColorScheme[] = ['modern', 'pastel', 'neon', 'earthy', 'monochrome', 'gradient'];
  return schemes[Math.floor(Math.random() * schemes.length)];
};

export const getRandomFontPair = (): FontPair => {
  return fontPairs[Math.floor(Math.random() * fontPairs.length)];
};

export const getRandomSpacingScale = (): SpacingScale => {
  const scales: SpacingScale[] = ['compact', 'balanced', 'airy'];
  return scales[Math.floor(Math.random() * scales.length)];
};

export const getRandomButtonStyle = (): string => {
  return buttonStyles[Math.floor(Math.random() * buttonStyles.length)];
};

export const getRandomImageStyle = (): ImageStyle => {
  const styles: ImageStyle[] = ['rounded', 'circle', 'square', 'polaroid', 'overlap'];
  return styles[Math.floor(Math.random() * styles.length)];
};

export const getRandomAnimationStyle = (): AnimationStyle => {
  const styles: AnimationStyle[] = ['fade', 'slide', 'bounce', 'zoom', 'none'];
  return styles[Math.floor(Math.random() * styles.length)];
};

// Generate a random homepage configuration
export const generateRandomHomepage = () => {
  return {
    layout: getRandomLayout(),
    colorScheme: getRandomColorScheme(),
    fontPair: getRandomFontPair(),
    spacingScale: getRandomSpacingScale(),
    buttonStyle: getRandomButtonStyle(),
    imageStyle: getRandomImageStyle(),
    animationStyle: getRandomAnimationStyle()
  };
};
export const PROFILE = {
  monogram: 'Okparajr',
  name: 'Anointed Okpara',
  fullName: 'Anointed Okpara',
  role: 'Frontend Product Engineer',
  location: 'Abakaliki, Ebonyi State, Nigeria',
  email: 'anointedokpara308@gmail.com',
  github: 'https://github.com/anointedokpara308-blip',
  twitter: 'https://x.com/okpara59',
  linkedin: 'https://linkedin.com/in/anointed-okpara-31493b398',
  availability: 'Open to frontend roles & freelance builds',
  qualifications:
    'Frontend product engineer building responsive interfaces, interactive and clean web applications.',
  headline: 'I build fast, practical web products with clean interfaces.',
  bio: 'Frontend engineer focused on turning complex workflows into calm, responsive React applications. I care about clear information hierarchy, predictable state, and shipping software people actually use.',
};

export const SUMMARY_STATS = [
  { label: 'Core Stack', value: 'React · Tailwind · JS' },
  { label: 'Focus', value: 'Web Apps & Tools' },
  { label: 'Architecture', value: 'Modular & Responsive' },
  { label: 'Status', value: 'Shipping Actively' },
];

export const ABOUT = {
  eyebrow: 'About',
  heading: 'Focused on practical software, clean architecture, and real-world usability.',
  paragraphs: [
    'I approach frontend engineering from a product perspective first. Rather than over-engineering interfaces with heavy visual noise, I focus on layout clarity, fast load times, and intuitive state transitions so users can accomplish what they came for without friction.',
    'From interactive financial calculators and trading tools to curated software directories and media players, I enjoy taking ideas from rough wireframes to deployed, responsive web applications.',
  ],
  principles: [
    {
      label: 'Product Mindset',
      detail: 'Every component is built around user intent, clear hierarchy, and measurable utility.',
    },
    {
      label: 'Clean Codebases',
      detail: 'Modular React components and separated data layers that stay easy to maintain and scale.',
    },
    {
      label: 'Responsive Craft',
      detail: 'Interfaces tested across real mobile and desktop viewports with accessible keyboard controls.',
    },
  ],
};

export const PROJECTS = [
  {
    id: 'market-path',
    title: 'Market Path',
    category: 'FinTech & Education',
    year: '2026',
    summary:
      'Responsive trading education and calculation platform featuring live market tickers, interactive risk tools, structured learning paths, and clear broker comparisons.',
    problem:
      'Newer traders often jump into market setups without clear risk math or structured guidance, while existing tools feel cluttered.',
    architecture:
      'Modular React state for interactive calculations, broker comparison views, and guided learning tracks styled with Tailwind CSS.',
    highlights: [
      'Live market ticker tape & trading calculators',
      'Broker comparison matrix & structured learning roadmap',
      'Risk assessment quiz with responsive mobile layout',
    ],
    stack: ['React', 'Tailwind CSS', 'TradingView Widget', 'Calculators'],
    liveUrl: 'https://market-path-nine.vercel.app',
    repoUrl: '',
    previewType: 'finance',
  },
  {
    id: 'music-plus',
    title: 'Music Plus',
    category: 'Media & UI',
    year: '2026',
    summary:
      'Music streaming and discovery interface built with React, Tailwind CSS, and Lucide React—featuring structured playlist grids like Global Hits, Podcasts & Shows, Trending Afrobeats, Pop Rising, and Chill Vibes with smooth navigation.',
    problem:
      'Many web audio interfaces lose navigation context or crowd small screens with dense controls.',
    architecture:
      'React Router views paired with a custom PlayerContext and responsive playlist grids.',
    highlights: [
      'Custom PlayerContext for shared playback state',
      'Curated grids for Global Hits, Trending Afrobeats, Pop Rising, and Chill Vibes',
      'Responsive multi-view navigation with Lucide icons',
    ],
    stack: ['React', 'React Router', 'Tailwind CSS', 'Lucide Icons'],
    liveUrl: 'https://musicplus-self.vercel.app',
    repoUrl: '',
    previewType: 'audio',
  },
];

export const APPROACH_PILLARS = [
  {
    number: '01',
    title: 'Clarity Before Decoration',
    description:
      'Every screen starts with what the user needs to decide or do next. Restraint in spacing, contrast, and motion keeps the product calm.',
  },
  {
    number: '02',
    title: 'Predictable UI Architecture',
    description:
      'I structure components around clean data flow and reusable primitives so adding features later does not break existing layouts.',
  },
  {
    number: '03',
    title: 'Built to Ship & Scale',
    description:
      'Fast load times, responsive behavior on real mobile screens, and sensible edge-case handling from day one.',
  },
];

export const STACK_GROUPS = [
  {
    title: 'Frontend',
    items: ['React 19', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Responsive UI'],
  },
  {
    title: 'Styling & Motion',
    items: ['Tailwind CSS v4', 'CSS Grid & Flexbox', 'Vanta & Three.js', 'Lucide Icons'],
  },
  {
    title: 'Tooling & Workflow',
    items: ['Vite', 'Git & GitHub', 'Component Systems', 'Browser DevTools'],
  },
  {
    title: 'Product Focus',
    items: ['Calculators & Simulators', 'Directories & Feeds', 'Landing Pages', 'UX Polish'],
  },
];

export const EXPERIENCE = [
  {
    period: '2025 — Present',
    role: 'Independent Frontend Builder',
    org: 'Personal & Client Web Apps',
    summary:
      'Designing and building interactive web tools, educational calculators, directories, and responsive frontends end-to-end.',
  },
  {
    period: '2024 — 2025',
    role: 'Frontend Developer',
    org: 'Product & Interface Sprints',
    summary:
      'Built modular React interfaces, data-driven views, and mobile-first layouts with a focus on speed and usability.',
  },
];
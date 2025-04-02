export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
  highlights: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    title: 'Decentralized CrowdFunding',
    description: 'A blockchain-based platform for transparent and trustless fundraising, built with React, TailwindCSS, and Ethereum.',
    image: '/images/projects/crowdfunding.jpg',
    tags: ['React', 'TailwindCSS', 'Ethereum', 'Ether.js'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Built the UI and frontend for a decentralized crowdfunding platform.',
      'Ensured a trustless and transparent fundraising experience.',
      'Integrated Ethereum blockchain using Ether.js.'
    ],
    featured: true
  },
  {
    title: 'GharDekho - Real Estate Platform',
    description: 'A comprehensive real estate platform with advanced search and filtering capabilities, built with React and Firebase.',
    image: '/images/projects/ghardekho.jpg',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Built the frontend and implemented JWT authentication.',
      'Integrated advanced search filters for property type, price, and location.'
    ],
    featured: true
  },
  {
    title: 'ADAA Jaipur - Women Clothing Platform',
    description: 'An e-commerce platform for women\'s clothing with secure payments and inventory management.',
    image: '/images/projects/adaa.jpg',
    tags: ['MERN', 'TailwindCSS', 'JWT'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Developed the backend and admin panel for a clothing e-commerce site.',
      'Integrated secure payments and inventory management.',
      'Designed a responsive UI using React.js and TailwindCSS.'
    ],
    featured: true
  },
  {
    title: 'Personal Blog Platform',
    description: 'A feature-rich blogging platform with markdown support, comment system, and user authentication.',
    image: '/images/projects/blog.jpg',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Auth.js'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Implemented server-side rendering for better SEO performance',
      'Created a custom markdown editor with live preview',
      'Built a comprehensive comment system with nested replies'
    ]
  },
  {
    title: 'AI Chat Assistant',
    description: 'An AI-powered chat interface that leverages OpenAI\'s GPT models to provide conversational responses.',
    image: '/images/projects/ai-chat.jpg',
    tags: ['React', 'Node.js', 'OpenAI API', 'Socket.io'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Designed a responsive chat interface with real-time functionality',
      'Integrated with OpenAI\'s API for intelligent responses',
      'Implemented conversation context management for better responses'
    ]
  },
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive admin dashboard for e-commerce businesses with sales analytics, inventory management, and order processing.',
    image: '/images/projects/dashboard.jpg',
    tags: ['React', 'Redux', 'Chart.js', 'Material UI'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Built interactive data visualizations for sales analytics',
      'Implemented real-time inventory management system',
      'Created an intuitive order processing workflow'
    ]
  },
  {
    title: 'Weather Application',
    description: 'A mobile-friendly weather app with 7-day forecasts, location-based weather updates, and customizable alerts.',
    image: '/images/projects/weather.jpg',
    tags: ['React Native', 'Weather API', 'Geolocation', 'Push Notifications'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Integrated with OpenWeatherMap API for accurate weather data',
      'Implemented geolocation for automatic local weather updates',
      'Designed an intuitive and visually appealing user interface'
    ]
  },
  {
    title: 'Task Management App',
    description: 'A productivity tool for managing tasks, projects, and deadlines with collaborative features.',
    image: '/images/projects/task-app.jpg',
    tags: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Built a responsive interface with drag-and-drop functionality',
      'Implemented real-time updates for collaborative task management',
      'Designed as a Progressive Web App for offline functionality'
    ]
  },
  {
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application with workout plans, progress tracking, and nutritional guidance.',
    image: '/images/projects/fitness.jpg',
    tags: ['Flutter', 'Firebase', 'Health API', 'SQLite'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Designed an intuitive interface for tracking various workout metrics',
      'Integrated with health APIs for step counting and activity monitoring',
      'Implemented personalized workout recommendations based on user goals'
    ]
  }
]; 
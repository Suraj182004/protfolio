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
    image: '/images/projects/image.png',
    tags: ['React', 'TailwindCSS', 'Ethereum', 'Ether.js'],
    demoLink: 'https://crowdfundingblockchain.vercel.app/',
    repoLink: 'https://github.com/MananPoojara/Decentralized-CrowdFunding',
    highlights: [
      'Built the UI and frontend for a decentralized crowdfunding platform.',
      'Ensured a trustless and transparent fundraising experience.',
      'Integrated Ethereum blockchain using Ether.js.'
    ],
    
  },
  {
    title: 'GharDekho - Real Estate Platform',
    description: 'A comprehensive real estate platform with advanced search and filtering capabilities, built with React and Firebase.',
    image: '/images/projects/image1.png',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    demoLink: 'https://ghar-dekho-brown.vercel.app/',
    repoLink: 'https://github.com/Suraj182004/MarwadiVilla',
    highlights: [
      'Built the frontend and implemented JWT authentication.',
      'Integrated advanced search filters for property type, price, and location.'
    ],
    
    
  },
  {
    title: 'ADAA Jaipur - Women Clothing Platform',
    description: 'An e-commerce platform for women\'s clothing with secure payments and inventory management.',
    image: '/images/projects/image2.png',
    tags: ['MERN', 'TailwindCSS', 'JWT'],
    demoLink: 'https://adaa-jaipur-ein-bin-tin.vercel.app/',
    repoLink: 'https://github.com/Suraj182004/Adaa-Jaipur',
    highlights: [
      'Developed the backend and admin panel for a clothing e-commerce site.',
      'Integrated secure payments and inventory management.',
      'Designed a responsive UI using React.js and TailwindCSS.'
    ],
    featured: true
    
  },
  {
    title: 'VishkARma',
    description: 'VishkARma is an Augmented Reality (AR) assistance tool designed for visualizing 3D-generated objects in real-world environments. This application helps VFX professionals streamline their workflow by allowing users to capture 2D images, convert them into 3D models using Blender, and place these models onto detected surfaces in AR via Unity.',
    image: '/images/projects/blog.jpg',
    tags: ['Unity', 'ARCore', 'C#', 'Blender'],
    demoLink: '#',
    repoLink: 'https://github.com/surajyaligar2004/VishkARma',
    highlights: [
      'Developed the AR functionality using Unity and ARCore.',
      'Created a 3D model from 2D image using Blender.',
      'Integrated AR functionality using Unity and ARCore.'
    ]
  },
  {
    title: 'Saaraansh - AI-Powered PDF Summarizer ',
    description: 'Saaraansh is an advanced AI-powered application that transforms lengthy PDFs into concise, actionable summaries within seconds. Save hours of reading time while retaining all key information from your documents.',
    image: '/images/projects/image3.png',
    tags: [' Next.js 15', 'Tailwind CSS v4', 'Clerk', 'PostgreSQL','Gemini API'],
    demoLink: 'https://saaraansh-summarizer.vercel.app/',
    repoLink: 'https://github.com/Suraj182004/saaraansh',
    highlights: [
      'Designed a responsive chat interface with real-time functionality',
      'Integrated with OpenAI\'s API for intelligent responses',
      'Implemented conversation context management for better responses'
    ],
    featured: true
  },
  {
    title: 'KaamKar - Your All-in-One Productivity Suite',
    description: 'KaamKar is a comprehensive productivity suite designed to help you manage tasks, notes, finances, and goals. Stay organized, focused, and achieve more every day.',
    image: '/images/projects/image4.png',
    tags: ['Next.js', ' shadcn/ui', 'Firebase Auth', 'Framer Motion'],
    demoLink: 'https://kaamkar-ct31.onrender.com/',
    repoLink: 'https://github.com/Suraj182004/kaamkar',
    highlights: [
      'Developed a task management system with priority levels and due dates.',
      'Implemented a note-taking feature with markdown support and search functionality.',
      'Created a financial dashboard for tracking income, expenses, and savings.'
    ],
    featured: true
  },
 
]; 
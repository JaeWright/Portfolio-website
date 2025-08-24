import { Project, Experience, Skill, ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  phone: '(289)-200-0793',
  email: 'jaelen.n.wright@gmail.com',
  linkedin: 'linkedin.com/in/jaelenwright',
  github: 'github.com/JaeWright'
};

export const skills: Skill[] = [
  {
    category: 'Languages & Frameworks',
    items: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'Java', 'HTML', 'CSS', 'R']
  },
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'TailwindCSS', 'Vite', 'Flutter', 'Svelte']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Firebase Functions', 'PHP (WordPress)', 'Temporal.io']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase']
  },
  {
    category: 'Tools',
    items: ['Docker', 'Git', 'Figma', 'WordPress', 'Google Analytics']
  }
];

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Full-Stack Developer',
    company: 'Crawfty',
    location: 'Remote',
    startDate: 'May 2025',
    endDate: 'Present',
    description: [
      'Worked on multiple projects featured on crawfty.com/portfolio, delivering scalable solutions across web and mobile platforms.',
      'Built production-ready applications leveraging React, Node.js, MongoDB, and Docker in cross-functional development cycles.',
      'Implemented robust APIs and frontend integrations tailored to diverse industry projects spanning e-commerce, logistics, and media.'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker']
  },
  {
    id: '2',
    title: 'Junior Full-Stack Developer',
    company: 'ByllKreate',
    location: 'Remote',
    startDate: 'Nov. 2024',
    endDate: 'May 2025',
    description: [
      'Migrated large Angular apps to React with improved performance and maintainability.',
      'Rebuilt custom WordPress plugins using Svelte and integrated backend APIs for vehicle import/shipping calculators.',
      'Developed a multiplayer Domino game using React, Temporal.io, and custom APIs.',
      'Contributed to mobile, web, and desktop apps using Flutter, Docker, and Firebase.',
      'Collaborated in sprint planning, QA reviews, and cross-functional development cycles.'
    ],
    technologies: ['React', 'Angular', 'Svelte', 'Flutter', 'Temporal.io', 'Docker', 'Firebase']
  },
  {
    id: '3',
    title: 'Junior Developer',
    company: 'XRStudios',
    location: 'Remote',
    startDate: 'Jun. 2024',
    endDate: 'Nov. 2024',
    description: [
      'Contributed to a WordPress-based courier platform, enhancing functionality and optimizing user workflows.',
      'Developed a litigation platform for the Jamaican government using MongoDB, React, Node.js, and custom APIs.',
      'Delivered scalable backend integrations and clean UI components tailored to stakeholder requirements.'
    ],
    technologies: ['WordPress', 'MongoDB', 'React', 'Node.js']
  }
];

export const liveProjects: Project[] = [
  {
    id: '1',
    title: 'OX Courier System',
    description: 'A comprehensive courier management platform built for efficient delivery tracking, route optimization, and customer management. Features real-time tracking, automated notifications, and comprehensive reporting.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    link: 'https://oxcourier.byllkreate.com',
    type: 'live'
  },
  {
    id: '2',
    title: 'CaptureLand',
    description: 'An innovative real estate platform that combines property photography, virtual tours, and marketing tools. Helps real estate professionals showcase properties with high-quality media and interactive experiences.',
    stack: ['React', 'Next.js', 'TypeScript', 'Firebase', 'Stripe'],
    link: 'https://captureland.byllkreate.com',
    type: 'live'
  },
  {
    id: '3',
    title: 'EnterJamaica',
    description: 'Designed and built a site to assist users in completing the Jamaican C5 immigration form. Implemented eSIM purchasing with Stripe and tracked engagement with Google Analytics.',
    stack: ['React', 'MongoDB', 'TypeScript', 'Stripe', 'Google Analytics'],
    link: 'https://enterjamaica.org',
    type: 'live'
  },
  {
    id: '4',
    title: 'Multiplayer Domino Game',
    description: 'Converted a legacy Angular game into a React-based multiplayer game with real-time updates using Temporal.io and custom Node.js APIs. Integrated user authentication, game state logic, and deployment.',
    stack: ['React', 'Temporal.io', 'MySQL', 'TypeScript'],
    type: 'live'
  },
  {
    id: '5',
    title: 'Vehicle Imports & Shipping Calculator',
    description: 'Built interactive frontend components to estimate shipping/import fees for vehicles imported to Jamaica.',
    stack: ['WordPress', 'Svelte'],
    type: 'live'
  }
];

export const personalProjects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience and projects.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    type: 'personal'
  },
//   {
//     id: '2',
//     title: 'Task Management App',
//     description: 'A full-stack task management application with user authentication, real-time updates, and responsive design.',
//     stack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
//     type: 'personal'
//   }
];

export const education = {
  degree: 'BSc (Hons) in Computer Science',
  school: 'Ontario Tech University',
  location: 'Oshawa, ON',
  period: 'Sep. 2020 – Jun. 2024',
  coursework: ['Data Structures', 'Algorithms', 'Web Design', 'Databases', 'Scientific Data Analysis']
};

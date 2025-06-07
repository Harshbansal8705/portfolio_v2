import { Project, Skill, Experience, SocialLink, NavItem } from '../types';

// Projects data
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Canvas – Whiteboard Collaboration App',
    description: 
`- A real-time collaborative whiteboard app supporting multi-user drawing with low latency and smooth synchronization.
- Supports 100+ concurrent users with sub-50ms interaction delay
- Secure authentication using JWT and session tokens
`,
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'PostgreSQL', 'Node.js'],
    codeSnippet: `
  // Socket connection and broadcasting
  socket.on('draw', (stroke) => {
    strokes.push(stroke);
    socket.broadcast.emit('draw', stroke);
  });`,
    language: 'typescript',
    demoUrl: 'https://canvas.harshbansal.in',
    githubUrl: 'https://github.com/harshbansal8705/canvas',
    featured: true
  }
  
];

// Skills data
export const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', level: 5, category: 'frontend' },
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 4, category: 'frontend' },
  { name: 'HTML/CSS', level: 4, category: 'frontend' },

  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Express.js', level: 4, category: 'backend' },
  { name: 'Django', level: 4, category: 'backend' },
  { name: 'Flask', level: 3, category: 'backend' },
  { name: 'Python', level: 4, category: 'backend' },
  { name: 'C/C++', level: 3, category: 'backend' },
  { name: 'SQL (PostgreSQL)', level: 4, category: 'backend' },
  { name: 'MongoDB', level: 4, category: 'backend' },
  { name: 'Redis', level: 3, category: 'backend' },
  { name: 'WebSockets', level: 4, category: 'backend' },

  { name: 'Docker', level: 4, category: 'devops' },
  { name: 'AWS', level: 4, category: 'devops' },
  { name: 'Linux', level: 4, category: 'devops' },

  { name: 'Machine Learning', level: 3, category: 'other' },
  { name: 'System Design', level: 4, category: 'other' },
  { name: 'Data Structures & Algorithms', level: 5, category: 'other' }
];

// Experience data
export const experiences: Experience[] = [
  {
    company: 'Ivy Homes',
    position: 'Software Development Intern',
    duration: 'May 2025 – Present',
    location: 'Bangalore, India',
    description: [
      'Designed and implemented IvyCrawler, a distributed web crawler using BFS-based graph traversal for 5M+ pages/files',
      'Optimized 8+ REST APIs in Django, reducing response times by up to 40%',
      'Leading development of backend unit testing suite for CI/CD integration'
    ],
    technologies: ['Python', 'TypeScript', 'Django', 'Next.js', 'PostgreSQL', 'Web Crawling']
  },
  {
    company: 'MarginValue & Northpull Capital',
    position: 'PERN Stack and AI/ML Intern',
    duration: 'Dec 2024 – Feb 2025',
    location: 'Delhi, India',
    description: [
      'Scraped financial data from BSE/NSE using a custom cookie-fetching mechanism',
      'Built a RAG system with Qdrant, LLaMA3, and BERT for enhanced data retrieval',
      'Dockerized full-stack application for seamless deployment'
    ],
    technologies: ['PERN Stack', 'Docker', 'Qdrant', 'LLaMA3', 'BERT', 'NLP']
  },
  {
    company: 'Infloso - Social AI Copilot',
    position: 'Software Development Intern',
    duration: 'Mar 2024 – Jun 2024',
    location: 'Remote',
    description: [
      'Managed the Discover Module and improved API response time by 40%',
      'Created scraping scripts for Twitter, Crunchbase, Linktree; improved data coverage by 60%',
      'Integrated secure user credit and payment system with 100+ paid transactions'
    ],
    technologies: ['Node.js', 'Express', 'React', 'Web Scraping', 'GitHub Actions']
  }
];

// Social links
export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/HarshBansal8705',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harshbansal8705',
    icon: 'Linkedin'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/harshbansal8705',
    icon: 'Twitter'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/harshbansal8705',
    icon: 'Instagram'
  }
];

// Navigation items
export const navItems: NavItem[] = [
  { name: 'Home', path: '/', icon: 'Home' },
  { name: 'Projects', path: '/projects', icon: 'Code' },
  { name: 'Skills', path: '/skills', icon: 'Cpu' },
  { name: 'Experience', path: '/experience', icon: 'Briefcase' },
  { name: 'Contact', path: '/contact', icon: 'Mail' }
];

// Easter eggs (hidden features or jokes)
export const easterEggs = {
  konami: 'Up, Up, Down, Down, Left, Right, Left, Right, B, A',
  secretCommands: [
    { command: 'sudo make me a sandwich', response: "Nice try! You're not in the sudoers file. This incident will be reported." },
    { command: 'coffee', response: "☕ 418 I'm a teapot: The requested entity body is short and stout." },
    { command: 'matrix', response: "Follow the white rabbit..." },
    { command: 'hack the pentagon', response: "🚨 Access Denied. IP address logged. FBI has entered the chat." }
  ]
};
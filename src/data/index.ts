import { Project, Skill, Experience, SocialLink, NavItem, Education } from '../types';

// Projects data
// Projects data
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Canvas – Whiteboard Collaboration App',
    description:
      `- Engineered a real-time collaborative drawing platform using Next.js and WebSockets, supporting 100+ users with sub-50ms latency
- Designed an efficient data structure to manage and synchronize strokes across users while ensuring minimal lag and consistency
- Implemented an authentication mechanism to ensure secure access control using JWT and session-based strategies
- Developed an optimized event-handling system to reduce redundant re-renders, reducing the latency by 300%
`,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Node.js', 'Express', 'PostgreSQL'],
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
  },
  {
    id: 'project-2',
    title: 'Multithreaded Web Server & Proxy',
    description:
      `- Engineered a multi-threaded web server in C++, capable of parsing HTTP requests and handling 100+ client connections.
- Designed and implemented a proxy server with a custom Least Recently Used cache, reducing latency by 40% on repeated requests
- Effectively utilized mutex locks and semaphores to ensure thread safety across 20+ concurrent threads, preventing race conditions
`,
    tags: ['C++', 'Sockets', 'Pthreads', 'Mutex Locks', 'Semaphores'],
    codeSnippet: `
// Worker thread function to handle client requests
void *handle_client(void *arg) {
    int client_socket = *((int *)arg);
    char buffer[BUFFER_SIZE];
    read(client_socket, buffer, BUFFER_SIZE);
    // Process request...
    close(client_socket);
    return NULL;
}`,
    language: 'cpp',
    githubUrl: 'https://github.com/HarshBansal8705',
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
    duration: 'May 2025 – Jul 2025',
    location: 'Bangalore, India',
    description: [
      'Designed IvyCrawler, a distributed web crawler using BFS and queue-based architecture to index 5M+ pages',
      'Optimized 8+ Django APIs, reducing latency by 30-40% via database and endpoint restructuring',
      'Leading development of a unit testing suite to enhance backend reliability and CI/CD integration'
    ],
    technologies: ['Python', 'TypeScript', 'Django', 'Next.js', 'React', 'PostgreSQL', 'CI/CD', 'Web Crawling']
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

// Education data
export const education: Education[] = [
  {
    institution: 'Indian Institute of Technology Kharagpur',
    degree: 'Bachelor of Technology in Chemical Engineering',
    duration: 'Nov 2022 – May 2026',
    location: 'West Bengal, India'
  },
  {
    institution: 'Ramjas Senior Secondary School No. 4',
    degree: 'Central Board of Secondary Education',
    duration: 'April 2015 – May 2022',
    location: 'Delhi, India'
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
  { name: 'Resume', path: '/resume', icon: 'FileText' },
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
import { Project, Skill, Experience, SocialLink, NavItem } from '../types';

// Projects data
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Neural Network Visualizer',
    description: 'An interactive tool for visualizing neural networks in real-time, allowing users to understand how they work by manipulating nodes and connections.',
    tags: ['React', 'TypeScript', 'D3.js', 'Machine Learning'],
    codeSnippet: `
const NeuralNetwork = ({ layers, connections }) => {
  useEffect(() => {
    // Visualization logic using D3.js
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(width / 2, height / 2));
      
    // Render nodes and connections
    // ...
  }, [layers, connections]);
  
  return <div className="neural-network-container" ref={containerRef} />;
};`,
    language: 'typescript',
    demoUrl: 'https://neural-viz.example.com',
    githubUrl: 'https://github.com/harshbansal/neural-viz',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Secure File Vault',
    description: 'End-to-end encrypted file storage system with zero-knowledge architecture, allowing users to securely store and share sensitive documents.',
    tags: ['Node.js', 'Encryption', 'React', 'AWS'],
    codeSnippet: `
// File encryption using AES-256-GCM
async function encryptFile(fileBuffer, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  
  const encryptedBuffer = Buffer.concat([
    cipher.update(fileBuffer),
    cipher.final()
  ]);
  
  const authTag = cipher.getAuthTag();
  
  return {
    iv: iv.toString('hex'),
    encryptedData: encryptedBuffer.toString('hex'),
    authTag: authTag.toString('hex')
  };
}`,
    language: 'javascript',
    githubUrl: 'https://github.com/harshbansal/secure-vault',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Algorithmic Trading Bot',
    description: 'A machine learning powered trading bot that analyzes market patterns and executes trades based on predefined strategies and risk parameters.',
    tags: ['Python', 'Machine Learning', 'Finance', 'API'],
    codeSnippet: `
class TradingStrategy:
    def __init__(self, historical_data, params):
        self.data = historical_data
        self.window_size = params.get('window_size', 14)
        self.threshold = params.get('threshold', 0.75)
    
    def analyze_market(self):
        # Calculate technical indicators
        self.data['rsi'] = calculate_rsi(self.data['close'], self.window_size)
        self.data['macd'], self.data['signal'] = calculate_macd(self.data['close'])
        
        # Generate buy/sell signals
        return self._generate_signals()`,
    language: 'python',
    githubUrl: 'https://github.com/harshbansal/algo-trader',
    featured: false
  },
  {
    id: 'project-4',
    title: 'Distributed Task Scheduler',
    description: 'A fault-tolerant distributed task scheduling system that ensures reliability and scalability for mission-critical applications.',
    tags: ['Go', 'Kubernetes', 'Distributed Systems'],
    codeSnippet: `
func (s *Scheduler) SubmitTask(ctx context.Context, task *Task) (*TaskStatus, error) {
    // Generate unique task ID
    taskID := uuid.New().String()
    task.ID = taskID
    
    // Select optimal worker node based on load and capacity
    worker, err := s.selectWorker(task.Requirements)
    if err != nil {
        return nil, fmt.Errorf("failed to select worker: %w", err)
    }
    
    // Schedule task execution
    status, err := worker.Execute(ctx, task)
    if err != nil {
        // Handle failure and potentially retry
        s.handleFailure(task, worker, err)
        return nil, err
    }
    
    return status, nil
}`,
    language: 'go',
    githubUrl: 'https://github.com/harshbansal/task-scheduler',
    featured: false
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
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Phone, MapPin, Download, ChevronDown, Code, Brain, Trophy, Users, User } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const NAV_ITEMS = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

const ROLES = ['Full Stack Developer', 'AI/ML Enthusiast', '10x Hackathon Winner', 'Tech Lead'];

const SKILLS = {
  'Languages': ['C/C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  'Frontend': ['React.js', 'Next.js', 'Tailwind CSS', 'Redux'],
  'Backend': ['Node.js', 'Express.js', 'FastAPI', 'Flask'],
  'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'LangChain', 'RAG'],
  'Tools': ['Git', 'Docker', 'Firebase', 'MongoDB', 'PostgreSQL', 'AWS'],
};

const EXPERIENCE = [
  {
    role: "Artificial Intelligence Intern",
    company: "Edunet Foundation (Microsoft & SAP Initiative)",
    location: "Remote",
    period: "Dec 2024 – May 2025",
    points: [
      "Worked on AI-driven solutions under mentorship from Microsoft and SAP professionals",
      "Developed and implemented machine learning models for real-world applications",
      "Collaborated with cross-functional teams to design and test AI algorithms",
      "Gained hands-on experience with modern AI tools and model evaluation techniques",
    ],
  },
  {
    role: "Data Analytics Intern",
    company: "DYSMECH Competency Services Pvt. Ltd.",
    location: "Nagpur, MH",
    period: "Jan 2024 – Apr 2024",
    points: [
      "Analyzed energy data, reducing consumption by 10% and saving 5% on monthly bills",
      "Used Python, Pandas, and Power BI to improve data analysis and decision-making",
      "Provided actionable recommendations that boosted cost efficiency",
    ],
  },
];

const PROJECTS = [
  {
    name: 'ARVeda',
    desc: 'AI Ayurveda health platform with RAG, tongue analysis, and AR yoga',
    tech: ['React', 'FastAPI', 'LangChain', 'TensorFlow'],
    github: 'https://github.com/SiddharthParihar1/ARVeda',
  },
  {
    name: 'MealMate',
    desc: 'Swiggy but for localVendors',
    tech: ['React Native', 'Flask', 'CNNs', 'Firebase'],
    github: 'https://github.com/SiddharthParihar1/',
  },
  {
    name: 'Margdarshak',
    desc: 'Indoor AR-based navigation system for malls, hospitals, and industries',
    tech: ['Unity', 'ARCore', 'Node.js', 'Firebase'],
    github: 'https://github.com/SiddharthParihar1',
  },
  {
    name: 'ARMenu',
    desc: 'AR-based menu card that visualizes food in 3D before ordering',
    tech: ['AR.js', 'ARCore', 'React', 'Firebase'],
    github: 'https://github.com/SiddharthParihar1/ARMenu_Production',
  },
  {
    name: 'FinancePro',
    desc: 'Smart finance management app for tracking expenses, budgets, and insights',
    tech: ['React Native', 'Expo', 'Firebase'],
    github: 'https://github.com/SiddharthParihar1/',
  },
  {
    name: 'Central India Hackathon Website',
    desc: 'Official multi-page website for CIH 2.0 with event details and registration',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    github: 'https://centralindiahackathon.tech/',
  },
  {
    name: 'TraillX',
    desc: 'Modern, responsive website for a tech brand with animations and clean UI',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    github: 'https://traillx.com/',
  },  {
    name: 'ApnaGhar',
    desc: 'An intuitive platform connecting homeowners with trusted service providers aslo uses AR to visualize home improvements',
    tech: ['AR.js','React', 'TailwindCSS', 'Framer Motion'],
    github: 'https://apnaghar--yvotbngttc.expo.app/',
  },
];

const ACHIEVEMENTS = [
  { 
    icon: Trophy, 
    title: "10x National Hackathon Winner", 
    desc: "Led team to 10 national wins with 8 consecutive victories" 
  },
  { 
    icon: User, 
    title: "Advantage Vidarbha 2025", 
    desc: "Showcased startup, attracted 500+ visitors across a 3-day expo" 
  },
  { 
    icon: Users, 
    title: "Central India Hackathon Organizer", 
    desc: "Scaled event from 75 teams to 800+ teams & 2000+ developers" 
  },
  { 
    icon: Brain, 
    title: "AI Workshop Trainer", 
    desc: "Trained 400+ students in building AI agent & automation projects" 
  },
];


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.toLowerCase()));
      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5 bg-transparent'}`}>
        <div className="container flex justify-between items-center">
          <button onClick={() => scrollTo('hero')} className="text-xl font-bold text-gradient">SP</button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass mt-2 mx-4 rounded-lg p-4 animate-fade-up">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary font-mono text-sm tracking-wider">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Siddharth <span className="text-gradient">Parihar</span>
            </h1>
            <div className="h-8 overflow-hidden">
              <p key={roleIndex} className="text-xl sm:text-2xl text-muted-foreground animate-fade-up">
                {ROLES[roleIndex]}
              </p>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto lg:mx-0">
              Building intelligent solutions at the intersection of AI and full-stack development
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-lift glow-sm">
                Get in Touch
              </a>
              <a href="#projects" className="px-6 py-3 border border-border rounded-lg font-medium hover:border-primary hover:text-primary transition-colors">
                View Work
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              {[
                { icon: Github, href: 'https://github.com/SiddharthParihar1/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/siddharth-parihar1/' },
                { icon: Mail, href: 'mailto:sidmicro876@gmail.com' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:border-primary hover:text-primary transition-all hover:scale-110">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/50 animate-pulse-glow">
                <img src={profileImg} alt="Siddharth Parihar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 glass rounded-full text-sm font-medium text-primary animate-float">
                <Trophy className="inline mr-2" size={16} />
                10x Hackathon Winner
              </div>
            </div>
          </div>
        </div>
        
        <button onClick={() => scrollTo('about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="glass rounded-2xl p-6 sm:p-10 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-medium">B.Tech CSE student</span> at SCET with a passion for building AI-powered solutions. With <span className="text-primary font-medium">10 hackathon wins</span> and experience leading <span className="text-primary font-medium">150+ developers</span>, I specialize in full-stack development and machine learning.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { value: '10+', label: 'Hackathon Wins' },
                { value: '150+', label: 'Developers Led' },
                { value: '2000+', label: 'community' },
                { value: '10+', label: 'Events Organized' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-muted/30 rounded-xl hover-lift">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-muted/20">
        <div className="container max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} className="glass rounded-xl p-6 hover-lift">
                <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-muted/50 rounded-full text-sm text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="glass rounded-xl p-6 hover-lift border-l-4 border-primary">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1.5">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 bg-muted/20">
        <div className="container max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.name} className="glass rounded-xl p-6 hover-lift group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
                  <a href={project.github} className="p-2 hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-4">
        <div className="container max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.title} className="glass rounded-xl p-6 hover-lift flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="container max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="glass rounded-2xl p-6 sm:p-10">
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, text: 'sidmicro876@gmail.com', href: 'mailto:sidmicro876@gmail.com' },
                { icon: Phone, text: '+91 8767703705', href: 'tel:+918767703705' },
                { icon: MapPin, text: 'Nagpur, India', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group">
                  <Icon className="text-primary" size={20} />
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">{text}</span>
                </a>
              ))}
            </div>
            
            <div className="flex gap-4 justify-center">
              {[
                { icon: Github, href: 'https://github.com/SiddharthParihar1/', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/siddharth-parihar1/', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:border-primary hover:text-primary transition-all">
                  <Icon size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Build with ❤️ by Siddharth Parihar
          </p>
        </div>
      </footer>
    </div>
  );
}

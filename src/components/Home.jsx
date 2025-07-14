import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Trophy, Briefcase, GraduationCap, User, Menu, X, ExternalLink, ChevronDown, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    programming: ['Python', 'C', 'C++', 'JavaScript', 'SQL', 'MongoDB', 'HTML5', 'CSS'],
    frameworks: ['Express.js', 'Bootstrap', 'React.js', 'OpenCV'],
    tools: ['VS Code', 'Anaconda', 'Jupyter'],
    soft: ['Team Building', 'Communication', 'Leadership', 'Brainstorming', 'Researching']
  };

  const projects = [
    {
      title: 'Query Craft',
      tech: 'Python, Streamlit, OpenAI API, Chromadb, PostgreSQL, MySQL',
      date: '03/2025',
      description: 'An AI-powered SQL generation tool that transforms natural language queries into precise SQL statements using RAG technology.',
      features: ['15+ database integrations', '10+ AI models', 'Self-learning capabilities', 'Data security focused'],
      githubUrl: 'https://github.com/himanshu077it/QUERY-CRAFT-1'
    },
    {
      title: 'Apply Smart',
      tech: 'React, Node.js, Express.js, MongoDB, Cloudinary, Multer, Axios',
      date: '12/2024',
      description: 'Comprehensive job application automation platform with intelligent form-filling and dynamic resume building.',
      features: ['Multi-platform automation', 'Tailored resume generation', 'Cloud storage integration', 'Advanced form algorithms'],
      githubUrl: 'https://github.com/himanshu077it/apply-smart'
    },
    {
      title: 'Travel Mate',
      tech: 'Python, Flask, HTML, CSS, JavaScript, Geolocation',
      date: '09/2024',
      description: 'Comprehensive travel planning application with real-time weather updates and location-based recommendations.',
      features: ['Geolocation services', 'Weather API integration', 'Dynamic route optimization', 'Personalized experiences'],
      githubUrl: 'https://github.com/himanshu077it/Travel_Mate_project'
    }
  ];

   const handleProjectClick = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  const achievements = [
    '5 star and 4 star in C++ and C respectively',
    'Top 25% in LeetCode rating',
    'Ninja Dominator position on Code Studio by Naukri360',
    'Participated in 20+ Hackathons'
  ];

  const certifications = [
    'Palo Alto - Cyber Security (2025)',
    'Cisco Networking Academy – CCNA 1,2,3 (2025)',
    'Google - Android Developer (2024)',
    'Cisco Networking Academy – Python Essentials 1,2 (2025)',
    'HackerRank – SQL Advanced (2025)',
    'Zcaler – Zero Trust Cloud Security (2024)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              HC
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-white/80'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize hover:text-cyan-400 transition-all"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
        
        <div className={`text-center z-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-8 relative">
  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1 animate-spin-slow">
    <div className="w-full h-full bg-slate-800 rounded-full overflow-hidden">
      <img 
        src="/himanshu.jpg" 
        alt="Himanshu Chaudhary" 
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>
</div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Himanshu Chaudhary
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in-up">
            Full Stack Developer & AI Enthusiast
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://github.com/himanshu077it" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110 group">
              <Github size={24} className="group-hover:text-cyan-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/himanshu-chaudhary-11412024b/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110 group">
              <Linkedin size={24} className="group-hover:text-cyan-400 transition-colors" />
            </a>
            <a href="mailto:himanshuch485@gmail.com"
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110 group">
              <Mail size={24} className="group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform animate-bounce"
          >
            Explore My Work
          </button>
        </div>
        
        <div className="absolute bottom-8 left+1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all">
                <div className="flex items-center mb-4">
                  <GraduationCap className="mr-3 text-cyan-400" size={24} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-cyan-400">B.TECH (Information Technology)</h4>
                    <p className="text-white/80">G.L Bajaj Institute of Technology and Management</p>
                    <p className="text-sm text-white/60">CGPA: 8.0 | 10/2022 – 08/2026</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-400">12th Boards (C.B.S.E)</h4>
                    <p className="text-white/80">Saint Hood Convent School</p>
                    <p className="text-sm text-white/60">88.6% | 04/2020 – 05/2022</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="flex items-center mb-4">
                  <MapPin className="mr-3 text-purple-400" size={24} />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-white/80">Greater Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Passionate Developer</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                I'm a dedicated Information Technology student with a strong foundation in full-stack development 
                and artificial intelligence. With expertise in multiple programming languages and frameworks, 
                I create innovative solutions that solve real-world problems.
              </p>
              <p className="text-white/80 leading-relaxed">
                My journey includes building AI-powered applications, participating in 20+ hackathons, 
                and continuously learning cutting-edge technologies. I'm passionate about creating 
                efficient, scalable, and user-friendly applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all group">
              <div className="flex items-center mb-4">
                <Code className="mr-3 text-cyan-400 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold">Programming</h3>
              </div>
              <div className="space-y-2">
                {skills.programming.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all group">
              <div className="flex items-center mb-4">
                <Database className="mr-3 text-purple-400 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <div className="space-y-2">
                {skills.frameworks.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-pink-400/50 transition-all group">
              <div className="flex items-center mb-4">
                <Briefcase className="mr-3 text-pink-400 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all group">
              <div className="flex items-center mb-4">
                <User className="mr-3 text-yellow-400 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <div className="space-y-2">
                {skills.soft.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all group cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10"
            onClick={() => handleProjectClick(project.githubUrl)}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm">{project.date}</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">{project.tech}</span>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {project.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* GitHub indicator */}
            <div className="flex items-center justify-end">
              <div className="flex items-center space-x-2 text-white/60 group-hover:text-cyan-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm">View on GitHub</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all">
              <div className="flex items-center mb-6">
                <Trophy className="mr-3 text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="text-yellow-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-white/80">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all">
              <div className="flex items-center mb-6">
                <GraduationCap className="mr-3 text-purple-400" size={28} />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-white/80 mb-12">
            Ready to collaborate on exciting projects? Let's build something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:himanshuch485@gmail.com" 
               className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all group">
              <Mail className="mx-auto mb-4 text-cyan-400 group-hover:animate-pulse" size={32} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-white/80">himanshuch485@gmail.com</p>
            </a>
            
            <a href="tel:+918279759324" 
               className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all group">
              <Phone className="mx-auto mb-4 text-purple-400 group-hover:animate-pulse" size={32} />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-white/80">+91-8279759324</p>
            </a>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-pink-400/50 transition-all group">
              <MapPin className="mx-auto mb-4 text-pink-400 group-hover:animate-pulse" size={32} />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-white/80">Greater Noida, UP</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/himanshu077it" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full hover:scale-110 transition-transform group">
              <Github size={24} className="group-hover:animate-pulse" />
            </a>
            <a href="https://www.linkedin.com/in/himanshu-chaudhary-11412024b/" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-full hover:scale-110 transition-transform group">
              <Linkedin size={24} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Himanshu Chaudhary. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
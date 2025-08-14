import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Cloud, Award, MapPin, Calendar, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll detection for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Your existing data arrays
  const skills = [
    { name: 'Python', icon: '🐍', category: 'Languages', level: 90 },
    { name: 'Java', icon: '☕', category: 'Languages', level: 85 },
    { name: 'JavaScript', icon: '🟨', category: 'Languages', level: 80 },
    { name: 'React', icon: '⚛️', category: 'Frontend', level: 85 },
    { name: 'Spring Boot', icon: '🍃', category: 'Backend', level: 80 },
    { name: 'Django', icon: '🎯', category: 'Backend', level: 75 },
    { name: 'FastAPI', icon: '⚡', category: 'Backend', level: 85 },
    { name: 'TensorFlow', icon: '🧠', category: 'AI/ML', level: 80 },
    { name: 'MySQL', icon: '🗄️', category: 'Database', level: 75 },
    { name: 'Google Cloud', icon: '☁️', category: 'Cloud', level: 70 }
  ];

  const projects = [
    {
      title: "DeepFake Detection System",
      description: "Led a team of 5 to develop a high-accuracy DeepFake detection web application achieving 95% accuracy on Celeb-DF dataset using MobileNetV2, LSTM, and MTCNN.",
      tech: ["Python", "Flask", "TensorFlow", "MobileNetV2", "MTCNN", "HTML", "JavaScript"],
      github: "https://github.com/harshit001-2023/Deep-Fake-Detection-System",
      demo: "#",
      featured: true
    },
    {
      title: "Gemini-AI Chat App",
      description: "Developed a scalable chat application backend integrating Gemini AI for smart, real-time responses with 75% intent accuracy across 50+ scenarios.",
      tech: ["Java", "Spring Boot", "React", "Gemini AI API"],
      github: "https://github.com/harshit001-2023/Gemini-Chat",
      demo: "#",
      featured: true
    },
    {
      title: "Voice Converter Pro",
      description: "Comprehensive TTS and STT application with modern GUI, multi-voice support, real-time audio playback, and advanced error handling.",
      tech: ["Python", "pyttsx3", "gTTS", "SpeechRecognition", "Pygame"],
      github: "https://github.com/harshit001-2023/voice-converter-pro",
      demo: "#",
      featured: false
    },
    {
      title: "Weather Web Application",
      description: "Simple yet elegant weather application using Weather API with responsive design and real-time weather data visualization.",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      github: "https://github.com/harshit001-2023/Simple-Weather-Web-Application",
      demo: "#",
      featured: false
    }
  ];

  const certifications = [
    {
      title: "Google Cloud AI Certificate",
      issuer: "Google (Coursera)",
      date: "Nov 2023",
      link: "https://drive.google.com/file/d/1_Sjj4KXY6HBJuXG9kuOEHwyjNf5Fv1ON/view?usp=drivesdk"
    },
    {
      title: "Intermediate OOP with Java",
      issuer: "Coursera",
      date: "Mar 2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/4JLSBG9DAXS5"
    },
    {
      title: "Foundations of Cybersecurity by Google",
      issuer: "Google (Coursera)",
      date: "Mar 2024",
      link: "https://coursera.org/share/1f3ff768657fe0f8c3b30abfa9ac84fb"
    },
    {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      date: "July 2023",
      link: "https://drive.google.com/file/d/12e_00JSfmZCWQ9_oOp6eQRIQ2lXYf4Ho/view?usp=sharing"
    }
  ];

  // Enhanced Animation variants with improved timing
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  };

  const liquidEntry = {
    initial: { scale: 0.3, opacity: 0, rotateY: -45 },
    animate: { scale: 1, opacity: 1, rotateY: 0 },
    transition: { 
      duration: 1.2, 
      type: "spring", 
      bounce: 0.4,
      stiffness: 100
    }
  };

  // Enhanced Floating Particles with improved movement
  const EnhancedFloatingParticles = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
            }}
            animate={{
              y: [-100, -2500],
              opacity: [0, 0.8, 0.8, 0],
              scale: [0, 1.2, 1.5, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <EnhancedFloatingParticles />
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="glass-nav">
            <motion.div 
              className="text-xl font-bold gradient-text"
              whileHover={{ 
                scale: 1.15,
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
              }}
            >
              HP
            </motion.div>
            
            <div className="nav-actions">
              {/* Navigation Links */}
              <div className="hidden md:flex gap-6">
                {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-blue-400 transition-colors relative"
                    onClick={() => setActiveSection(item.toLowerCase())}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.5,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                        layoutId="activeSection"
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30 
                        }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            variants={liquidEntry}
            initial="initial"
            animate="animate"
          >
            <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Harshit Pande
            </h1>
          </motion.div>
          
          <motion.div
            className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              B.E. in IT | Backend Developer | AI & ML Enthusiast
            </motion.div>
            <motion.div 
              className="text-lg text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Java & Python Developer • Cloud & Tech Explorer • Open Source Contributor
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { href: "https://github.com/harshit001-2023", icon: Github, text: "GitHub" },
              { href: "https://www.linkedin.com/in/harshit-pande-001hp141022", icon: Linkedin, text: "LinkedIn" },
              { href: "mailto:harshitpande938@gmail.com", icon: Mail, text: "Contact" }
            ].map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                className="btn-primary"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: "0 12px 30px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                <link.icon size={20} /> {link.text}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
            >
              <MapPin size={16} />
              Sipna College of Engineering & Technology, Amravati
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
            >
              <Calendar size={16} />
              CGPA: 7.95/10.0 (2021-2025)
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="glass-card p-8"
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Recent B.E. graduate in Information Technology with hands-on experience in Java, Python, 
                Machine Learning, and software development. Passionate about backend development, AI integration, 
                DevOps, and Cloud technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently enhancing my skills in <span className="text-blue-400">Spring Boot</span>, 
                <span className="text-purple-400"> FastAPI</span>, and <span className="text-cyan-400">TensorFlow</span>. 
                Always eager to collaborate on innovative projects and contribute to impactful solutions.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-8"
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">What I'm Up To</h3>
              <ul className="space-y-3">
                {[
                  { color: "blue-400", text: "Working on enhancing skills in Spring Boot, FastAPI, and TensorFlow" },
                  { color: "purple-400", text: "Learning Cloud Technologies (GCP) and DevOps practices" },
                  { color: "cyan-400", text: "Looking to collaborate on open-source projects and innovative tech solutions" },
                  { color: "green-400", text: "Passionate about photography, videography, and cycling when not coding" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.5,
                      duration: 0.6
                    }}
                  >
                    <div className={`w-2 h-2 bg-${item.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-badge"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  rotateY: 5,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl mb-3 relative z-10"
                  animate={{ 
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeatType: "reverse",
                    delay: index * 0.2
                  }}
                >
                  {skill.icon}
                </motion.div>
                <div className="font-semibold text-white mb-1 relative z-10">{skill.name}</div>
                <div className="text-xs text-white/80 mb-2 relative z-10">{skill.category}</div>
                <div className="w-full bg-white/20 rounded-full h-2 relative z-10 overflow-hidden">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full h-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-card p-6 group"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.4 }
                }}
              >
                <motion.div 
                  className="relative mb-4 overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        ease: "linear"
                      }}
                    >
                      <Code size={48} className="text-white/50" />
                    </motion.div>
                  </div>
                  {project.featured && (
                    <motion.div 
                      className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 3, -3, 0]
                      }}
                      transition={{
                        duration: 5,
                        ease: "easeInOut"
                      }}
                    >
                      Featured
                    </motion.div>
                  )}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: techIndex * 0.1,
                        duration: 0.3
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.3)"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm btn-primary flex-1 justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} /> Source Code
                  </motion.a>
                  {project.demo !== "#" && (
                    <motion.a 
                      href={project.demo} 
                      className="flex items-center gap-2 text-sm btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} /> Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Certifications & Achievements
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass-card p-6"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <Award className="text-yellow-400 mb-3" size={24} />
                </motion.div>
                <h3 className="font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mb-3">{cert.date}</p>
                <motion.a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1"
                  whileHover={{ 
                    scale: 1.05,
                    x: 5
                  }}
                >
                  View Certificate →
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Let's Build Something Amazing
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I'm always open to discussing new opportunities, innovative projects, and collaborations.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { href: "mailto:harshitpande938@gmail.com", icon: Mail, text: "Get In Touch" },
              { href: "https://www.linkedin.com/in/harshit-pande-001hp141022", icon: Linkedin, text: "LinkedIn" }
            ].map((contact, index) => (
              <motion.a
                key={contact.text}
                href={contact.href}
                className="btn-primary text-lg"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.08, 
                  y: -6,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <contact.icon size={24} /> {contact.text}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            &copy; 2024 Harshit Pande. Built with React, Tailwind CSS, and Framer Motion.
          </motion.p>
        </div>
      </footer>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white cursor-pointer z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
          whileHover={{ 
            scale: 1.15,
            backgroundColor: "rgba(255,255,255,0.2)",
            borderColor: "rgba(255,255,255,0.4)",
            rotate: -360,
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </div>
  );
}

export default App;

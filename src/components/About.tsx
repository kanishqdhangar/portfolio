import { Code, Database, Settings , Brain, TrendingUp, Award, MapPin, GraduationCap, Building, ExternalLink, Target, ToolCase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// --- DATA DEFINITIONS ---

const skills = [
  {
    category: 'Languages',
    icon: Code,
    color: 'from-blue-500 to-indigo-600',
    items: ['Python', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Frontend',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-600',
    items: ['ReactJS', 'NextJS', 'TailwindCSS']
  },
  {
    category: 'Backend',
    icon: Database,
    color: 'from-orange-500 to-red-600',
    items: ['Django', 'FastAPI', 'NodeJS', 'Express', 'Rest APIs', 'Webhooks', 'JWT Authentication']
  },
  {
    category: 'Databases',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    items: ['MongoDB', 'PostgreSQL', 'SQL']
  },
  {
    category: 'System Design',
    icon: Settings,
    color: 'from-green-500 to-emerald-600',
    items: ['Redis Caching', 'Async Processing', 'Queue Systems', 'Scalable APIs']
  },
  {
    category: 'Machine Learning',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    items: ['Numpy', 'Pandas', 'Scikit-learn', 'LLM Integration', 'Prompt Engineering']
  },
  {
    category: 'Tools & Platform',
    icon: ToolCase,
    color: 'from-purple-400 to-purple-600',
    items: ['Vite', 'Postman', 'Git', 'Vercel', 'Render', 'Razorpay Payment Gateway']
  },
];

const achievements = [
  {
    logo: "/iwmi.png",
    title: 'IWMI Innovation Challenge',
    description: 'Developed an application under the circular bio-economy theme for efficient collection of agricultural waste.',
    year: '2024',
    category: 'Innovation',
    certificateLink: 'https://drive.google.com/file/d/1kZ4qgIrl7_S4KD7pXg4KwHkp38vOFroC/view?usp=sharing'
  },
  {
    logo: "/cuh_logo.png",
    title: 'Class Representative',
    description: 'Consistently coordinated batch activities and academic policy compliance throughout the entire academic period as Class Representative.',
    year: '2022-25',
    category: 'Leadership',
    certificateLink: '#'
  },
  {
    logo: "/cuh_logo.png",
    title: 'National Science Day',
    description: 'Built and deployed a full-stack application in the National Science Day\'s Working Model Category, demonstrating strong end-to-end development capabilities.',
    year: '2024',
    category: 'Innovation',
    certificateLink: 'https://drive.google.com/file/d/1W82I-43e-wAxqbN2Yk3O7iPZIQsfDfEJ/view?usp=sharing'
  },
  {
    logo: "/bytecode.png",
    title: 'Core Team Member - ByteCode Learners Club',
    description: 'Served as a Core Team Member for the ByteCode Learners Coding Club, designing and leading workshops to upskill over 50 active members.',
    year: '2023-25',
    category: 'Teamwork',
    certificateLink: '#'
  }
];

const backgroundInfo = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech Computer Science & Technology',
    subtitle: 'Central University of Haryana',
    details: 'Nov 2022 - June 2026 (Expected)',
    link: '#'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gurugram, Haryana, India',
    subtitle: 'Available for Remote & On-site Work',
    details: 'Open to relocation opportunities',
    link: null
  },
  {
    icon: Building,
    label: 'Internships',
    value: 'Software Developer Intern',
    subtitle: 'RawRecruit, IIT Jammu & University of Delhi',
    details: 'Built scalable APIs, optimized database queries, and improved performance for real-world applications',
    link: null
  },
  
];



// --- SUB-COMPONENTS ---

const DecorativeBackground = () => (
  <>
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
    <div className="absolute inset-0 opacity-5">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  </>
);

const AboutHeader = () => (
  <div className="text-center mb-12 sm:mb-20">
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white">
      About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
    <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
      I’m <span className="font-semibold text-white">Kanishq Dhangar</span>, a Full Stack Developer focused on building 
      <span className="font-semibold text-white"> scalable, high-performance systems</span> and real-world products.  

      I’ve engineered backend systems with <span className="font-semibold text-white">Redis caching (80–90% latency reduction)</span>, 
      designed <span className="font-semibold text-white">asynchronous processing pipelines</span>, and built 
      <span className="font-semibold text-white">AI-powered applications</span> using modern LLMs.  

      My work spans across <span className="font-semibold text-white">MERN, FastAPI, and Django ecosystems</span>, 
      where I focus on performance, scalability, and clean system design.
    </p>
  </div>
);

// --- MAIN COMPONENT ---

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      <DecorativeBackground />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 max-w-7xl relative z-10">
        <AboutHeader />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-12">
            <h3 className="text-2xl sm:text-3xl font-light text-white flex items-center">
              <Target className="mr-3 text-blue-400" size={28} />
              Professional Background
            </h3>
            {backgroundInfo.map((info, index) => (
              <Card key={index} className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{info.label}</p>
                    <p className="text-base sm:text-lg font-semibold text-white mb-1 break-words">{info.value}</p>
                    <p className="text-sm text-gray-400 mb-2">{info.subtitle}</p>
                    <p className="text-xs text-gray-500">{info.details}</p>
                    {/* {info.link && (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 mt-2 transition-colors"
                      >
                        View Details <ExternalLink size={12} className="ml-1" />
                      </a>
                    )} */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-white flex items-center">
                <Code className="mr-3 text-cyan-400" size={28} />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                  <Card key={index} className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform`}
                        >
                          <skill.icon size={20} className="text-white" />
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-white flex-1">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-gray-800/60 border border-gray-700 text-gray-300 text-xs sm:text-sm font-normal"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16 sm:mt-24">
          <h3 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-white text-center flex items-center justify-center">
            <Award className="mr-3 text-yellow-400" size={28} />
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((ach, index) => (
              <Card
                key={index}
                className="flex flex-col bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-yellow-600/50 transition-all duration-300 group text-center"
              >
                <CardContent className="p-6 flex flex-col items-center h-full">
                  <div className="w-16 h-16 mb-4 rounded-full bg-white/90 border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <img src={ach.logo} alt={`${ach.title} logo`} className="h-8 object-contain" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{ach.title}</h4>
                  <p className="text-sm text-gray-400 mb-4">{ach.description}</p>
                  <div className="flex items-center justify-between w-full mt-4">
                    <Badge variant="secondary" className="bg-gray-800/60 border-gray-700 text-gray-400 text-xs">
                      {ach.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{ach.year}</span>
                  </div>
                  {ach.certificateLink && ach.certificateLink !== '#' && (
                    <a
                      href={ach.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-xs font-semibold text-yellow-400 mt-auto pt-4"
                    >
                      View Certificate <ExternalLink size={12} className="ml-1.5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mission-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(192, 132, 252, 0.15), transparent 80%);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
        }
        .mission-card:hover::before { opacity: 1; }
        @keyframes fade-in-word {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mission-word { display: inline-block; opacity: 0; animation: fade-in-word 0.5s ease forwards; }
        html { scroll-behavior: smooth; }
        button:focus-visible, a:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
};

export default About;

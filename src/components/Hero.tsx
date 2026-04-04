import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ["scalable backend systems",
                  "high-performance web applications",
                  "real-time systems with Socket.IO",
                  "AI-powered products using LLMs"
                ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRoleIndex, roles]);

  // Social links
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kanishqdhangar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kanishq-dhangar/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dhangarkanishq@gmail.com', label: 'Email' }
  ];

  // Scroll helper
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Play video once
  

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <section id="home" className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-1 ml-6 sm:ml-10 lg:ml-18 mt-24 sm:mt-26 lg:mt-32">
              
              {/* Name + Title */}
              <div className="space-y-2 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-white">Kanishq Dhangar</span>
                </h1>
                <h3 className="text-xl sm:text-xl lg:text-2xl text-gray-400 font-light">
                  Full Stack Developer • Scalable Systems • AI Integration
                </h3>
              </div>

              {/* Animated Role */}
              <div className="text-lg sm:text-xl lg:text-2xl h-8 w-2xl flex items-center">
                <span className="text-gray-400">I engineer </span>
                <span className="text-white ml-2 font-medium">
                  {displayText}
                  <span className="animate-pulse text-blue-400">|</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-blue-400 font-medium tracking-wide">
                Designing systems that scale and perform in real-world environments
              </p>

              {/* Description */}
              <div className="space-y-4 max-w-xl">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Full Stack Developer specializing in building <span className="font-semibold text-white">scalable, production-grade applications</span> with a strong focus on performance and system design.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  I have engineered systems with <span className="font-semibold text-white">Redis caching (reducing latency by 80–90%)</span>, designed <span className="font-semibold text-white">async processing pipelines</span>, and built <span className="font-semibold text-white">AI-driven solutions</span> using modern LLMs.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="bg-white text-black hover:bg-gray-200 font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </button>
                <button
                  className="bg-black text-black hover:bg-gray-800 font-medium px-8 py-3 rounded-lg transition-all duration-300"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - CODE SNIPPET CARD */}
            <div className="hidden order-2 lg:flex items-center justify-center">
              <div className="bg-[#0d1117] border border-gray-800 rounded-2xl p-6 w-[420px] shadow-2xl hover:scale-[1.02] transition-all duration-300">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400">resume-parser.ts</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Code */}
                <pre className="text-sm text-gray-300 font-mono leading-relaxed">
  {`POST /api/resume/parse

  → Upload PDF
  → Extract text (OCR)
  → Queue job (Redis)
  → Worker processes request
  → AI extracts structured data
  → Return JSON response

  //  Optimized pipeline
  //  Handles concurrent requests
  //  80–90% latency reduction (cache)
  `}
                </pre>
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 lg:mt-16">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .font-handwriting {
          font-family: 'Brush Script MT', cursive;
        }
      `}</style>
    </div>
  );
};

export default Hero;

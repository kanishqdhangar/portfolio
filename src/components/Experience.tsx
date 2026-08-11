"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "RawRecruit",
      period: "December 2025 – June 2026",
      location: "Remote",
      type: "Full Stack Development",
      description:
        "Building production-grade web applications and scalable backend systems, focusing on performance optimization and real-world deployment.",
      achievements: [
        "Architected a self-learning entity normalization system with fuzzy matching — including canonical resolution, confidence-scored matching, and admin-reviewed alias learning — migrated all alumni/referral queries from regex to canonical matching.",
        <>
          <span>
            Delivered a real estate web platform{" "}
            <a
              href="https://nirvayadevbhoomi.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Nirvaya Devbhoomi
            </a>{" "}
            with modern UI and scalable architecture using TypeScript.
          </span>
        </>,
        "Designed scalable backend APIs and implemented Redis caching for high-traffic APIs, optimizing database queries and reducing response latency by ~80–90% under high-traffic conditions.",
        "Engineered a real-time candidate ranking system with automated midnight resets via background workers and dynamic rank updates on user activity, ensuring leaderboard accuracy at scale.",
        <>
          <span>
            Implemented on-page SEO optimizations for{" "}
            <a
              href="http://rawrecruit.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              RawRecruit
            </a>{" "}
            including meta tags, structured data, and sitemap generation,
            improving organic search visibility and page indexing.
          </span>
        </>
      ],
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "TypeScript",
        "Redis",
        "Razorpay"
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Indian Institute of Technology (IIT), Jammu",
      period: "July 2024 – August 2024",
      location: "MNIT, Jaipur",
      type: "Software Development",
      description:
        "Built an internship management platform enabling hiring workflows, application tracking, and recruiter-student interaction.",
      achievements: [
        "Developed core features for an intern hiring portal InternHub using React and Django.",
        "Integrated RESTful APIs and optimized database queries using PostgreSQL. ",
        "Enhanced UI components and improved user navigation for a better interactive experience. ",
      ],
      technologies: [
        "React",
        "Django",
        "Django REST framework",
        "PostgreSQL",
      ],
    },
    {
      title: "Full-stack Developer Intern",
      company: "University of Delhi",
      period: "July 2023 – December 2023",
      location: "Delhi, India",
      type: "Software Development",
      description:
        "Engineered a research software discovery platform enabling efficient search and filtering for academic use cases.",
      achievements: [
        "Built a scalable React frontend and integrated Django REST APIs for seamless backend communication.",
        "Designed optimized PostgeSQL models and implemented advanced search & filtering for faster data retrieval.",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Django",
        "PostgreSQL",
      ],
    },
    
  ];

  const education = {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Central University of Haryana, Mahendergarh",
    period: "Nov 2022 – June 2026",
    description:
      "Focused on data structures, algorithms, machine learning, and software engineering principles.",
  };

  return (
    <section
  id="experience"
  className="relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black py-20"
>
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-primary-text">
          Experience & Education
        </h2>
      </motion.div>

      {/* Experience Timeline */}
      <div className="space-y-12 mb-20 relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            variants={fadeInUp}
          >
            <Card className="p-8 bg-gray-900 text-white border border-gray-800 glow-border interactive-card hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-black/40">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg gradient-text font-semibold">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <Badge variant="outline" className="w-fit text-white border-gray-500">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-white">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="text-sm text-gray-400 flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-900 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        variants={fadeInUp}
      >
        <Card className="p-8 bg-gray-900 text-white border border-gray-800 glow-border hover:scale-[1.01] transition-transform duration-300 shadow-xl shadow-black/40">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center"
              initial={{ rotate: -90, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl">🎓</span>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold gradient-text">Education</h3>
              <p className="text-gray-400">Academic Foundation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {education.degree}
              </h4>
              <h5 className="text-gray-400 font-medium mb-2">
                {education.institution}
              </h5>
              <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
                <Calendar size={14} />
                {education.period}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {education.description}
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold text-white">Core Subjects:</h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Machine Learning",
                  "Database Systems",
                  "Software Engineering",
                  "Statistics",
                  "Data Mining",
                  "Cloud Computing",
                  "Computer Networks",
                  "Operating Systems",
                  "Distributed Systems",
                ].map((subject, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs text-gray-300 border-gray-600"
                  >
                    {subject}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default Experience;
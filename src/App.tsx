import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {  FaGlobe } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div
      className="w-screen min-h-screen font-sans text-gray-800 bg-white"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Header */}
      <header
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/portfolio.img')" }} 
      >
        <div className="relative z-10 flex flex-col justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl font-mono text-white text-right pr-50">
            Welcome.
          </h1>
          <div className="mt-6 text-white items-right self-end max-w-2xl">
            <p className="text-lg sm:text-xl text-gray-200 pr-12 text-justified">
              My name is Kanishq Dhangar, a Full Stack Developer. I build scalable,
              user-friendly web applications with clean, efficient code.
              Passionate about modern technologies, I focus on creating seamless
              digital experiences that solve real-world problems and deliver
              value to users and businesses alike.
            </p>
          </div>
        </div>
      </header>

      {/* My Work */}
      <section className="px-6 py-10 w-full">
        <h1 className="text-3xl font-semibold mb-4 text-center">My Work</h1>
        <p className="text-gray-700 leading-relaxed text-center text-xl">
          A collection of projects I've worked on.
        </p>
      </section>

      {/* Projects as Cards */}
      

      <section className="px-6 py-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Portfolio",
              description:
                "This very portfolio site you're viewing now. Built using Vite, React and Tailwind CSS to showcase my skills and projects.",
              image: "/portfolio.png",
              github: "https://github.com/kanishqdhangar/portfolio",
              live: "",
            },
            {
              title: "SoftSell",
              description:
                "A responsive, single-page marketing website for a fictional software resale startup. Built using Next, Tailwind CSS and Type Script.",
              image: "/SoftSell.png",
              github: "https://github.com/kanishqdhangar/softsell",
              live: "https://softsell-alpha-amber.vercel.app/",
            },
            {
              title: "Internship Web Portal",
              description:
                "A web app for managing internships, hiring interns, and tracking applications. Built with React, Django, and PostgreSQL.",
              image: "/internshipPortal.png",
              github: "https://github.com/kanishqdhangar/Internship-Web-Portal",
              live: "",
            },
            {
              title: "GreenMinds",
              description:
                "A frontend UI design of an award-winning hackathon idea.",
              image: "/greenminds.png",
              github: "https://github.com/kanishqdhangar/greenminds",
              live: "https://greenminds-vrzc.vercel.app/",
            },
            {
              title: "News App",
              description:
                "A dynamic site fetching news via a public Inshorts API and displaying based on user-selected categories.",
              image: "/news.png",
              github: "https://github.com/kanishqdhangar/News-App",
              live: "https://news-app-drab-six.vercel.app/",
            },
            {
              title: "Alumni Connect",
              description:
                "A full-stack project for connecting alumni with current students. Includes news and mentorship features.",
              image: "/alumni_connect.png",
              github: "https://github.com/kanishqdhangar/alumni_connect",
              live: "https://alumni-connect-app.vercel.app/",
            },
            {
              title: "Doctor Listing",
              description:
                "Built with Next.js and MongoDB, this app filters doctors by category, fees, and other fields.",
              image: "/doctors-listing.png",
              github: "https://github.com/kanishqdhangar/Doctor_listing_frontend",
              live: "",
            },
            {
              title: "Calculator",
              description:
                "A responsive calculator built using HTML, CSS, and JavaScript. Handles basic arithmetic operations.",
              image: "/calculator.png",
              github: "https://github.com/kanishqdhangar/calculator",
              live: "",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image with hover zoom, fade, and padding */}
              <div className="relative overflow-hidden group h-48 p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 right-2 h-1/3 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-md" />
              </div>

              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>

                <div className="flex gap-4 mt-4 text-blue-600">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800 text-xl"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-800 text-xl"
                      title="Live Site"
                    >
                      <FaGlobe />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-10 w-full">
        <h1 className="text-3xl font-semibold mb-4 text-center">Experiences</h1>
        
      </section>

      <section className="px-6 py-10 w-full">
        
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Intern at University of Delhi",
              duration: "25 July 2023 – 30 December 2023",
              description:
                "Developed a web application ‘BioSoft Lookup’ which assists researchers in finding softwares for their needs. Tech stack: React, Django, PostgreSQL. Mentored by Dr. Asani Bhaduri, Cluster Innovation Centre, University of Delhi.",
              certificate: "/Certificate_Kanishq1.pdf",
            },
            {
              title: "Intern at Indian Institute of Technology(IIT) Jammu",
              duration: "1 July 2024 – 16 August 2024",
              description:
                "Developed a web application ‘InternHub’ designed for hiring interns, managing internships, and tracking applications. ",
              certificate: "/Certificate_Kanishq2.pdf",
            },
          ].map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start bg-white border border-gray-200 rounded-xl shadow-md p-6 gap-4"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-sm text-gray-500 italic mb-2">{exp.duration}</p>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 md:ml-6 font-bold bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-700 hover:text-black transition"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-10 w-full">
        <h1 className="text-3xl font-semibold mb-4 text-center">Skill Set</h1>
        
      </section>

      <section className="px-6 py-10 w-full bg-gray-300" >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "Frontend",
              skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap" ],
            },
            {
              category: "Backend",
              skills: ["Django", "Node.js", "REST APIs"],
            },
            {
              category: "Database",
              skills: ["PostgreSQL", "MongoDB", "SQLite"],
            },
            {
              category: "Languages",
              skills: ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
            },
            {
              category: "Tools & Platforms",
              skills: ["Git", "GitHub", "Postman", "Vercel", "Vite"],
            },
            {
              category: "Others",
              skills: ["DSA", "OOPs", "Linux Basics"],
            },
          ].map((group, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Contact */}
      <section className="px-6 py-10 w-full">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex gap-6 text-xl text-blue-600">
          <a
            href="mailto:dhangarkanishq@gmail.com"
            className="flex items-center gap-2 hover:text-blue-800"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/kanishq-dhangar/"
            className="flex items-center gap-2 hover:text-blue-800"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-blue-100 mt-10 text-sm text-gray-600 w-full">
        © {new Date().getFullYear()} Kanishq Kumar Dhangar. All rights reserved.
      </footer>
    </div>
  );
}

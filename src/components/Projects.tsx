import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "VoteFlow",
    description: "Built a real-time polling platform using MERN, TypeScript, and Socket.IO, enabling live vote updates, race-condition-safe voting at the database level, and teacher-controlled poll lifecycles. Deployed via Vercel and Render.",
    tech: "MERN, TypeScript, Tailwind CSS, Socket.IO",
    image: "/VoteFlow.png",
    github: "https://github.com/kanishqdhangar/VoteFlow",
    live: "https://polling-system-indol.vercel.app/",
  },
  {
    title: "Get Hired",
    description:
      "An AI-driven recruitment engine built with Next.js and FastAPI that matches students to internships in real-time. It transforms static profiles into dynamic career opportunities through precise, skill-based AI recommendations.",
    tech: "Next.js, TypeScript, Tailwind CSS, FastAPI, PostgreSQL, JWT",
    image: "/GetHired.png",
    github: "https://github.com/kanishqdhangar/GetHired",
    live: "",
  },
  {
    title: "Blog Website",
    description:
      "Built a MERN blogging platform with TypeScript, implementing features like JWT auth, social interactions(likes, comments, bookmarks), and a custom built navigation system. Deployed via Vercel and Render",
    tech: "MERN, TypeScript, Tailwind CSS, JWT Authentication,",
    image: "/Blog.png",
    github: "https://github.com/kanishqdhangar/Blog-editor",
    live: "https://blog-editor-phi.vercel.app/",
  },
  {
    title: "Stock Tracker",
    description:
      "A full-stack app where users can view, add and favourite their favourite stocks/assets with a clean responsive UI.",
    tech: "Next.js, TypeScript, Tailwind CSS, FastAPI, NeonDB",
    image: "/StockTracker.png",
    github: "https://github.com/kanishqdhangar/StockTracker",
    live: "https://stock-crud.vercel.app/",
  },
  {
    title: "Task Manager",
    description:
      "A full-stack Task Manager app for creating, updating, and deleting tasks with a clean, responsive UI.",
    tech: "Next.js, TypeScript, TailwindCSS, Node.js, MongoDB",
    image: "/TaskManager.png",
    github: "https://github.com/kanishqdhangar/task_manager-backend",
    live: "https://task-manager-beige-three.vercel.app/",
  },
  {
    title: "SoftSell",
    description:
      "A responsive, single-page marketing website for a fictional software resale startup.",
    tech: "Next.js, TypeScript, TailwindCSS",
    image: "/SoftSell.png",
    github: "https://github.com/kanishqdhangar/softsell",
    live: "https://softsell-alpha-amber.vercel.app/",
  },
  {
    title: "Internship Web Portal",
    description:
      "A web app for managing internships, hiring interns, and tracking applications.",
    tech: "React.js, Django, PostgreSQL",
    image: "/internshipPortal.png",
    github: "https://github.com/kanishqdhangar/Internship-Web-Portal",
    live: "",
  },
  {
    title: "GreenMinds",
    description: "A frontend UI design of an award-winning hackathon idea.",
    tech: "React.js",
    image: "/greenminds.png",
    github: "https://github.com/kanishqdhangar/greenminds",
    live: "https://greenminds-vrzc.vercel.app/",
  },
  {
    title: "News App",
    description:
      "A dynamic site fetching news via a public Inshorts API and displaying based on user-selected categories.",
    tech: "React.js",
    image: "/news.png",
    github: "https://github.com/kanishqdhangar/News-App",
    live: "https://news-app-drab-six.vercel.app/",
  },
  {
    title: "Alumni Connect",
    description:
      "A full-stack project for connecting alumni with current students. Includes news and mentorship features.",
    tech: "React.js",
    image: "/alumni_connect.png",
    github: "https://github.com/kanishqdhangar/alumni_connect",
    live: "https://alumni-connect-app.vercel.app/",
  },
  {
    title: "Doctor Listing",
    description:
      "This app filters doctors by category, fees, and other fields.",
    tech: "Next.js, TypeScript, TailwindCSS, MongoDB",
    image: "/doctors-listing.png",
    github: "https://github.com/kanishqdhangar/Doctor_listing_frontend",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center text-gray-100">
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-gray-700 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                <Badge className="bg-gray-800 text-gray-300 text-xs">{project.tech}</Badge>
              </div>

              <div className="flex justify-center gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

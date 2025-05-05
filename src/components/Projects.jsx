import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = ({ darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product listings, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Authentication"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "A comprehensive dashboard for social media analytics with data visualization, reporting, and user engagement metrics.",
      technologies: ["React", "Node.js", "Chart.js", "MySQL", "Express"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ]

  return (
    <section id="projects" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
            My <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Projects</span>
          </h2>
          <div className={`h-1 w-20 mx-auto mt-2 ${darkMode ? "bg-teal-400" : "bg-teal-600"}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Here are some of my recent full-stack projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                darkMode ? "bg-gray-900 shadow-teal-500/10" : "bg-white"
              } ${hoveredProject === project.id ? "transform scale-105" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <div
                  className={`absolute inset-0 ${darkMode ? "bg-gray-900/60" : "bg-gray-900/50"} flex items-center justify-center opacity-0 transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : ""}`}
                >
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${darkMode ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-teal-600 text-white hover:bg-teal-700"} transition-transform hover:scale-110`}
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300"} transition-transform hover:scale-110`}
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode ? "bg-gray-800 text-teal-400" : "bg-gray-100 text-teal-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-transform hover:scale-105 ${
              darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

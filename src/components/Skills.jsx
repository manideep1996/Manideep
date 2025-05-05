import { useState } from "react"
import { Code, Database, Globe, Server, Palette, Layers } from "lucide-react"

const Skills = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("frontend")

  const tabs = [
    { id: "frontend", label: "Frontend", icon: <Globe size={20} /> },
    { id: "backend", label: "Backend", icon: <Server size={20} /> },
    { id: "database", label: "Database", icon: <Database size={20} /> },
    { id: "other", label: "Other", icon: <Layers size={20} /> },
  ]

  const skills = {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Bootstrap", level: 65 },
    ],
    backend: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "RESTful APIs", level: 75 },
      { name: "Authentication", level: 60 },
    ],
    database: [
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 60 },
      { name: "Firebase", level: 70 },
    ],
    other: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 80 },
      { name: "Responsive Design", level: 85 },
      { name: "Problem Solving", level: 80 },
    ],
  }

  return (
    <section id="skills" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
            My <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Skills</span>
          </h2>
          <div className={`h-1 w-20 mx-auto mt-2 ${darkMode ? "bg-teal-400" : "bg-teal-600"}`}></div>
        </div>

        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? darkMode
                    ? "bg-teal-500 text-white"
                    : "bg-teal-600 text-white"
                  : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills[activeTab].map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-50"} transition-transform hover:scale-105 duration-200`}
            >
              <div className="flex justify-between mb-2">
                <span className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{skill.name}</span>
                <span className={darkMode ? "text-teal-400" : "text-teal-600"}>{skill.level}%</span>
              </div>
              <div className={`w-full h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                <div
                  className={`h-full rounded-full ${darkMode ? "bg-teal-400" : "bg-teal-600"}`}
                  style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className={`p-6 rounded-lg text-center transition-transform hover:scale-105 duration-200 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${darkMode ? "bg-teal-500/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
            >
              <Code size={32} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Clean Code</h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              I write clean, maintainable, and efficient code following best practices and industry standards.
            </p>
          </div>

          <div
            className={`p-6 rounded-lg text-center transition-transform hover:scale-105 duration-200 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${darkMode ? "bg-teal-500/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
            >
              <Palette size={32} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Responsive Design
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              I create responsive layouts that work seamlessly across all devices and screen sizes.
            </p>
          </div>

          <div
            className={`p-6 rounded-lg text-center transition-transform hover:scale-105 duration-200 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${darkMode ? "bg-teal-500/20 text-teal-400" : "bg-teal-100 text-teal-600"}`}
            >
              <Layers size={32} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Full Stack Development
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              I develop both client and server sides, creating complete and functional web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

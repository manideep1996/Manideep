import { Heart } from "lucide-react"

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`py-8 ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="font-bold text-xl">
              <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Dev</span>Portfolio
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>

          <div className="flex items-center">
            <p>
              Made with <Heart size={16} className={`inline ${darkMode ? "text-red-400" : "text-red-500"}`} /> &copy;{" "}
              {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

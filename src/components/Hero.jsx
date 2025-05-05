import { GitlabIcon as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

const Hero = ({ darkMode }) => {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Full Stack Developer"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className={`absolute inset-0 ${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-white via-gray-50 to-white"}`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
      

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Manideep D
          </h1>

          <div className="h-8 mb-6">
            <h2 className={`text-xl sm:text-2xl font-medium ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <p className={`text-lg max-w-2xl mx-auto mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Building modern web applications with passion and creativity. Turning ideas into reality through code.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-transform hover:scale-110 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-transform hover:scale-110 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:example@example.com"
              className={`p-3 rounded-full transition-transform hover:scale-110 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <a
            href="#about"
            className={`inline-flex items-center justify-center animate-bounce ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

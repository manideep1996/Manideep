const About = ({ darkMode }) => {
    return (
      <section id="about" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
              About <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Me</span>
            </h2>
            <div className={`h-1 w-20 mx-auto mt-2 ${darkMode ? "bg-teal-400" : "bg-teal-600"}`}></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? "text-teal-400" : "text-teal-600"}`}>
                Hello, I'm Manideep
              </h3>
              <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                I'm a passionate full-stack developer with a focus on creating responsive and user-friendly web
                applications. My journey in web development began with a curiosity about how websites work, which quickly
                evolved into a passion for building them.
              </p>
              <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                I enjoy working with modern technologies and frameworks to solve real-world problems. When I'm not coding,
                you can find me exploring new technologies, contributing to open-source projects, or expanding my
                knowledge through online courses.
              </p>
              <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                I'm constantly learning and improving my skills to stay up-to-date with the latest industry trends and
                best practices.
              </p>
  
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Name:</h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Manideep D</p>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Email:</h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>mailto@mail.com</p>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Location:</h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Montgomery, AL, USA</p>
                </div>
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Availability:</h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Available for hire</p>
                </div>
              </div>
  
              <div className="mt-8">
                <a
                  href="#contact"
                  className={`inline-block px-6 py-3 rounded-md font-medium transition-transform hover:scale-105 ${darkMode ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-teal-600 text-white hover:bg-teal-700"}`}
                >
                  Contact Me
                </a>
              </div>
            </div>
  
            <div className="order-1 md:order-2 flex justify-center">
              <div
                className={`relative rounded-lg overflow-hidden ${darkMode ? "shadow-teal-500/20" : "shadow-xl"} shadow-lg transition-transform hover:scale-105 duration-300`}
                style={{ maxWidth: "400px" }}
              >
                <div
                  className={`absolute inset-0 ${darkMode ? "bg-gradient-to-t from-gray-900/80 to-transparent" : "bg-gradient-to-t from-gray-800/50 to-transparent"}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage({
        type: "success",
        text: "Your message has been sent successfully!",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
            Contact <span className={darkMode ? "text-teal-400" : "text-teal-600"}>Me</span>
          </h2>
          <div className={`h-1 w-20 mx-auto mt-2 ${darkMode ? "bg-teal-400" : "bg-teal-600"}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Get In Touch
              </h3>
              <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Whether you have a question, want to start a project, or simply want to connect, feel free to reach out
                to me.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${darkMode ? "bg-gray-800 text-teal-400" : "bg-gray-100 text-teal-600"}`}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>Email</h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>mailto@mail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${darkMode ? "bg-gray-800 text-teal-400" : "bg-gray-100 text-teal-600"}`}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>Phone</h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>+1 (334) 354-5543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-full mr-4 ${darkMode ? "bg-gray-800 text-teal-400" : "bg-gray-100 text-teal-600"}`}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>Location</h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Montgomery, AL, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`p-3 rounded-full transition-transform hover:scale-110 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className={`p-3 rounded-full transition-transform hover:scale-110 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className={`p-3 rounded-full transition-transform hover:scale-110 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className={`p-3 rounded-full transition-transform hover:scale-110 ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Send Me a Message
              </h3>

              {submitMessage && (
                <div
                  className={`p-4 mb-4 rounded-md ${
                    submitMessage.type === "success"
                      ? darkMode
                        ? "bg-green-900/30 text-green-400"
                        : "bg-green-100 text-green-800"
                      : darkMode
                        ? "bg-red-900/30 text-red-400"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className={`block mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md focus:outline-none ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-teal-400"
                        : "bg-white text-gray-900 border-gray-300 focus:border-teal-600"
                    } border`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md focus:outline-none ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-teal-400"
                        : "bg-white text-gray-900 border-gray-300 focus:border-teal-600"
                    } border`}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={`block mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-md focus:outline-none ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-teal-400"
                        : "bg-white text-gray-900 border-gray-300 focus:border-teal-600"
                    } border`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md focus:outline-none ${
                      darkMode
                        ? "bg-gray-700 text-white border-gray-600 focus:border-teal-400"
                        : "bg-white text-gray-900 border-gray-300 focus:border-teal-600"
                    } border`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-transform hover:scale-105 ${
                    darkMode ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-teal-600 text-white hover:bg-teal-700"
                  } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

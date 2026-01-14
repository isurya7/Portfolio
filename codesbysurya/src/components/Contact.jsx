import { useState } from "react";
import { 
  FiMail, 
  FiMapPin, 
  FiSend, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter,
  FiMusic,
  FiInstagram
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the data to your Django backend
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { 
      icon: <FiMail />, 
      label: "Email", 
      value: "leosuryaof7@gmail.com", 
      href: "mailto:leosuryaof7@gmail.com" 
    },
    { 
      icon: <FiMapPin />, 
      label: "Location", 
      value: "Kolkata, India" 
    },
  ];

  const socialLinks = [
    { 
      icon: <FiGithub />, 
      href: "https://github.com/isurya7", 
      label: "GitHub",
      color: "hover:bg-gray-800"
    },
    { 
      icon: <FiLinkedin />, 
      href: "https://www.linkedin.com/in/surya-pramanik-151976290/", 
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    },
    { 
      icon: <FiTwitter />, 
      href: "https://x.com/suryapramanik17", 
      label: "Twitter",
      color: "hover:bg-sky-900"
    },
    { 
      icon: <FiInstagram />, 
      href: "https://www.instagram.com/suryaaa.17/", 
      label: "Instagram",
      color: "hover:bg-pink-700"
    },
    { 
      icon: <FiMusic />, 
      href: "#", 
      label: "Spotify",
      color: "hover:bg-green-700",
      comingSoon: true
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-900/30 to-black/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <FiMail className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat about technology? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>
              
              <p className="text-gray-500 text-sm text-center">
                I typically respond within 24 hours
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div 
                    key={info.label} 
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-blue-400 text-xl p-3 bg-blue-500/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-blue-400 transition-colors text-lg font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white text-lg font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Find Me Online</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.comingSoon ? "#" : link.href}
                    target={link.comingSoon ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:scale-105 transition-all duration-300 ${link.color} ${link.comingSoon ? 'relative' : ''}`}
                  >
                    {link.comingSoon && (
                      <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full">
                        Soon
                      </div>
                    )}
                    <div className="text-2xl mb-2 text-gray-300 group-hover:text-white">
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-lg">Open for Opportunities</span>
              </div>
              <p className="text-gray-300">
                Currently accepting freelance projects, internship opportunities, and collaborative work. 
                Always excited to discuss new ideas and technologies!
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Web Development</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">React Projects</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Full-Stack</span>
              </div>
            </div>

            {/* Quick Response */}
            <div className="p-4 bg-gray-900/30 border border-white/10 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-bold mb-1">Quick Response</h4>
                  <p className="text-gray-400 text-sm">
                    I prioritize communication and aim to respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            "Let's build something amazing together. Whether it's a website, web app, or just a conversation about tech, 
            I'm always excited to connect with fellow developers and creators."
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-gray-400">— Surya Pramanik</span>
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
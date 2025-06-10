import { motion } from "framer-motion";
import "./App.css";

// Import images from the vision expert
const heroImage = "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg";
const servicesImage = "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg";
const techPartnersImage = "https://images.pexels.com/photos/4957793/pexels-photo-4957793.jpeg";
const contactImage = "https://images.unsplash.com/photo-1587994990528-14263e4ee443?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NDk1OTY4NTZ8MA&ixlib=rb-4.1.0&q=85";
const additionalTechImage = "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxkYXRhJTIwY2VudGVyfGVufDB8fHxibHVlfDE3NDk1OTY4NDF8MA&ixlib=rb-4.1.0&q=85";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect-dark"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold text-white"
          >
            Ajigitiina
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-accent-400 transition-colors duration-300">Services</a>
            <a href="#about" className="text-white hover:text-accent-400 transition-colors duration-300">About</a>
            <a href="#partners" className="text-white hover:text-accent-400 transition-colors duration-300">Partners</a>
            <a href="#contact" className="text-white hover:text-accent-400 transition-colors duration-300">Contact</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button text-white px-6 py-2 rounded-full text-sm font-semibold"
          >
            Get Quote
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Network Pattern Overlay */}
      <div className="absolute inset-0 network-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow leading-tight">
            Enterprise Network<br />
            <span className="text-accent-400">Solutions That</span><br />
            Never Let You Down
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed"
          >
            Reliable network infrastructure setup and optimization for companies and organizations. 
            Build the backbone of your digital future with Ajigitiina's cutting-edge solutions.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="cta-button text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
            >
              Get Free Network Assessment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 floating">
        <div className="w-16 h-16 rounded-full bg-accent-500 opacity-20"></div>
      </div>
      <div className="absolute top-20 right-20 floating" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-full bg-primary-400 opacity-30"></div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: "🏗️",
      title: "Network Infrastructure Design",
      description: "Complete network architecture planning and implementation for enterprise environments"
    },
    {
      icon: "🔒",
      title: "Network Security Solutions", 
      description: "Advanced security protocols and monitoring systems to protect your business data"
    },
    {
      icon: "☁️",
      title: "Cloud & Hybrid Networks",
      description: "Seamless integration between on-premise and cloud infrastructure"
    },
    {
      icon: "📡",
      title: "24/7 Network Monitoring",
      description: "Round-the-clock support and proactive network health monitoring"
    },
    {
      icon: "⚡",
      title: "Network Optimization",
      description: "Performance tuning and upgrades to maximize your network efficiency"
    },
    {
      icon: "🔄",
      title: "Disaster Recovery",
      description: "Business continuity solutions with automated failover systems"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${servicesImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Our <span className="text-accent-400">Expert</span> Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive network solutions designed for modern enterprises and organizations
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="service-card rounded-2xl p-8 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const features = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Networks Deployed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-800 to-dark-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Why Choose <span className="text-accent-400">Ajigitiina</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We specialize in creating robust, scalable network infrastructures that grow with your business. 
              Our team of certified professionals ensures your organization stays connected, secure, and competitive.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Enterprise-Grade Solutions</h3>
                  <p className="text-gray-400">Scalable infrastructure designed for growth</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Advanced Security</h3>
                  <p className="text-gray-400">Multi-layered protection for your data</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12l.01 0M12 6l.01 0M6 12l.01 0M18 12l.01 0M12 18l.01 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">24/7 Monitoring</h3>
                  <p className="text-gray-400">Proactive support and maintenance</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-accent-400 mb-2">{feature.number}</div>
                <div className="text-white font-medium">{feature.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "IT Director",
      content: "Ajigitiina transformed our network infrastructure. Their expertise and 24/7 support have been invaluable to our operations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Manufacturing Inc.",
      role: "CTO",
      content: "Outstanding service and reliability. Our network downtime has been virtually eliminated since partnering with Ajigitiina.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Healthcare Systems Ltd.",
      role: "Network Administrator",
      content: "Professional, knowledgeable, and always available when we need them. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-dark-950 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${additionalTechImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            What Our <span className="text-accent-400">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by organizations worldwide for reliable network solutions
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-accent-400 text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologyPartnersSection = () => {
  const partners = [
    { name: "Cisco", logo: "🔷" },
    { name: "Juniper", logo: "🟢" },
    { name: "HPE", logo: "🔵" },
    { name: "Dell", logo: "🔘" },
    { name: "VMware", logo: "🟡" },
    { name: "Microsoft", logo: "🟦" }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-r from-dark-800 to-dark-700">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${techPartnersImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Technology <span className="text-accent-400">Partners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We work with industry-leading vendors to deliver the best solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="glass-effect rounded-xl p-6 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <div className="text-white font-medium">{partner.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Upgrade Your <span className="text-accent-400">Network</span>?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get a free consultation and discover how Ajigitiina can transform your network infrastructure.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Call Us</div>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-semibold">Email Us</div>
                  <div>info@ajigitiina.com</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get Free Network Assessment</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Company Name"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your network needs"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full cta-button text-white py-4 rounded-xl text-lg font-semibold"
              >
                Get Free Assessment
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-950 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Ajigitiina</h3>
            <p className="text-gray-400">
              Leading IT networking solutions for enterprises and organizations worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Network Infrastructure</li>
              <li>Security Solutions</li>
              <li>Cloud Integration</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center cursor-pointer hover:bg-primary-500 transition-colors">
                <span className="text-white">📱</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center cursor-pointer hover:bg-primary-500 transition-colors">
                <span className="text-white">💼</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center cursor-pointer hover:bg-primary-500 transition-colors">
                <span className="text-white">🐦</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ajigitiina. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <TechnologyPartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
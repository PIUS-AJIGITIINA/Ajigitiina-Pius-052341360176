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

export default App;
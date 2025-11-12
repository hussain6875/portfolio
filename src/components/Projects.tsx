import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Database, Globe } from "lucide-react";

const Projects = () => {
    const projects = [
      
        {
            title: "LocalService Platform",
            description:
                "A scalable full-stack web application that connects local service providers with customers. Implements three user roles — Customer, Provider, and Admin — each with dynamic dashboards and real-time booking updates. Customers can book services easily, track booking status, and leave reviews only after service completion.",
            techStack: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT", "Multer"],
            features: [
                "Role-based access control (Customer, Provider, Admin)",
                "Easy service booking system with status tracking",
                "Provider dashboard for managing services and bookings",
                "Admin dashboard for monitoring all users and activities",
                "Customer review system available after booking completion",
            ],
            github: "https://github.com/hussain6875/lsb_backend",
            live: "https://lsb-frontend.vercel.app/",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
            category: "Full Stack",
        },
          {
            title: "CRM System",
            description:
                "A comprehensive Customer Relationship Management platform designed to streamline client interactions, track sales progress, and optimize business performance. The system includes multiple data-driven modules and real-time activity tracking for effective lead and deal management.",
            techStack: ["React", "Redux", "Bootstrap", "Node.js", "Express", "PostgreSQL", "JWT", "Multer"],
            features: [
                "Five core modules — Dashboard, Leads, Deals, Companies, and Tickets",
                "Leads module includes activity tracking (notes, calls, meetings, and emails)",
                "Ability to convert qualified leads into deals",
                "Dashboard displays total revenue, total leads, owner summary, and interactive graphs (monthly, weekly, yearly)",
            ],
            github: "https://github.com/hussain6875/crm_backend",
            live: "https://example.com",
            image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
            category: "Full Stack",
        }
    ];

    const techIcons = {
        React: <Code className="h-4 w-4" />,
        Redux: <Database className="h-4 w-4" />,
        "Node.js": <Globe className="h-4 w-4" />,
        Express: <Globe className="h-4 w-4" />,
        PostgreSQL: <Database className="h-4 w-4" />,
        "Redux Toolkit": <Database className="h-4 w-4" />,
        JWT: <Code className="h-4 w-4" />,
        "Tailwind CSS": <Globe className="h-4 w-4" />,
        Bootstrap: <Globe className="h-4 w-4" />,
        'Multer': <Code className="h-4 w-4" />,

    };

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of the projects I've worked on, showcasing my skills in full-stack development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl overflow-hidden group hover:bg-white/10 transition-all"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="flex items-center space-x-1 bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                                            >
                                                {techIcons[tech as keyof typeof techIcons]}
                                                <span>{tech}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
                                    >
                                        <Github className="h-4 w-4" />
                                        <span>Code</span>
                                    </motion.a>

                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        <span>Live Demo</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

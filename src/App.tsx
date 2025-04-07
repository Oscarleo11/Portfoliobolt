import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, GraduationCap, Building2, Download, Star, Award } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const projects = [
  {
    title: "E-commerce Platform",
    description: "Application complète de commerce électronique avec panier, paiement et gestion des commandes",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord en temps réel avec visualisation de données et rapports personnalisés",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    technologies: ["React", "D3.js", "Firebase", "Material-UI"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Social Media App",
    description: "Application sociale avec messagerie en temps réel et partage de contenu",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    technologies: ["React Native", "GraphQL", "MongoDB", "WebSocket"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "AI Content Generator",
    description: "Outil de génération de contenu utilisant l'IA pour créer des textes et images",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    demoLink: "#",
    codeLink: "#"
  }
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Testing Library"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST API"]
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform", "Monitoring"]
  },
  {
    category: "Outils",
    items: ["Git", "VS Code", "Jira", "Figma", "Postman", "Jest"]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-tight">
            Développeur Full Stack
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
            Je crée des applications web modernes et performantes
          </p>
          <div className="flex gap-4 justify-center mb-8 sm:mb-12">
            <motion.a 
              href="#" 
              className="p-2 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-2 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-2 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.a>
          </div>
          <motion.a 
            href="#about"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.a>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center gap-2 mb-8 sm:mb-12"
            {...fadeIn}
          >
            <User className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-2xl sm:text-3xl font-bold">À Propos</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-xl w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div {...fadeIn} className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Passionné par le développement web depuis plus de 5 ans, je crée des solutions digitales sur mesure pour mes clients. Spécialisé en React, Node.js et architecture cloud, je transforme des idées en applications performantes et évolutives.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL'].map((tech) => (
                  <motion.span 
                    key={tech} 
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center gap-2 mb-8 sm:mb-12"
            {...fadeIn}
          >
            <Award className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-2xl sm:text-3xl font-bold">Compétences</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={skillGroup.category}
                className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center gap-2 mb-8 sm:mb-12"
            {...fadeIn}
          >
            <GraduationCap className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-2xl sm:text-3xl font-bold">Curriculum Vitae</h2>
          </motion.div>

          <motion.div 
            className="mb-8 flex justify-end"
            {...fadeIn}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-500/20 transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Télécharger CV
            </a>
          </motion.div>

          {/* Experience */}
          <div className="mb-12">
            <motion.h3 
              className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2"
              {...fadeIn}
            >
              <Building2 className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              Expérience Professionnelle
            </motion.h3>
            <div className="space-y-8">
              <motion.div 
                className="relative pl-6 sm:pl-8 border-l-2 border-blue-400/20"
                {...fadeIn}
              >
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full -left-[7px] sm:-left-[9px] top-0"></div>
                <div className="mb-1">
                  <h4 className="text-lg sm:text-xl font-semibold">Lead Developer</h4>
                  <p className="text-blue-400 text-sm sm:text-base">Entreprise Tech • 2022 - Présent</p>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Direction technique d'une équipe de 5 développeurs. Mise en place d'architecture microservices et développement d'applications React/Node.js à grande échelle.
                </p>
              </motion.div>
              <motion.div 
                className="relative pl-6 sm:pl-8 border-l-2 border-blue-400/20"
                {...fadeIn}
              >
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full -left-[7px] sm:-left-[9px] top-0"></div>
                <div className="mb-1">
                  <h4 className="text-lg sm:text-xl font-semibold">Développeur Full Stack</h4>
                  <p className="text-blue-400 text-sm sm:text-base">Startup Innovante • 2020 - 2022</p>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Développement full stack d'une application SaaS. Technologies : React, Node.js, PostgreSQL, AWS.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3 
              className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2"
              {...fadeIn}
            >
              <GraduationCap className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
              Formation
            </motion.h3>
            <div className="space-y-8">
              <motion.div 
                className="relative pl-6 sm:pl-8 border-l-2 border-blue-400/20"
                {...fadeIn}
              >
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full -left-[7px] sm:-left-[9px] top-0"></div>
                <div className="mb-1">
                  <h4 className="text-lg sm:text-xl font-semibold">Master en Informatique</h4>
                  <p className="text-blue-400 text-sm sm:text-base">École d'Ingénieur • 2018 - 2020</p>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Spécialisation en développement web et architecture logicielle.
                </p>
              </motion.div>
              <motion.div 
                className="relative pl-6 sm:pl-8 border-l-2 border-blue-400/20"
                {...fadeIn}
              >
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full -left-[7px] sm:-left-[9px] top-0"></div>
                <div className="mb-1">
                  <h4 className="text-lg sm:text-xl font-semibold">Licence Informatique</h4>
                  <p className="text-blue-400 text-sm sm:text-base">Université • 2015 - 2018</p>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">
                  Formation généraliste en informatique avec focus sur la programmation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center gap-2 mb-8 sm:mb-12"
            {...fadeIn}
          >
            <Code2 className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-2xl sm:text-3xl font-bold">Projets</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={project.demoLink} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm sm:text-base">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a href={project.codeLink} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm sm:text-base">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex items-center gap-2 justify-center mb-6 sm:mb-8"
            {...fadeIn}
          >
            <Briefcase className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
            <h2 className="text-2xl sm:text-3xl font-bold">Travaillons Ensemble</h2>
          </motion.div>
          <motion.p 
            className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base"
            {...fadeIn}
          >
            Je suis actuellement disponible pour des projets freelance. Si vous avez un projet en tête, n'hésitez pas à me contacter.
          </motion.p>
          <motion.a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Me Contacter
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center text-gray-400 border-t border-gray-800 text-sm sm:text-base">
        <p>© 2024 - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
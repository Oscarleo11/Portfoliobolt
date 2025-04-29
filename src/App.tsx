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
    title: "Plateforme E-commerce",
    description: "Solution complète avec gestion de produits, panier et paiement sécurisé",
    image: "https://github.com/Oscarleo11/navishka-Produits/blob/main/Img%20Portfolio1.png?raw=true",
    technologies: ["React", "Node.js", "Firebase"],
    demoLink: "https://navishka.vercel.app",
    // codeLink: "#"
  },
  {
    title: "Application de Gestion",
    description: "Outil de gestion de projets avec tableau de bord analytique",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Réseau Social",
    description: "Plateforme de partage avec fonctionnalités sociales avancées",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    technologies: ["React Native", "GraphQL", "Apollo", "AWS"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Outil IA",
    description: "Générateur de contenu utilisant l'intelligence artificielle",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    demoLink: "#",
    codeLink: "#"
  }
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Html", "CSS"]
  },
  {
    category: "Backend",
    items: ["Laravel", "Express", "Supabase", "GraphQL", "REST"]
  }
  // {
  //   category: "DevOps",
  //   items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform", "Nginx"]
  // },
  // {
  //   category: "Design",
  //   items: ["Figma", "Adobe XD", "UI/UX", "Prototypage", "Responsive Design"]
  // }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-tight">
            Oscar FOLITSE
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
            Développeur Web Full Stack chez GLIO & Freelance
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Je conçois et développe des applications web performantes avec une attention particulière pour l'expérience utilisateur.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <motion.a
              href="https://github.com/votreprofil"
              target="_blank"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/votreprofil"
              target="_blank"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:contact@jeandupont.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
          <motion.a
            href="#about"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
          </motion.a>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-12"
            {...fadeIn}
          >
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">À Propos</h2>
            <div className="flex-1 h-1 bg-gray-700 rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Jean Dupont"
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto border-2 border-gray-700"
              />
              <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-xl -z-10"></div>
            </motion.div>
            <motion.div {...fadeIn} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Qui suis-je ?</h3>
              <p className="text-gray-300 leading-relaxed">
                Développeur full stack passionné avec plus de 2 ans d'expérience dans la création d'applications web modernes. Je combine expertise technique et sens du design pour offrir des solutions à la fois performantes et esthétiques.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Spécialisé dans les écosystèmes Php Laravel JavaScript React.js, j'accompagne mes clients de la conception à la mise en production, en garantissant qualité, maintenabilité et évolutivité.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL', 'Next.js', 'Tailwind CSS'].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-12"
            {...fadeIn}
          >
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Compétences</h2>
            <div className="flex-1 h-1 bg-gray-700 rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="bg-gray-800/60 rounded-xl p-6 backdrop-blur-sm border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-700/70 rounded-lg text-sm font-medium flex items-center gap-1.5"
                    >
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-12"
            {...fadeIn}
          >
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Parcours</h2>
            <div className="flex-1 h-1 bg-gray-700 rounded-full"></div>
          </motion.div>

          <motion.div className="mb-12 flex justify-center" {...fadeIn}>
            <a
              href="/OSCAR_CV.pdf"  // Chemin relatif vers votre fichier dans public/
              download="CV_Oscar_Folitse_Developpeur.pdf" // Nom du fichier proposé au téléchargement
              className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium shadow-lg hover:shadow-blue-500/20"
            >
              <Download className="w-5 h-5" />
              Télécharger mon CV
            </a>
          </motion.div>

          {/* Experience */}
          {/* CV Section - Expérience Professionnelle */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-semibold mb-8 flex items-center gap-3 text-white"
              {...fadeIn}
            >
              <Building2 className="text-blue-400 w-6 h-6" />
              <span>Expérience Professionnelle</span>
            </motion.h3>
            <div className="space-y-8">
              {/* Expérience chez GLIO */}
              <motion.div
                className="relative pl-8 border-l-2 border-blue-400/30 group"
                {...fadeIn}
              >
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0 group-hover:scale-125 transition-transform"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold">Développeur Web Full Stack</h4>
                  <p className="text-blue-400 font-medium">GLIO • 2022 - Présent</p>
                </div>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Développement et maintenance de l'application web principale de l'entreprise</li>
                  <li>Conception et implémentation de nouvelles fonctionnalités frontend et backend</li>
                  <li>Optimisation des performances et résolution des problèmes techniques</li>
                  <li>Collaboration avec les équipes métier pour comprendre les besoins utilisateurs</li>
                  <li>Mise en production et suivi des déploiements</li>
                </ul>
              </motion.div>

              {/* Expérience Freelance */}
              <motion.div
                className="relative pl-8 border-l-2 border-blue-400/30 group"
                {...fadeIn}
              >
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0 group-hover:scale-125 transition-transform"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold">Développeur Freelance</h4>
                  <p className="text-blue-400 font-medium">Auto-entrepreneur • 2020 - Présent</p>
                </div>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Réalisation de sites vitrines et applications web sur mesure pour divers clients</li>
                  <li>Développement d'une plateforme e-commerce pour un client du secteur de la mode</li>
                  <li>Création d'un outil de gestion de contenu pour une agence immobilière</li>
                  <li>Consultation technique et accompagnement dans les choix technologiques</li>
                  <li>Gestion complète du projet (spécifications, développement, déploiement)</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-8 flex items-center gap-3 text-white"
              {...fadeIn}
            >
              <GraduationCap className="text-blue-400 w-6 h-6" />
              <span>Formation</span>
            </motion.h3>
            <div className="space-y-8">
              <motion.div
                className="relative pl-8 border-l-2 border-blue-400/30 group"
                {...fadeIn}
              >
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0 group-hover:scale-125 transition-transform"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold">Master en Ingénierie Logicielle</h4>
                  <p className="text-blue-400 font-medium">École Polytechnique • 2018 - 2020</p>
                </div>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Spécialisation en architecture des systèmes d'information</li>
                  <li>Mémoire sur l'optimisation des applications React</li>
                  <li>Projet de fin d'études noté 18/20</li>
                </ul>
              </motion.div>
              <motion.div
                className="relative pl-8 border-l-2 border-blue-400/30 group"
                {...fadeIn}
              >
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0 group-hover:scale-125 transition-transform"></div>
                <div className="mb-2">
                  <h4 className="text-xl font-semibold">Licence Informatique</h4>
                  <p className="text-blue-400 font-medium">Université Paris-Saclay • 2015 - 2018</p>
                </div>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Parcours développement web et bases de données</li>
                  <li>Projets en équipe sur des applications full stack</li>
                  <li>Option entrepreneuriat technologique</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-12"
            {...fadeIn}
          >
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Projets Réalisés</h2>
            <div className="flex-1 h-1 bg-gray-700 rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.demoLink}
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir la démo
                    </a>
                    <a
                      href={project.codeLink}
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            {...fadeIn}
          >
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact</h2>
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
          </motion.div>
          <motion.p
            className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
            {...fadeIn}
          >
            Actuellement développeur chez GLIO et disponible pour des missions freelance.
            Discutons de votre projet ou d'opportunités de collaboration.
          </motion.p>
          <motion.div className="space-y-4 max-w-md mx-auto" {...fadeIn}>
            <motion.a
              href="mailto:oscarfolitse@gmail.com"
              className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Envoyer un email
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/votreprofil"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors font-medium w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-5 h-5" />
              Me contacter sur LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400">
              © {new Date().getFullYear()} Oscar FOLITSE. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
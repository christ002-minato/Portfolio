import { motion } from 'motion/react';
import { Code, Database, Server, Smartphone, Palette, Boxes, Ticket, Trello, Globe, Mail, Phone, Linkedin, Github, GraduationCap, Award, Briefcase, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Navigation } from './Navigation';
import koffi_amalaman from './assets/Koffi_amalaman.jpeg'
import le_groupe from './assets/le_groupe.jpeg'
import equipe from './assets/equipe.jpeg'

const techStack = [
  { name: 'React', color: '#61DAFB', icon: Code },
  { name: 'Next.js', color: '#ffffff', icon: Globe },
  { name: 'Node.js', color: '#339933', icon: Server },
  { name: 'Nest.js', color: '#E0234E', icon: Server },
  { name: 'MongoDB', color: '#47A248', icon: Database },
  { name: 'MySQL', color: '#4479A1', icon: Database },
  { name: 'PHP', color: '#777BB4', icon: Code },
  { name: 'Tailwind', color: '#06B6D4', icon: Palette },
  { name: 'React Native', color: '#61DAFB', icon: Smartphone },
  { name: 'Prisma', color: '#2D3748', icon: Database },
  { name: 'Git/GitHub', color: '#F05032', icon: Code },
  { name: 'Figma', color: '#F24E1E', icon: Palette }
];

const projects = [
  {
    title: 'Plateforme de Réservation Concert',
    description: 'Application complète de réservation de billets de concert avec paiement intégré',
    tech: ['Next.js', 'MongoDB', 'Node.js', 'TailwindCSS'],
    icon: Ticket,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Trello Clone Mobile',
    description: 'Application mobile de gestion de tâches avec intégration API Trello',
    tech: ['React Native', 'Tailwind', 'API Trello'],
    icon: Trello,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Applications PHP Full-Stack',
    description: 'Projets académiques front/back avec interfaces modernes',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    icon: Code,
    gradient: 'from-orange-500 to-red-500'
  }
];

export function FullStackWorld() {
  return (
    <motion.div
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
      initial={{ x: 1000, rotateY: 45, opacity: 0 }}
      animate={{ x: 0, rotateY: 0, opacity: 1 }}
      exit={{ x: 1000, rotateY: 45, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      {/* Navigation Left */}
      <Navigation theme="fullstack" position="left" />

      {/* Navigation Right */}
      <Navigation theme="fullstack" position="right" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#667eea', '#f093fb', '#00f2fe', '#4facfe'][Math.floor(Math.random() * 4)]
                }, transparent)`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* 3D Boxes floating */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`box-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -50, 0],
              rotateX: [0, 360],
              rotateY: [0, 180],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            <Boxes className="w-8 h-8 text-white/30" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Hero Section with Profile Image */}
        <motion.div
          className="text-center mb-20 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          >
            <div className="relative w-40 h-40 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/50 bg-white"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                    '0 0 40px rgba(168, 85, 247, 0.6)',
                    '0 0 20px rgba(168, 85, 247, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ImageWithFallback
                  src={koffi_amalaman}
                  alt="Koffi Amalaman Christ"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="inline-block mb-6"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/50 rounded-full blur-2xl" />
              <Code className="relative w-20 h-20 text-white" />
            </div>
          </motion.div>

          <h1 className="text-6xl mb-4 text-white">
            Koffi Amalaman Christ
          </h1>

          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-white/30 blur-xl rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="relative text-2xl text-white">
              Développeur Full-Stack Moderne
            </p>
          </div>

          <p className="text-white/90 mt-6 max-w-2xl mx-auto">
            En formation Wecode | Passionné par la création de solutions web modernes
            avec React, Next.js, Node.js et les technologies cloud
          </p>
        </motion.div>

        {/* À Propos Section */}
        <motion.div
          id="about"
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl text-white mb-8 text-center flex items-center justify-center gap-3">
            <User className="w-8 h-8" />
            À Propos
          </h2>

          <div className="max-w-4xl mx-auto fullstack-card">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4 text-white/90">
                <p>
                  Développeur Full-Stack passionné, je combine créativité et expertise technique
                  pour créer des applications web modernes, performantes et user-friendly.
                  Actuellement en formation intensive chez Wecode.
                </p>
                <p>
                  Mon approche du développement web allie design moderne, code propre et
                  expérience utilisateur optimale. Je maîtrise l'ensemble de la stack :
                  du front-end React/Next.js au back-end Node.js/Nest.js, en passant par
                  les bases de données MongoDB et MySQL.
                </p>
                <p>
                  Toujours à l'affût des dernières technologies, je cherche à créer des
                  solutions innovantes qui répondent aux besoins réels des utilisateurs tout
                  en respectant les meilleures pratiques de développement.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-full h-64 bg-white/10 rounded-2xl border border-white/30 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={equipe}
                    alt="Workspace Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formation Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl text-white mb-8 text-center flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8" />
            Formation & Parcours
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
              className="fullstack-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl text-white">Formation Développeur Full-Stack</h3>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      En cours
                    </span>
                  </div>
                  <p className="text-purple-200 mb-2">Wecode - Bootcamp Intensif</p>
                  <p className="text-white/80 text-sm">
                    Formation complète en développement web moderne : React, Next.js, Node.js,
                    Nest.js, MongoDB, MySQL, Prisma, TailwindCSS, API REST, et architecture logicielle.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="fullstack-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl text-white">Projets Académiques & Personnels</h3>
                  </div>
                  <p className="text-white/80 text-sm">
                    Développement de multiples applications : plateformes e-commerce, applications
                    mobiles, systèmes de réservation, et interfaces administratives complètes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="fullstack-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-2">Stack Technique Maîtrisée</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      React & Next.js
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      Node.js & Nest.js
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      MongoDB & MySQL
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      React Native
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      TailwindCSS
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl text-white mb-8 text-center">
            Technologies & Outils
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="fullstack-card group cursor-pointer"
                initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  delay: 0.6 + index * 0.05,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  rotateY: 15,
                  transition: { duration: 0.3 }
                }}
              >
                <tech.icon
                  className="w-8 h-8 mb-2 mx-auto group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                />
                <p className="text-white text-center text-sm">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          id="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl text-white mb-8 text-center">
            Projets Full-Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="fullstack-project-card group cursor-pointer"
                initial={{ opacity: 0, y: 100, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 1 + index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                />

                {/* Project Image */}
                <div className="relative mb-4 h-48 bg-white/10 rounded-xl border border-white/30 overflow-hidden">
                  <ImageWithFallback
                    src={`/project-fullstack-${index + 1}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Icon with gradient */}
                <div className="relative flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl text-white">{project.title}</h3>
                </div>

                <p className="relative text-white/80 mb-4">{project.description}</p>

                <div className="relative flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.2 + i * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)'
                  }}
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Footer */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="fullstack-info-card">
            <h3 className="text-2xl text-white mb-4">Compétences Complètes</h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div>
                <h4 className="text-purple-200 mb-2">Front-End</h4>
                <p className="text-sm">HTML5 • CSS3 • TailwindCSS • React • Next.js</p>
              </div>
              <div>
                <h4 className="text-pink-200 mb-2">Back-End</h4>
                <p className="text-sm">PHP • Node.js • Nest.js • API REST • Prisma</p>
              </div>
              <div>
                <h4 className="text-blue-200 mb-2">Outils & DB</h4>
                <p className="text-sm">MongoDB • MySQL • Git • GitHub • VS Code • Figma</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          id="contact"
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <h2 className="text-3xl text-white mb-8 text-center flex items-center justify-center gap-3">
            <Mail className="w-8 h-8" />
            Me Contacter
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href="mailto:amalaman.koffi@epitech.eu"
                className="fullstack-card group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <p className="text-white">amalaman.koffi@epitech.eu</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+2250565283279"
                className="fullstack-card group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Téléphone</p>
                    <p className="text-white">+225 05 65 28 32 79</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fullstack-card group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">LinkedIn</p>
                    <p className="text-white">Koffi Amalaman Christ</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fullstack-card group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">GitHub</p>
                    <p className="text-white">github.com/koffi-christ</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .fullstack-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .fullstack-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: rotate(45deg);
          transition: all 0.5s;
        }

        .fullstack-card:hover::before {
          left: 100%;
          top: 100%;
        }

        .fullstack-project-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .fullstack-project-card::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
          border-radius: 24px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
          background-size: 300% 300%;
          animation: gradientShift 3s ease infinite;
        }

        .fullstack-project-card:hover::after {
          opacity: 0.5;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .fullstack-info-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </motion.div>
  );
}
import { motion } from 'motion/react';
import { Shield, Terminal, Lock, Network, Globe, Server, Eye, FileCheck, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Award, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Navigation } from './Navigation';
import koffi_amalaman from './assets/Koffi_amalaman.jpeg'
import le_groupe from './assets/le_groupe.jpeg'
import equipe from './assets/equipe.jpeg'


const skills = [
  { name: 'Linux/Kali', icon: Terminal },
  { name: 'Pentesting', icon: Eye },
  { name: 'Réseaux', icon: Network },
  { name: 'Sécurité', icon: Shield },
  { name: 'PHP/Backend', icon: Server },
  { name: 'Administration', icon: Lock }
];

const projects = [
  {
    title: 'CarteVax',
    description: 'Fiche vaccinale numérique sécurisée',
    tech: ['PHP', 'MySQL', 'Sécurité'],
    icon: FileCheck
  },
  {
    title: 'Interfaces Admin PHP',
    description: 'Back-office de gestion utilisateurs',
    tech: ['PHP', 'SQL', 'Admin'],
    icon: Lock
  },
  {
    title: 'Projets Réseaux',
    description: 'Modélisation, sécurité et pratiques Kali',
    tech: ['Kali Linux', 'Réseaux', 'Security'],
    icon: Network
  }
];

export function SecurityWorld() {
  return (
    <motion.div
      className="w-full min-h-screen bg-black relative"
      initial={{ x: -1000, rotateY: -45, opacity: 0 }}
      animate={{ x: 0, rotateY: 0, opacity: 1 }}
      exit={{ x: -1000, rotateY: -45, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      {/* Navigation Left */}
      <Navigation theme="security" position="left" />
      
      {/* Navigation Right */}
      <Navigation theme="security" position="right" />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Glitch lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(0deg, rgba(0,255,136,0) 0%, rgba(0,255,136,0.1) 50%, rgba(0,255,136,0) 100%)',
              'linear-gradient(180deg, rgba(0,255,136,0) 0%, rgba(0,255,136,0.1) 50%, rgba(0,255,136,0) 100%)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
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
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          >
            <div className="relative w-40 h-40 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-2 rounded-full overflow-hidden border-2 border-green-400/50"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 136, 0.3)',
                    '0 0 40px rgba(0, 255, 136, 0.6)',
                    '0 0 20px rgba(0, 255, 136, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ImageWithFallback
                  src={koffi_amalaman} alt="Koffi Amalaman"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="inline-block mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 255, 136, 0.3)',
                '0 0 40px rgba(0, 255, 136, 0.6)',
                '0 0 20px rgba(0, 255, 136, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Shield className="w-20 h-20 text-green-400" />
          </motion.div>
          
          <h1 className="text-6xl mb-4 glitch-text" style={{ color: '#00ff88' }}>
            Koffi Amalaman Christ
          </h1>
          
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-green-400/20 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="relative text-2xl text-cyan-300 terminal-text">
              {'>'} Sécurité Numérique & Réseaux Informatiques_
            </p>
          </div>
          
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Étudiant en 2ᵉ année Réseaux Informatiques | Spécialiste en sécurité, 
            pentesting et administration système Linux/Kali
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
          <h2 className="text-3xl text-green-400 mb-8 text-center terminal-text">
            {'>'} whoami_
          </h2>
          
          <div className="max-w-4xl mx-auto cyber-card">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4 text-gray-300">
                <p>
                  Passionné par la cybersécurité et les réseaux informatiques, je suis actuellement 
                  étudiant en 2ᵉ année de Réseaux Informatiques avec une expertise en sécurité des systèmes, 
                  pentesting et administration Linux/Kali.
                </p>
                <p>
                  Mon parcours combine formation académique en réseaux et formation intensive en 
                  développement Full-Stack chez Wecode, me permettant d'avoir une vision complète 
                  de l'infrastructure et de la sécurité des applications.
                </p>
                <p>
                  Spécialisé dans la sécurisation des systèmes, l'analyse de vulnérabilités et 
                  l'administration de serveurs Linux, je développe également des solutions sécurisées 
                  avec PHP, MySQL et des frameworks modernes.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-full h-64 bg-green-400/5 rounded-lg border border-green-400/30 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={le_groupe}
                    alt="Workspace Security"
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
          <h2 className="text-3xl text-green-400 mb-8 text-center terminal-text">
            {'<'} Formation & Certifications {'>'}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
              className="cyber-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-white">Formation Full-Stack</h3>
                    <span className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300 text-sm">
                      En cours
                    </span>
                  </div>
                  <p className="text-cyan-300 mb-2">Wecode</p>
                  <p className="text-gray-400 text-sm">
                    Formation intensive en développement web moderne : React, Next.js, Node.js, 
                    bases de données, API REST, et bonnes pratiques de développement.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="cyber-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                  <Network className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-white">Réseaux Informatiques - 2ᵉ année</h3>
                    <span className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300 text-sm">
                      2024-2025
                    </span>
                  </div>
                  <p className="text-cyan-300 mb-2">École Supérieure</p>
                  <p className="text-gray-400 text-sm">
                    Sécurité des réseaux, administration système Linux, architecture réseau, 
                    protocoles TCP/IP, pare-feu, VPN, et maintenance informatique.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="cyber-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-2">Certifications & Compétences</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300 text-sm">
                      Linux Administration
                    </span>
                    <span className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300 text-sm">
                      Kali Linux
                    </span>
                    <span className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300 text-sm">
                      Pentesting
                    </span>
                    <span className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300 text-sm">
                      Sécurité Réseau
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          id="skills"
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl text-green-400 mb-8 text-center terminal-text">
            {'<'} Compétences Sécurité {'>'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="cyber-card group cursor-pointer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <skill.icon className="w-8 h-8 text-green-400 mb-2 mx-auto group-hover:text-cyan-300 transition-colors" />
                <p className="text-gray-300 text-center text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl text-green-400 mb-8 text-center terminal-text">
            {'>'} Projets Sécurité & Administration_
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="cyber-project-card group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                {/* Project Image */}
                <div className="mb-4 h-48 bg-green-400/5 rounded-lg border border-green-400/30 overflow-hidden">
                  <ImageWithFallback
                    src={`/project-security-${index + 1}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                    <project.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Scan line effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          id="contact"
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h2 className="text-3xl text-green-400 mb-8 text-center terminal-text">
            {'>'} Contact_
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="cyber-terminal mb-8">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-mono text-sm space-y-1">
                <p className="text-green-400">$ whoami</p>
                <p className="text-gray-300">koffi@security:~$ Développeur Full-Stack | Spécialiste Sécurité</p>
                <p className="text-green-400">$ cat skills.txt</p>
                <p className="text-gray-300">Linux • Kali • Réseaux • Pentesting • PHP • MySQL • Administration_</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href="mailto:koffi.christ@example.com"
                className="cyber-card group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">koffi.christ@example.com</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+2250565283279"
                className="cyber-card group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Téléphone</p>
                    <p className="text-white">+225 05 65 28 32 79</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                    <Linkedin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white">Koffi Amalaman Christ</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card group cursor-pointer"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-400/10 rounded-lg border border-green-400/30">
                    <Github className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white">github.com/koffi-christ</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .glitch-text {
          text-shadow: 
            0 0 10px rgba(0, 255, 136, 0.8),
            0 0 20px rgba(0, 255, 136, 0.6),
            0 0 30px rgba(0, 255, 136, 0.4);
        }

        .terminal-text {
          font-family: 'Courier New', monospace;
        }

        .cyber-card {
          background: rgba(0, 20, 10, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 8px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .cyber-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent);
          transition: left 0.5s;
        }

        .cyber-card:hover::before {
          left: 100%;
        }

        .cyber-project-card {
          background: rgba(0, 20, 10, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 255, 136, 0.1);
        }

        .cyber-project-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
        }

        .cyber-terminal {
          background: rgba(0, 20, 10, 0.8);
          border: 1px solid rgba(0, 255, 136, 0.4);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.2);
        }
      `}</style>
    </motion.div>
  );
}
import { motion } from 'motion/react';
import { useState } from 'react';
import { User, Award, Briefcase, GraduationCap, Mail, Menu, X } from 'lucide-react';

interface NavigationProps {
  theme: 'security' | 'fullstack';
  position?: 'left' | 'right';
}

const navItems = [
  { id: 'about', label: 'À propos', icon: User },
  { id: 'formation', label: 'Formation', icon: GraduationCap },
  { id: 'skills', label: 'Compétences', icon: Award },
  { id: 'projects', label: 'Projets', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export function Navigation({ theme, position = 'left' }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isSecurity = theme === 'security';
  const isLeft = position === 'left';

  return (
    <>
      {/* Mobile burger (visible mobile only) */}
      <button
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(true)}
        className={`block md:hidden fixed top-4 left-4 z-50 p-3 rounded-full backdrop-blur-md ${
          isSecurity ? 'bg-black/70 text-green-400' : 'bg-white/10 text-white'
        }`}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Desktop / large: conserve le style original (masqué sur mobile) */}
      <motion.nav
        className={`hidden md:block fixed ${isLeft ? 'left-0 ml-6' : 'right-0 mr-6'} top-1/2 -translate-y-1/2 z-40`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className={`flex flex-col gap-2 p-3 rounded-2xl backdrop-blur-md ${
          isSecurity 
            ? 'bg-black/60 border border-green-400/30' 
            : 'bg-white/15 border border-white/30'
        }`}>
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-3 rounded-xl transition-all duration-300 ${
                isSecurity
                  ? 'hover:bg-green-400/20 text-green-400 hover:text-green-300'
                  : 'hover:bg-white/20 text-white hover:text-white/90'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <item.icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <span className={`absolute ${isLeft ? 'left-full ml-4' : 'right-full mr-4'} px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                isSecurity
                  ? 'bg-black/80 text-green-400 border border-green-400/30'
                  : 'bg-white/20 text-white border border-white/30 backdrop-blur-md'
              }`}>
                {item.label}
              </span>

              {/* Glow effect */}
              {isSecurity && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-green-400/20 opacity-0 group-hover:opacity-100"
                  layoutId={`glow-${item.id}-${position}`}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile overlay drawer */}
      {open && (
        <motion.div className="md:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`relative w-64 max-w-full left-0 h-full p-6 ${isSecurity ? 'bg-black/90 text-green-400' : 'bg-slate-900/95 text-white'}`}
          >
            <button aria-label="Fermer le menu" onClick={() => setOpen(false)} className="mb-4 p-2 rounded-md">
              <X className={`w-6 h-6 ${isSecurity ? 'text-green-400' : 'text-white'}`} />
            </button>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { scrollToSection(item.id); setOpen(false); }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${isSecurity ? 'hover:bg-green-400/10' : 'hover:bg-white/5'}`}
                >
                  <item.icon className={`w-5 h-5 ${isSecurity ? 'text-green-400' : 'text-white'}`} />
                  <span className={`${isSecurity ? 'text-green-300' : 'text-white/90'}`}>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </>
  );
}
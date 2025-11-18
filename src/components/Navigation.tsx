import { motion } from 'motion/react';
import { User, Award, Briefcase, GraduationCap, Mail } from 'lucide-react';

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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isSecurity = theme === 'security';
  const isLeft = position === 'left';

  return (
    <motion.nav
      className={`fixed ${isLeft ? 'left-0 ml-6' : 'right-0 mr-6'} top-1/2 -translate-y-1/2 z-40`}
      initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
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
            initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.1, x: isLeft ? 5 : -5 }}
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
  );
}
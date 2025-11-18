import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SecurityWorld } from './components/SecurityWorld';
import { FullStackWorld } from './components/FullStackWorld';
import { Shield, Code } from 'lucide-react';

export default function App() {
  const [activeWorld, setActiveWorld] = useState<'security' | 'fullstack'>('security');

  const toggleWorld = () => {
    setActiveWorld(prev => prev === 'security' ? 'fullstack' : 'security');
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Toggle Button */}
      <motion.div 
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
            activeWorld === 'security' 
              ? 'bg-green-500/30' 
              : 'bg-purple-500/30'
          }`} />
          
          <button
            onClick={toggleWorld}
            className="relative bg-black/80 backdrop-blur-sm border-2 rounded-full px-8 py-4 flex items-center gap-8 hover:scale-105 transition-all duration-300"
            style={{
              borderColor: activeWorld === 'security' ? '#00ff88' : '#a855f7'
            }}
          >
            {/* Left side - Security */}
            <div className={`flex items-center gap-3 transition-all duration-300 ${
              activeWorld === 'security' ? 'opacity-100 scale-110' : 'opacity-40 scale-90'
            }`}>
              <Shield className="w-6 h-6" style={{ color: '#00ff88' }} />
              <span className="text-green-400">Sécurité</span>
            </div>

            {/* Center indicator */}
            <motion.div 
              className="w-16 h-8 bg-white/10 rounded-full relative"
              layout
            >
              <motion.div
                className="absolute top-1 w-6 h-6 rounded-full"
                style={{
                  background: activeWorld === 'security' 
                    ? 'linear-gradient(135deg, #00ff88, #00cc66)' 
                    : 'linear-gradient(135deg, #a855f7, #ec4899)'
                }}
                animate={{
                  x: activeWorld === 'security' ? 2 : 34
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </motion.div>

            {/* Right side - Full-Stack */}
            <div className={`flex items-center gap-3 transition-all duration-300 ${
              activeWorld === 'fullstack' ? 'opacity-100 scale-110' : 'opacity-40 scale-90'
            }`}>
              <span className="text-purple-400">Full-Stack</span>
              <Code className="w-6 h-6" style={{ color: '#a855f7' }} />
            </div>
          </button>
        </div>
      </motion.div>

      {/* Worlds */}
      <AnimatePresence mode="wait">
        {activeWorld === 'security' ? (
          <SecurityWorld key="security" />
        ) : (
          <FullStackWorld key="fullstack" />
        )}
      </AnimatePresence>
    </div>
  );
}

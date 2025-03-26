import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SparklesCore } from "./Sparkles";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectStack({
  randomRotation = true,
  sensitivity = 150,
  cardDimensions = { width: 350, height: 500 },
  projects = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = true
}) {
  const [cards, setCards] = useState(projects);

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 1000,
      }}
    >
      {cards.map((project, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5
          : 0;

        return (
          <CardRotate
            key={project.id}
            onSendToBack={() => sendToBack(project.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-xl overflow-hidden border border-gray-800 bg-[#0e0e0e] shadow-2xl"
              onClick={() => sendToBackOnClick && sendToBack(project.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <div className="h-full flex flex-col relative">
                {/* Project image with gradient overlay */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                {/* Project title with neon accent */}
                <div className="px-6 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="h-[2px] w-20 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-3" />
                </div>
                
                {/* Project description */}
                <div className="px-6 flex-1">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tags */}
                {project.tags && (
                  <div className="px-6 py-3 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-900 rounded-full text-xs text-[#40ffaa] border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Links with hover effects */}
                <div className="px-6 pb-6 flex justify-between mt-auto">
                  {project.repoLink && (
                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-[#4079ff] transition-colors duration-300 group"
                    >
                      <FiGithub className="mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">Repository</span>
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-[#40ffaa] transition-colors duration-300 group"
                    >
                      <FiExternalLink className="mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
                
                {/* Subtle sparkle effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={20}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                  />
                </div>
              </div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
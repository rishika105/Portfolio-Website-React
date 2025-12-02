import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react"; // Add useEffect import
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SparklesCore } from "./Sparkles";
import { FaGithub } from "react-icons/fa";

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
  sendToBackOnClick = true,
  githubProfile = "https://github.com/rishika105",
}) {
  const [cards, setCards] = useState([]);

  // Create the GitHub explore card
  const exploreGithubCard = {
    id: "github-explore",
    type: "github",
    title: "Explore More",
    description: "Check out all my projects and contributions on GitHub",
    image: "https://images.unsplash.com/photo-1624272949900-9ae4c56397e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["All Projects", "Open Source", "Contributions"],
    repoLink: githubProfile,
  };

  // Initialize cards with GitHub card at the end (top of the stack)
  useEffect(() => {
    // GitHub card should be first in array so it renders last (on top)
    const initialCards = [exploreGithubCard, ...projects];
    setCards(initialCards);
  }, [projects, githubProfile]);

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
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        const isGithubCard = project.type === "github";

        return (
          <CardRotate
            key={project.id}
            onSendToBack={() => sendToBack(project.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-xl w-full -ml-4 md:-ml-0 overflow-hidden border border-gray-800 bg-[#0e0e0e] shadow-2xl"
              onClick={() => sendToBackOnClick && sendToBack(project.id)}
              animate={{
                // Adjust rotation to account for GitHub card being first in array
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
              <div className="h-full flex flex-col relative gap-4">
                <div className="flex-1 flex flex-col">
                  {/* Project image with gradient overlay - Special styling for GitHub card */}
                  <div className="h-48 overflow-hidden relative">
                    {isGithubCard ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                        <FaGithub className="text-white text-8xl opacity-80" />
                      </div>
                    ) : (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      </>
                    )}
                  </div>

                  {/* Project title with neon accent */}
                  <div className="px-6 pt-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {isGithubCard ? (
                        <span className="flex items-center gap-2">
                          <FaGithub className="text-2xl" />
                          {project.title}
                        </span>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <div 
                      className={`h-[2px] w-20 mb-3 ${isGithubCard 
                        ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                        : "bg-gradient-to-r from-[#40ffaa] to-[#4079ff]"
                      }`}
                    />

                    {/* Project description */}
                    <div className="px-3 flex mx-auto">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {project.tags && (
                  <div className="px-6 py-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs border ${
                          isGithubCard
                            ? "bg-gray-900 text-purple-400 border-purple-800"
                            : "bg-gray-900 text-[#40ffaa] border-gray-800"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links with hover effects */}
                <div className="px-6 pb-6 flex justify-between">
                  {isGithubCard ? (
                    <a
                      href={githubProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 group w-full justify-center"
                    >
                      <FaGithub className="mr-2 text-2xl group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-semibold">Explore GitHub Profile</span>
                    </a>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>

                {/* Subtle sparkle effect - More intense for GitHub card */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <SparklesCore
                    background="transparent"
                    minSize={isGithubCard ? 0.6 : 0.4}
                    maxSize={isGithubCard ? 1.2 : 1}
                    particleDensity={isGithubCard ? 25 : 15}
                    className="w-full h-full"
                    particleColor={isGithubCard ? "#C084FC" : "#FFFFFF"}
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
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { tools } from "@/data/utilitiesData";
import { cn } from "@/lib/utils";

interface MacOSDockProps {
  currentToolSlug?: string;
}

const STORAGE_KEY = "realm-dock-recent-tools";
const DOCK_SIZE = 5; // Show 5 tools in dock (4 + current active)

const MacOSDock: React.FC<MacOSDockProps> = ({ currentToolSlug: propCurrentToolSlug }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get current tool slug from URL if not provided as prop
  const currentToolSlug = propCurrentToolSlug || 
    (location.pathname.startsWith("/utilities/") 
      ? location.pathname.split("/utilities/")[1]?.split("/")[0]
      : undefined);

  // Get recently used tools from localStorage
  const getRecentTools = (): string[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  // Save tool to recent tools
  const saveRecentTool = (slug: string) => {
    try {
      const recent = getRecentTools();
      const updated = [slug, ...recent.filter((s) => s !== slug)].slice(0, 10);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  // Update recent tools when current tool changes
  useEffect(() => {
    if (currentToolSlug) {
      saveRecentTool(currentToolSlug);
    }
  }, [currentToolSlug]);

  // Get dock tools: current active tool + 4 others
  const dockTools = useMemo(() => {
    // Ensure we have all tools including social-media-preview
    const allTools = [...tools];
    const socialPreviewTool = allTools.find((t) => t.slug === "social-media-preview");
    
    if (!socialPreviewTool) {
      console.error("Social Media Preview tool not found in tools array!");
    }

    const currentTool = allTools.find((t) => t.slug === currentToolSlug);
    if (!currentTool) return allTools.slice(0, DOCK_SIZE);

    const recentSlugs = getRecentTools();
    const otherTools = allTools
      .filter((t) => t.slug !== currentToolSlug)
      .sort((a, b) => {
        const aIndex = recentSlugs.indexOf(a.slug);
        const bIndex = recentSlugs.indexOf(b.slug);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      })
      .slice(0, DOCK_SIZE - 1);

    return [currentTool, ...otherTools];
  }, [currentToolSlug]);

  // Get tools not in dock
  const toolsNotInDock = useMemo(() => {
    const dockSlugs = new Set(dockTools.map((t) => t.slug));
    const allTools = [...tools];
    const notInDock = allTools.filter((t) => !dockSlugs.has(t.slug));
    
    // Ensure social-media-preview is included if it exists
    const socialPreviewTool = allTools.find((t) => t.slug === "social-media-preview");
    if (socialPreviewTool && !dockSlugs.has("social-media-preview") && !notInDock.some((t) => t.slug === "social-media-preview")) {
      console.warn("Adding Social Media Preview to not-in-dock list");
      notInDock.push(socialPreviewTool);
    }
    
    return notInDock;
  }, [dockTools]);

  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  const handleToolClick = (toolSlug: string) => {
    saveRecentTool(toolSlug);
    setIsExpanded(false);
    navigate(`/utilities/${toolSlug}`);
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={cn(
          "bg-white/70 backdrop-blur-xl rounded-2xl border border-realm-lightgray shadow-2xl",
          "px-4 py-3 flex items-center gap-2"
        )}
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Dock Tools (Active + 4 others) */}
        {!isExpanded &&
          dockTools.map((tool, index) => {
            const Icon = tool.icon;
            const isActive = tool.slug === currentToolSlug;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={tool.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.5, y: -10 }}
                transition={springConfig}
                className="relative"
              >
                <button
                  onClick={() => handleToolClick(tool.slug)}
                  className={cn(
                    "w-12 h-12 flex items-center justify-center rounded-lg transition-all",
                    isActive && "bg-white/50",
                    isHovered && "bg-white/30"
                  )}
                  aria-label={tool.name}
                >
                  <Icon
                    className="w-6 h-6 text-realm-black"
                    aria-hidden="true"
                  />
                </button>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0F7C4F] rounded-full"
                  />
                )}
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-realm-black text-white text-xs rounded pointer-events-none"
                  >
                    {tool.name}
                  </motion.div>
                )}
              </motion.div>
            );
          })}

        {/* Expanded View */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl rounded-2xl border border-realm-lightgray shadow-2xl p-4"
              style={{ width: "min(calc(100vw - 2rem), 800px)" }}
            >
              <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                {toolsNotInDock
                  .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically for easier finding
                  .map((tool) => {
                  const Icon = tool.icon;
                  const isActive = tool.slug === currentToolSlug;

                  return (
                    <motion.div
                      key={tool.id}
                      whileHover={{ scale: 1.1 }}
                      transition={springConfig}
                      className="relative group"
                    >
                      <button
                        onClick={() => handleToolClick(tool.slug)}
                        className={cn(
                          "w-12 h-12 flex items-center justify-center rounded-lg transition-all",
                          isActive && "bg-white/50 ring-2 ring-[#0F7C4F]"
                        )}
                        aria-label={tool.name}
                      >
                        <Icon
                          className="w-6 h-6 text-realm-black"
                          aria-hidden="true"
                        />
                      </button>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0F7C4F] rounded-full"
                        />
                      )}
                      {/* Tooltip for expanded view */}
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-realm-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {tool.name}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* More Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1, rotate: isExpanded ? 45 : 0 }}
          whileTap={{ scale: 0.95 }}
          transition={springConfig}
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-lg transition-all",
            isExpanded ? "bg-white/50" : "hover:bg-white/30"
          )}
          aria-label={isExpanded ? "Collapse dock" : "Expand dock"}
        >
          {isExpanded ? (
            <X className="w-5 h-5 text-realm-black" />
          ) : (
            <Plus className="w-5 h-5 text-realm-black" />
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MacOSDock;


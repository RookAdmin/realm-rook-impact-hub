import React, { useState, useMemo } from "react";
import { Copy, Check, TrendingUp, FileText, Hash, AlignLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface WordCounterProps {
  onCopy?: (text: string) => void;
}

const WordCounter: React.FC<WordCounterProps> = ({ onCopy }) => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/) : [];
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
    const readingTime = Math.ceil(words.length / 200); // Average reading speed: 200 words/min

    return {
      words: words.length,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  const handleCopy = async () => {
    if (text && onCopy) {
      await navigator.clipboard.writeText(text);
      onCopy(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const statCards = [
    { icon: FileText, label: "Words", value: stats.words, color: "bg-blue-500/10 text-blue-600" },
    { icon: Hash, label: "Characters", value: stats.characters, color: "bg-purple-500/10 text-purple-600" },
    { icon: Hash, label: "No Spaces", value: stats.charactersNoSpaces, color: "bg-indigo-500/10 text-indigo-600" },
    { icon: AlignLeft, label: "Sentences", value: stats.sentences, color: "bg-green-500/10 text-green-600" },
    { icon: BookOpen, label: "Paragraphs", value: stats.paragraphs, color: "bg-orange-500/10 text-orange-600" },
    { icon: TrendingUp, label: "Reading Time", value: `${stats.readingTime} min`, color: "bg-pink-500/10 text-pink-600" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label htmlFor="text-input" className="block text-sm font-semibold text-realm-black mb-3">
          Enter your text
        </label>
        <motion.textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="w-full min-h-[250px] px-4 py-3 border-2 border-realm-lightgray rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] focus:border-[#0F7C4F] resize-none transition-all duration-200 font-medium"
          whileFocus={{ scale: 1.01 }}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {text && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`p-5 rounded-xl border-2 border-transparent hover:border-[#0F7C4F]/20 transition-all duration-200 ${stat.color} backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium opacity-70">{stat.label}</span>
                  </div>
                  <motion.div
                    key={stat.value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-3xl font-bold"
                  >
                    {stat.value}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {text && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleCopy}
              className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-8 py-3 flex items-center gap-2 shadow-lg shadow-[#0F7C4F]/20 transition-all duration-200"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Copy className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
              {copied ? "Copied!" : "Copy Text"}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WordCounter;

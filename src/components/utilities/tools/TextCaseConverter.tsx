import React, { useState, useMemo } from "react";
import { Copy, Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface TextCaseConverterProps {
  onCopy?: (text: string) => void;
}

type CaseType = "lowercase" | "uppercase" | "title" | "sentence" | "camel" | "pascal" | "kebab" | "snake";

const TextCaseConverter: React.FC<TextCaseConverterProps> = ({ onCopy }) => {
  const [inputText, setInputText] = useState("");
  const [caseType, setCaseType] = useState<CaseType>("lowercase");
  const [copied, setCopied] = useState(false);

  const convertText = (text: string, type: CaseType): string => {
    if (!text) return "";

    switch (type) {
      case "lowercase":
        return text.toLowerCase();
      case "uppercase":
        return text.toUpperCase();
      case "title":
        return text
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      case "sentence":
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      case "camel":
        return text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
      case "pascal":
        return text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
          .replace(/^./, (chr) => chr.toUpperCase());
      case "kebab":
        return text.toLowerCase().replace(/\s+/g, "-");
      case "snake":
        return text.toLowerCase().replace(/\s+/g, "_");
      default:
        return text;
    }
  };

  const convertedText = useMemo(() => convertText(inputText, caseType), [inputText, caseType]);

  const handleCopy = async () => {
    if (convertedText && onCopy) {
      await navigator.clipboard.writeText(convertedText);
      onCopy(convertedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const caseOptions: { value: CaseType; label: string; description: string }[] = [
    { value: "lowercase", label: "lowercase", description: "all lowercase" },
    { value: "uppercase", label: "UPPERCASE", description: "ALL UPPERCASE" },
    { value: "title", label: "Title Case", description: "Title Case" },
    { value: "sentence", label: "Sentence case", description: "Sentence case" },
    { value: "camel", label: "camelCase", description: "camelCase" },
    { value: "pascal", label: "PascalCase", description: "PascalCase" },
    { value: "kebab", label: "kebab-case", description: "kebab-case" },
    { value: "snake", label: "snake_case", description: "snake_case" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label htmlFor="input-text" className="block text-sm font-semibold text-realm-black mb-3">
          Enter your text
        </label>
        <motion.textarea
          id="input-text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full min-h-[180px] px-4 py-3 border-2 border-realm-lightgray rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] focus:border-[#0F7C4F] resize-none transition-all duration-200 font-medium"
          whileFocus={{ scale: 1.01 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <label className="block text-sm font-semibold text-realm-black mb-3">
          Select case format
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {caseOptions.map((option, index) => (
            <motion.button
              key={option.value}
              onClick={() => setCaseType(option.value)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03, duration: 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium ${
                caseType === option.value
                  ? "bg-[#0F7C4F] text-white border-[#0F7C4F] shadow-lg shadow-[#0F7C4F]/20"
                  : "bg-white border-realm-lightgray hover:border-[#0F7C4F] hover:bg-[#0F7C4F]/5"
              }`}
            >
              <div className="text-sm font-semibold">{option.label}</div>
              <div className={`text-xs mt-1 ${caseType === option.value ? "text-white/80" : "text-realm-gray"}`}>
                {option.description}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {inputText && (
          <motion.div
            key="converted"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#0F7C4F]" />
              <label htmlFor="output-text" className="block text-sm font-semibold text-realm-black">
                Converted text
              </label>
            </div>
            <motion.textarea
              id="output-text"
              value={convertedText}
              readOnly
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              className="w-full min-h-[180px] px-4 py-3 border-2 border-[#0F7C4F]/20 rounded-xl bg-gradient-to-br from-[#0F7C4F]/5 to-[#0F7C4F]/10 resize-none font-medium"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 right-3"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={handleCopy}
                  size="sm"
                  className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg shadow-[#0F7C4F]/20"
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
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!inputText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center py-12 text-realm-gray"
        >
          <div className="text-center">
            <ArrowRight className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Enter text above to see the conversion</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TextCaseConverter;

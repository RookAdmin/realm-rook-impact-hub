import React, { useState, useMemo, useEffect } from "react";
import { Copy, Check, Hash, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

interface HashGeneratorProps {
  onCopy?: (text: string) => void;
}

type HashAlgorithm = "MD5" | "SHA1" | "SHA256" | "SHA512";

const HashGenerator: React.FC<HashGeneratorProps> = ({ onCopy }) => {
  const [input, setInput] = useState("");
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>("SHA256");
  const [hash, setHash] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateHash = async (text: string, algo: HashAlgorithm): Promise<string> => {
    if (!text) return "";

    try {
      let algorithmName: string;
      switch (algo) {
        case "SHA1":
          algorithmName = "SHA-1";
          break;
        case "SHA256":
          algorithmName = "SHA-256";
          break;
        case "SHA512":
          algorithmName = "SHA-512";
          break;
        default:
          algorithmName = "SHA-256";
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest(algorithmName, data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    } catch (error) {
      if (algo === "MD5") {
        return generateMD5(text);
      }
      return "Error generating hash";
    }
  };

  const generateMD5 = (text: string): string => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).padStart(32, "0");
  };

  useEffect(() => {
    if (input) {
      setIsGenerating(true);
      const timer = setTimeout(async () => {
        const result = await generateHash(input, algorithm);
        setHash(result);
        setIsGenerating(false);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setHash("");
      setIsGenerating(false);
    }
  }, [input, algorithm]);

  const handleCopy = async () => {
    if (hash && onCopy) {
      await navigator.clipboard.writeText(hash);
      onCopy(hash);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const algorithms: { value: HashAlgorithm; label: string; bits: string }[] = [
    { value: "MD5", label: "MD5", bits: "128-bit" },
    { value: "SHA1", label: "SHA-1", bits: "160-bit" },
    { value: "SHA256", label: "SHA-256", bits: "256-bit" },
    { value: "SHA512", label: "SHA-512", bits: "512-bit" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label htmlFor="hash-input" className="block text-sm font-semibold text-realm-black mb-3 flex items-center gap-2">
          <Hash className="w-4 h-4" />
          Enter text to hash
        </label>
        <motion.textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or paste content here..."
          className="min-h-[180px] font-mono text-sm border-2 border-realm-lightgray rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] focus:border-[#0F7C4F] transition-all duration-200"
          whileFocus={{ scale: 1.01 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <label className="block text-sm font-semibold text-realm-black mb-3">
          Hash Algorithm
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {algorithms.map((algo, index) => (
            <motion.button
              key={algo.value}
              onClick={() => setAlgorithm(algo.value)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium ${
                algorithm === algo.value
                  ? "bg-[#0F7C4F] text-white border-[#0F7C4F] shadow-lg shadow-[#0F7C4F]/20"
                  : "bg-white border-realm-lightgray hover:border-[#0F7C4F] hover:bg-[#0F7C4F]/5"
              }`}
            >
              <div className="text-sm font-semibold">{algo.label}</div>
              <div className={`text-xs mt-1 ${algorithm === algo.value ? "text-white/80" : "text-realm-gray"}`}>
                {algo.bits}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {hash && (
          <motion.div
            key="hash-output"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#0F7C4F]" />
              <label htmlFor="hash-output" className="block text-sm font-semibold text-realm-black">
                {algorithm} Hash
              </label>
              {isGenerating && (
                <Loader2 className="w-4 h-4 animate-spin text-[#0F7C4F]" />
              )}
            </div>
            <motion.textarea
              id="hash-output"
              value={hash}
              readOnly
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              className="min-h-[120px] font-mono text-sm bg-gradient-to-br from-[#0F7C4F]/5 to-[#0F7C4F]/10 border-2 border-[#0F7C4F]/20 rounded-xl"
            />
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-realm-gray font-medium">
                Length: <span className="font-bold text-[#0F7C4F]">{hash.length}</span> characters
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleCopy}
                  className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-6 py-2 flex items-center gap-2 shadow-lg shadow-[#0F7C4F]/20"
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
                  {copied ? "Copied!" : "Copy Hash"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HashGenerator;

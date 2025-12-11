import React, { useState, useMemo } from "react";
import { Copy, CheckCircle2, AlertCircle, Check, Code, Sparkles, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

interface JSONFormatterProps {
  onCopy?: (text: string) => void;
}

const JSONFormatter: React.FC<JSONFormatterProps> = ({ onCopy }) => {
  const [input, setInput] = useState("");
  const [indent, setIndent] = useState(2);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const formatted = useMemo(() => {
    if (!input.trim()) {
      setError(null);
      return "";
    }
    
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indent);
      setError(null);
      return formatted;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
      return "";
    }
  }, [input, indent]);

  const handleCopy = async () => {
    if (formatted && onCopy) {
      await navigator.clipboard.writeText(formatted);
      onCopy(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setInput(minified);
      setIndent(0);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const handleValidate = () => {
    try {
      JSON.parse(input);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const stats = useMemo(() => {
    if (!formatted) return null;
    const lines = formatted.split("\n").length;
    const size = new Blob([formatted]).size;
    return { lines, size: `${(size / 1024).toFixed(2)} KB` };
  }, [formatted]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="json-input" className="text-sm font-semibold text-realm-black flex items-center gap-2">
            <Code className="w-4 h-4" />
            JSON Input
          </label>
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleValidate}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Validate
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleMinify}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <Minus className="w-4 h-4 mr-2" />
                Minify
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.textarea
          id="json-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"key": "value", "array": [1, 2, 3]}'
          className="min-h-[200px] font-mono text-sm border-2 border-realm-lightgray rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] focus:border-[#0F7C4F] transition-all duration-200"
          whileFocus={{ scale: 1.01 }}
        />
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200"
            >
              <AlertCircle className="w-4 h-4" />
              <span className="font-medium">{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="indent" className="text-sm font-semibold text-realm-black">
            Indentation
          </label>
          <motion.span
            key={indent}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-lg font-bold text-[#0F7C4F]"
          >
            {indent} {indent === 0 ? "(Minified)" : "spaces"}
          </motion.span>
        </div>
        <input
          id="indent"
          type="range"
          min="0"
          max="4"
          step="1"
          value={indent}
          onChange={(e) => setIndent(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-realm-gray mt-2">
          <span>0</span>
          <span>2</span>
          <span>4</span>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {formatted && !error && (
          <motion.div
            key="formatted"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#0F7C4F]" />
                <label htmlFor="json-output" className="text-sm font-semibold text-realm-black">
                  Formatted JSON
                </label>
              </div>
              <div className="flex items-center gap-4">
                {stats && (
                  <div className="flex items-center gap-2 text-xs text-realm-gray">
                    <span>{stats.lines} lines</span>
                    <span>•</span>
                    <span>{stats.size}</span>
                  </div>
                )}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2 text-green-600 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-medium">Valid</span>
                </motion.div>
              </div>
            </div>
            <motion.textarea
              id="json-output"
              value={formatted}
              readOnly
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              className="min-h-[300px] font-mono text-sm bg-gradient-to-br from-[#0F7C4F]/5 to-[#0F7C4F]/10 border-2 border-[#0F7C4F]/20 rounded-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-end mt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleCopy}
                  className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-8 py-3 flex items-center gap-2 shadow-lg shadow-[#0F7C4F]/20"
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
                  {copied ? "Copied!" : "Copy Formatted JSON"}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JSONFormatter;

import React, { useState, useEffect } from "react";
import { Copy, Check, RefreshCw, Key, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface UUIDGeneratorProps {
  onCopy?: (text: string) => void;
}

type UUIDVersion = "v1" | "v4";

const UUIDGenerator: React.FC<UUIDGeneratorProps> = ({ onCopy }) => {
  const [version, setVersion] = useState<UUIDVersion>("v4");
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [allCopied, setAllCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateUUID = (ver: UUIDVersion): string => {
    if (ver === "v4") {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    } else {
      const timestamp = Date.now().toString(16);
      const random = "xxxxxxxx-xxxx-4xxx-yxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
      return `${timestamp}-${random}`;
    }
  };

  const generateUUIDs = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newUUIDs: string[] = [];
      for (let i = 0; i < count; i++) {
        newUUIDs.push(generateUUID(version));
      }
      setUuids(newUUIDs);
      setIsGenerating(false);
    }, 150);
  };

  useEffect(() => {
    generateUUIDs();
  }, [version, count]);

  const handleCopy = async (uuid: string, index: number) => {
    if (onCopy) {
      await navigator.clipboard.writeText(uuid);
      onCopy(uuid);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const handleCopyAll = async () => {
    if (onCopy && uuids.length > 0) {
      await navigator.clipboard.writeText(uuids.join("\n"));
      onCopy(uuids.join("\n"));
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <div>
          <label htmlFor="version" className="block text-sm font-semibold text-realm-black mb-3 flex items-center gap-2">
            <Key className="w-4 h-4" />
            UUID Version
          </label>
          <div className="flex gap-3">
            {(["v1", "v4"] as UUIDVersion[]).map((ver) => (
              <motion.button
                key={ver}
                onClick={() => setVersion(ver)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all duration-200 font-medium ${
                  version === ver
                    ? "bg-[#0F7C4F] text-white border-[#0F7C4F] shadow-lg shadow-[#0F7C4F]/20"
                    : "bg-white border-realm-lightgray hover:border-[#0F7C4F] hover:bg-[#0F7C4F]/5"
                }`}
              >
                <div className="text-sm font-semibold">
                  Version {ver === "v1" ? "1" : "4"}
                </div>
                <div className={`text-xs mt-1 ${version === ver ? "text-white/80" : "text-realm-gray"}`}>
                  {ver === "v1" ? "Time-based" : "Random"}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="count" className="block text-sm font-semibold text-realm-black mb-3">
            Number of UUIDs
          </label>
          <Input
            id="count"
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))}
            className="w-full border-2 border-realm-lightgray rounded-xl focus:ring-2 focus:ring-[#0F7C4F] focus:border-[#0F7C4F]"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex justify-end"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={generateUUIDs}
            variant="outline"
            className="rounded-full px-6 py-2 flex items-center gap-2"
            disabled={isGenerating}
          >
            <RefreshCw className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
            Regenerate
          </Button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {uuids.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0F7C4F]" />
                <label className="text-sm font-semibold text-realm-black">
                  Generated UUIDs ({uuids.length})
                </label>
              </div>
              {uuids.length > 1 && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleCopyAll}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    <AnimatePresence mode="wait">
                      {allCopied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Check className="w-4 h-4 mr-1" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Copy className="w-4 h-4 mr-1" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {allCopied ? "Copied!" : "Copy All"}
                  </Button>
                </motion.div>
              )}
            </div>
            <div className="space-y-2">
              {uuids.map((uuid, index) => (
                <motion.div
                  key={`${uuid}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-realm-lightgray to-white rounded-xl border-2 border-realm-lightgray hover:border-[#0F7C4F] transition-all duration-200"
                >
                  <code className="flex-1 font-mono text-sm font-medium">{uuid}</code>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={() => handleCopy(uuid, index)}
                      variant="ghost"
                      size="sm"
                      className="rounded-full"
                    >
                      <AnimatePresence mode="wait">
                        {copiedIndex === index ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Check className="w-4 h-4 text-green-600" />
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
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UUIDGenerator;

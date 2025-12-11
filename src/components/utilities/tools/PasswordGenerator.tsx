import React, { useState, useMemo, useEffect } from "react";
import { Copy, RefreshCw, Check, Lock, Shield, Zap, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";

interface PasswordGeneratorProps {
  onCopy?: (text: string) => void;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ onCopy }) => {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const generatePassword = () => {
    setIsGenerating(true);
    let charset = "";
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (!charset) {
      setIsGenerating(false);
      return;
    }

    setTimeout(() => {
      let newPassword = "";
      for (let i = 0; i < length; i++) {
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      setPassword(newPassword);
      setIsGenerating(false);
    }, 150);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const passwordStrength = useMemo(() => {
    if (!password) return { score: 0, label: "", color: "", width: "0%" };

    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (password.length >= 16) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;
    if (password.length >= 20) score++;

    if (score <= 2) return { score, label: "Weak", color: "bg-red-500", width: "25%" };
    if (score <= 4) return { score, label: "Fair", color: "bg-yellow-500", width: "50%" };
    if (score <= 6) return { score, label: "Good", color: "bg-blue-500", width: "75%" };
    return { score, label: "Strong", color: "bg-green-500", width: "100%" };
  }, [password]);

  const handleCopy = async () => {
    if (password && onCopy) {
      await navigator.clipboard.writeText(password);
      onCopy(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const characterTypes = [
    { label: "Uppercase Letters (A-Z)", checked: includeUppercase, onChange: setIncludeUppercase, icon: "A" },
    { label: "Lowercase Letters (a-z)", checked: includeLowercase, onChange: setIncludeLowercase, icon: "a" },
    { label: "Numbers (0-9)", checked: includeNumbers, onChange: setIncludeNumbers, icon: "1" },
    { label: "Symbols (!@#$...)", checked: includeSymbols, onChange: setIncludeSymbols, icon: "!" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="password-length" className="block text-sm font-semibold text-realm-black">
            Password Length
          </label>
          <motion.span
            key={length}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-[#0F7C4F]"
          >
            {length}
          </motion.span>
        </div>
        <Slider
          id="password-length"
          min={8}
          max={64}
          step={1}
          value={[length]}
          onValueChange={(value) => setLength(value[0])}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-realm-gray mt-2">
          <span>8</span>
          <span>36</span>
          <span>64</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <label className="block text-sm font-semibold text-realm-black mb-3">
          Character Types
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {characterTypes.map((type, index) => (
            <motion.label
              key={type.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border-2 border-realm-lightgray hover:border-[#0F7C4F] transition-all duration-200 bg-white"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={type.checked}
                  onChange={(e) => type.onChange(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-realm-lightgray checked:bg-[#0F7C4F] checked:border-[#0F7C4F] cursor-pointer transition-all"
                />
                {type.checked && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </div>
              <div className="flex items-center gap-2 flex-1">
                <span className="text-lg font-bold text-[#0F7C4F]">{type.icon}</span>
                <span className="text-sm font-medium">{type.label}</span>
              </div>
            </motion.label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-realm-gray" />
            <label className="text-sm font-semibold text-realm-black">Generated Password</label>
          </div>
          <div className="flex items-center gap-3">
            <motion.span
              className={`text-sm font-bold px-3 py-1 rounded-full ${
                passwordStrength.score <= 2
                  ? "bg-red-100 text-red-600"
                  : passwordStrength.score <= 4
                  ? "bg-yellow-100 text-yellow-600"
                  : passwordStrength.score <= 6
                  ? "bg-blue-100 text-blue-600"
                  : "bg-green-100 text-green-600"
              }`}
              key={passwordStrength.label}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              {passwordStrength.label}
            </motion.span>
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <Button
                onClick={generatePassword}
                variant="ghost"
                size="sm"
                className="rounded-full"
                disabled={isGenerating}
              >
                <RefreshCw className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              readOnly
              className="font-mono text-lg bg-gradient-to-r from-realm-lightgray to-white border-2 border-realm-lightgray pr-12"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-realm-gray hover:text-realm-black transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
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
              {copied ? "Copied!" : "Copy"}
            </Button>
          </motion.div>
        </div>
        <div className="mt-3 h-2 bg-realm-lightgray rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${passwordStrength.color} rounded-full`}
            initial={{ width: "0%" }}
            animate={{ width: passwordStrength.width }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordGenerator;

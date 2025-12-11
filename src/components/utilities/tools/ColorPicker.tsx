import React, { useState, useMemo } from "react";
import { Copy, Check, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface ColorPickerProps {
  onCopy?: (text: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onCopy }) => {
  const [color, setColor] = useState("#3B82F6");
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgb = useMemo(() => hexToRgb(color), [color]);
  const hsl = useMemo(() => (rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null), [rgb]);

  const formats = useMemo(() => ({
    hex: color.toUpperCase(),
    rgb: rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "",
    rgba: rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` : "",
    hsl: hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : "",
    hsla: hsl ? `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)` : "",
  }), [color, rgb, hsl]);

  const handleCopy = async (format: string, value: string) => {
    if (onCopy && value) {
      await navigator.clipboard.writeText(value);
      onCopy(value);
      setCopiedFormat(format);
      setTimeout(() => setCopiedFormat(null), 2000);
    }
  };

  const formatLabels = {
    hex: "HEX",
    rgb: "RGB",
    rgba: "RGBA",
    hsl: "HSL",
    hsla: "HSLA",
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label htmlFor="color-picker" className="block text-sm font-semibold text-realm-black mb-3 flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Pick a Color
        </label>
        <div className="flex items-center gap-4">
          <motion.input
            id="color-picker"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-32 h-32 rounded-2xl border-2 border-realm-lightgray cursor-pointer shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.div
            className="flex-1 h-32 rounded-2xl border-2 border-realm-lightgray shadow-lg"
            style={{ backgroundColor: color }}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            key={color}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <label htmlFor="hex-input" className="block text-sm font-semibold text-realm-black mb-3">
          Hex Color
        </label>
        <div className="flex gap-2">
          <Input
            id="hex-input"
            value={color}
            onChange={(e) => {
              const value = e.target.value;
              if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
                setColor(value);
              }
            }}
            className="font-mono text-lg border-2 border-realm-lightgray rounded-xl focus:ring-2 focus:ring-[#0F7C4F] focus:border-[#0F7C4F]"
            placeholder="#000000"
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => handleCopy("hex", formats.hex)}
              variant="outline"
              className="rounded-full"
            >
              <AnimatePresence mode="wait">
                {copiedFormat === "hex" ? (
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
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#0F7C4F]" />
          <label className="block text-sm font-semibold text-realm-black">
            Color Formats
          </label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(formats)
            .filter(([key]) => key !== "hex")
            .map(([format, value], index) => (
              <motion.div
                key={format}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 rounded-xl border-2 border-realm-lightgray hover:border-[#0F7C4F] transition-all duration-200 bg-white"
              >
                <label className="block text-sm font-semibold text-realm-black mb-2 uppercase">
                  {formatLabels[format as keyof typeof formatLabels]}
                </label>
                <div className="flex gap-2">
                  <Input
                    value={value}
                    readOnly
                    className="font-mono bg-gradient-to-r from-realm-lightgray to-white border-2 border-realm-lightgray"
                  />
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      onClick={() => handleCopy(format, value)}
                      variant="outline"
                      className="rounded-full"
                    >
                      <AnimatePresence mode="wait">
                        {copiedFormat === format ? (
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
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ColorPicker;

import React, { useState, useMemo } from "react";
import { Copy, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ColorConverterProps {
  onCopy?: (text: string) => void;
}

type ColorFormat = "hex" | "rgb" | "hsl" | "cmyk";

const ColorConverter: React.FC<ColorConverterProps> = ({ onCopy }) => {
  const [inputFormat, setInputFormat] = useState<ColorFormat>("hex");
  const [inputValue, setInputValue] = useState("");

  const parseColor = (value: string, format: ColorFormat) => {
    try {
      if (format === "hex") {
        const hex = value.replace("#", "");
        if (!/^[0-9A-Fa-f]{6}$/.test(hex)) return null;
        return {
          r: parseInt(hex.substring(0, 2), 16),
          g: parseInt(hex.substring(2, 4), 16),
          b: parseInt(hex.substring(4, 6), 16),
        };
      } else if (format === "rgb") {
        const match = value.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (!match) return null;
        return {
          r: parseInt(match[1]),
          g: parseInt(match[2]),
          b: parseInt(match[3]),
        };
      } else if (format === "hsl") {
        const match = value.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
        if (!match) return null;
        const h = parseInt(match[1]) / 360;
        const s = parseInt(match[2]) / 100;
        const l = parseInt(match[3]) / 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
        const m = l - c / 2;
        let r = 0,
          g = 0,
          b = 0;
        if (h < 1 / 6) {
          r = c;
          g = x;
        } else if (h < 2 / 6) {
          r = x;
          g = c;
        } else if (h < 3 / 6) {
          g = c;
          b = x;
        } else if (h < 4 / 6) {
          g = x;
          b = c;
        } else if (h < 5 / 6) {
          r = x;
          b = c;
        } else {
          r = c;
          b = x;
        }
        return {
          r: Math.round((r + m) * 255),
          g: Math.round((g + m) * 255),
          b: Math.round((b + m) * 255),
        };
      }
    } catch {
      return null;
    }
    return null;
  };

  const rgb = useMemo(() => parseColor(inputValue, inputFormat), [inputValue, inputFormat]);

  const conversions = useMemo(() => {
    if (!rgb) return null;

    const hex = `#${rgb.r.toString(16).padStart(2, "0")}${rgb.g.toString(16).padStart(2, "0")}${rgb.b.toString(16).padStart(2, "0")}`.toUpperCase();

    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
      if (max === r) {
        h = ((g - b) / delta) % 6;
      } else if (max === g) {
        h = (b - r) / delta + 2;
      } else {
        h = (r - g) / delta + 4;
      }
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;

    const l = (max + min) / 2;
    const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    const hsl = `hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;

    const k = 1 - max;
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    const cmyk = `cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(y * 100)}%, ${Math.round(k * 100)}%)`;

    return {
      hex,
      rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      hsl,
      cmyk,
    };
  }, [rgb]);

  const handleCopy = (value: string) => {
    if (onCopy) {
      onCopy(value);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-realm-black mb-2">
          Input Format
        </label>
        <div className="grid grid-cols-4 gap-2">
          {(["hex", "rgb", "hsl", "cmyk"] as ColorFormat[]).map((format) => (
            <button
              key={format}
              onClick={() => setInputFormat(format)}
              className={`px-4 py-2 rounded-lg border transition-all uppercase ${
                inputFormat === format
                  ? "bg-[#0F7C4F] text-white border-[#0F7C4F]"
                  : "bg-white border-realm-lightgray hover:border-[#0F7C4F]"
              }`}
            >
              {format}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="color-input" className="block text-sm font-medium text-realm-black mb-2">
          Enter Color ({inputFormat.toUpperCase()})
        </label>
        <Input
          id="color-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={
            inputFormat === "hex"
              ? "#3B82F6"
              : inputFormat === "rgb"
              ? "rgb(59, 130, 246)"
              : inputFormat === "hsl"
              ? "hsl(217, 91%, 60%)"
              : "cmyk(76%, 47%, 0%, 4%)"
          }
          className="font-mono"
        />
        {rgb && (
          <div
            className="mt-2 h-12 rounded-lg border border-realm-lightgray"
            style={{ backgroundColor: conversions?.hex }}
          />
        )}
      </div>

      {conversions && (
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(conversions).map(([format, value]) => (
            <div key={format}>
              <label className="block text-sm font-medium text-realm-black mb-2 uppercase">
                {format}
              </label>
              <div className="flex gap-2">
                <Input value={value} readOnly className="font-mono bg-realm-lightgray" />
                <Button
                  onClick={() => handleCopy(value)}
                  variant="outline"
                  className="rounded-full"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorConverter;

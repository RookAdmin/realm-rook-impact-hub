import React, { useState, useMemo } from "react";
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface GradientGeneratorProps {
  onCopy?: (text: string) => void;
}

const GradientGenerator: React.FC<GradientGeneratorProps> = ({ onCopy }) => {
  const [color1, setColor1] = useState("#3B82F6");
  const [color2, setColor2] = useState("#8B5CF6");
  const [angle, setAngle] = useState(90);
  const [type, setType] = useState<"linear" | "radial">("linear");

  const gradientCSS = useMemo(() => {
    if (type === "linear") {
      return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    } else {
      return `radial-gradient(circle, ${color1}, ${color2})`;
    }
  }, [color1, color2, angle, type]);

  const handleCopy = () => {
    if (onCopy) {
      onCopy(`background: ${gradientCSS};`);
    }
  };

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      if (type === "linear") {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          Math.max(canvas.width, canvas.height)
        );
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "gradient.png";
          a.click();
          URL.revokeObjectURL(url);
        }
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="color1" className="text-sm font-medium text-realm-black">
            Color 1
          </Label>
          <div className="flex items-center gap-2 mt-1">
            <input
              id="color1"
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="w-16 h-16 rounded-lg border border-realm-lightgray cursor-pointer"
            />
            <Input
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="font-mono flex-1"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="color2" className="text-sm font-medium text-realm-black">
            Color 2
          </Label>
          <div className="flex items-center gap-2 mt-1">
            <input
              id="color2"
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="w-16 h-16 rounded-lg border border-realm-lightgray cursor-pointer"
            />
            <Input
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="font-mono flex-1"
            />
          </div>
        </div>
      </div>

      <div>
        <Label className="block text-sm font-medium text-realm-black mb-2">Gradient Type</Label>
        <div className="flex gap-2">
          <button
            onClick={() => setType("linear")}
            className={`flex-1 px-4 py-2 rounded-lg border transition-all ${
              type === "linear"
                ? "bg-[#0F7C4F] text-white border-[#0F7C4F]"
                : "bg-white border-realm-lightgray hover:border-[#0F7C4F]"
            }`}
          >
            Linear
          </button>
          <button
            onClick={() => setType("radial")}
            className={`flex-1 px-4 py-2 rounded-lg border transition-all ${
              type === "radial"
                ? "bg-[#0F7C4F] text-white border-[#0F7C4F]"
                : "bg-white border-realm-lightgray hover:border-[#0F7C4F]"
            }`}
          >
            Radial
          </button>
        </div>
      </div>

      {type === "linear" && (
        <div>
          <Label className="block text-sm font-medium text-realm-black mb-2">
            Angle: {angle}°
          </Label>
          <Slider
            min={0}
            max={360}
            step={1}
            value={[angle]}
            onValueChange={(value) => setAngle(value[0])}
            className="w-full"
          />
        </div>
      )}

      <div>
        <Label className="block text-sm font-medium text-realm-black mb-2">Preview</Label>
        <div
          className="h-64 rounded-lg border border-realm-lightgray"
          style={{ background: gradientCSS }}
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label className="text-sm font-medium text-realm-black">CSS Code</Label>
          <div className="flex gap-2">
            <Button onClick={handleCopy} variant="outline" className="rounded-full">
              <Copy className="w-4 h-4 mr-2" />
              Copy CSS
            </Button>
            <Button onClick={handleDownload} variant="outline" className="rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
        <div className="p-4 bg-realm-lightgray rounded-lg font-mono text-sm">
          background: {gradientCSS};
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;

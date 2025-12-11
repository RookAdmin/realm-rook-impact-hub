import React, { useState } from "react";
import { Copy, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface URLEncoderDecoderProps {
  onCopy?: (text: string) => void;
}

const URLEncoderDecoder: React.FC<URLEncoderDecoderProps> = ({ onCopy }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const handleEncode = () => {
    try {
      setOutput(encodeURIComponent(input));
    } catch (error) {
      setOutput("Error encoding URL");
    }
  };

  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch (error) {
      setOutput("Error decoding URL");
    }
  };

  const handleProcess = () => {
    if (mode === "encode") {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const handleCopy = () => {
    if (onCopy && output) {
      onCopy(output);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="url-input" className="block text-sm font-medium text-realm-black mb-2">
          Enter URL or encoded string
        </label>
        <textarea
          id="url-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Enter URL to encode..." : "Enter encoded string to decode..."}
          className="w-full min-h-[150px] px-4 py-3 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] focus:border-transparent resize-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setMode("encode")}
          className={`px-6 py-2 rounded-lg border transition-all ${
            mode === "encode"
              ? "bg-[#0F7C4F] text-white border-[#0F7C4F]"
              : "bg-white border-realm-lightgray hover:border-[#0F7C4F]"
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode("decode")}
          className={`px-6 py-2 rounded-lg border transition-all ${
            mode === "decode"
              ? "bg-[#0F7C4F] text-white border-[#0F7C4F]"
              : "bg-white border-realm-lightgray hover:border-[#0F7C4F]"
          }`}
        >
          Decode
        </button>
        <Button
          onClick={handleProcess}
          className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-8 py-3 flex items-center gap-2"
        >
          <ArrowUpDown className="w-4 h-4" />
          {mode === "encode" ? "Encode" : "Decode"}
        </Button>
      </div>

      {output && (
        <>
          <div>
            <label htmlFor="url-output" className="block text-sm font-medium text-realm-black mb-2">
              Result
            </label>
            <textarea
              id="url-output"
              value={output}
              readOnly
              className="w-full min-h-[150px] px-4 py-3 border border-realm-lightgray rounded-lg bg-realm-lightgray resize-none"
            />
          </div>
          <div className="flex justify-end">
            <Button
              onClick={handleCopy}
              className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-8 py-3 flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy Result
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default URLEncoderDecoder;


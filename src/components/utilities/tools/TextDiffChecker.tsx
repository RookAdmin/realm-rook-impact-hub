import React, { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TextDiffCheckerProps {
  onCopy?: (text: string) => void;
}

const TextDiffChecker: React.FC<TextDiffCheckerProps> = ({ onCopy }) => {
  const [originalText, setOriginalText] = useState("");
  const [modifiedText, setModifiedText] = useState("");

  const getDiff = () => {
    if (!originalText || !modifiedText) return null;

    const originalLines = originalText.split("\n");
    const modifiedLines = modifiedText.split("\n");
    const maxLines = Math.max(originalLines.length, modifiedLines.length);

    return Array.from({ length: maxLines }, (_, i) => ({
      original: originalLines[i] || "",
      modified: modifiedLines[i] || "",
      changed: originalLines[i] !== modifiedLines[i],
    }));
  };

  const diff = getDiff();

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="original-text" className="block text-sm font-medium text-realm-black mb-2">
            Original Text
          </label>
          <textarea
            id="original-text"
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder="Enter original text..."
            className="w-full min-h-[200px] px-4 py-3 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] focus:border-transparent resize-none"
          />
        </div>
        <div>
          <label htmlFor="modified-text" className="block text-sm font-medium text-realm-black mb-2">
            Modified Text
          </label>
          <textarea
            id="modified-text"
            value={modifiedText}
            onChange={(e) => setModifiedText(e.target.value)}
            placeholder="Enter modified text..."
            className="w-full min-h-[200px] px-4 py-3 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] focus:border-transparent resize-none"
          />
        </div>
      </div>

      {diff && (
        <div>
          <label className="block text-sm font-medium text-realm-black mb-2">Differences</label>
          <div className="border border-realm-lightgray rounded-lg p-4 bg-realm-lightgray max-h-[300px] overflow-y-auto">
            {diff.map((line, index) => (
              <div key={index} className="mb-2">
                {line.changed ? (
                  <div className="space-y-1">
                    <div className="text-red-600 line-through text-sm">- {line.original}</div>
                    <div className="text-green-600 text-sm">+ {line.modified}</div>
                  </div>
                ) : (
                  <div className="text-realm-gray text-sm">{line.original || line.modified}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextDiffChecker;


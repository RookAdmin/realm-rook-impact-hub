import React, { useState, useMemo } from "react";
import { Copy, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface RegexTesterProps {
  onCopy?: (text: string) => void;
}

const RegexTester: React.FC<RegexTesterProps> = ({ onCopy }) => {
  const [pattern, setPattern] = useState("");
  const [testString, setTestString] = useState("");
  const [flags, setFlags] = useState({
    global: true,
    caseInsensitive: false,
    multiline: false,
    dotAll: false,
  });

  const regexResult = useMemo(() => {
    if (!pattern || !testString) return null;

    try {
      let flagsString = "";
      if (flags.global) flagsString += "g";
      if (flags.caseInsensitive) flagsString += "i";
      if (flags.multiline) flagsString += "m";
      if (flags.dotAll) flagsString += "s";

      const regex = new RegExp(pattern, flagsString);
      const matches = [...testString.matchAll(new RegExp(pattern, flagsString + "g"))];
      const testResult = regex.test(testString);

      const highlightedText = testString.split("").map((char, index) => {
        let isMatch = false;
        for (const match of matches) {
          if (index >= match.index! && index < match.index! + match[0].length) {
            isMatch = true;
            break;
          }
        }
        return { char, isMatch };
      });

      return {
        isValid: true,
        testResult,
        matches,
        highlightedText,
        groups: matches.map((match) => match.groups || {}),
      };
    } catch (error) {
      return {
        isValid: false,
        error: error instanceof Error ? error.message : "Invalid regex",
      };
    }
  }, [pattern, testString, flags]);

  const handleCopy = (text: string) => {
    if (onCopy) {
      onCopy(text);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="regex-pattern" className="block text-sm font-medium text-realm-black mb-2">
          Regular Expression Pattern
        </label>
        <Input
          id="regex-pattern"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="Enter regex pattern, e.g., /[a-z]+/g"
          className="font-mono"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-realm-black mb-2">Flags</label>
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.global}
              onChange={(e) => setFlags({ ...flags, global: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-sm">Global (g)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.caseInsensitive}
              onChange={(e) => setFlags({ ...flags, caseInsensitive: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-sm">Case Insensitive (i)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.multiline}
              onChange={(e) => setFlags({ ...flags, multiline: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-sm">Multiline (m)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.dotAll}
              onChange={(e) => setFlags({ ...flags, dotAll: e.target.checked })}
              className="w-4 h-4"
            />
            <span className="text-sm">Dot All (s)</span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="test-string" className="block text-sm font-medium text-realm-black mb-2">
          Test String
        </label>
        <Textarea
          id="test-string"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against the regex pattern..."
          className="min-h-[150px] font-mono text-sm"
        />
      </div>

      {regexResult && (
        <>
          {regexResult.isValid ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-4 bg-realm-lightgray rounded-lg">
                {regexResult.testResult ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-green-600 font-medium">Match Found</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-600 font-medium">No Match</span>
                  </>
                )}
              </div>

              {regexResult.matches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-realm-black">
                      Matches ({regexResult.matches.length})
                    </label>
                  </div>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto">
                    {regexResult.matches.map((match, index) => (
                      <div
                        key={index}
                        className="p-3 bg-realm-lightgray rounded-lg font-mono text-sm"
                      >
                        <div className="text-realm-black">
                          Match {index + 1}: <span className="font-semibold">{match[0]}</span>
                        </div>
                        {match.index !== undefined && (
                          <div className="text-realm-gray text-xs mt-1">
                            Position: {match.index} - {match.index + match[0].length}
                          </div>
                        )}
                        {match.length > 1 && (
                          <div className="mt-2 space-y-1">
                            <div className="text-xs text-realm-gray">Groups:</div>
                            {Array.from({ length: match.length - 1 }, (_, i) => (
                              <div key={i} className="text-xs text-realm-black">
                                Group {i + 1}: {match[i + 1]}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-realm-black mb-2">
                  Highlighted Text
                </label>
                <div className="p-4 bg-realm-lightgray rounded-lg font-mono text-sm min-h-[100px]">
                  {regexResult.highlightedText.map((item, index) => (
                    <span
                      key={index}
                      className={item.isMatch ? "bg-yellow-300 text-realm-black" : ""}
                    >
                      {item.char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Invalid Regex</span>
              </div>
              <p className="text-sm text-red-600 mt-1">{regexResult.error}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RegexTester;

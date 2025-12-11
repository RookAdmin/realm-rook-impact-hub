import React, { useState, useMemo } from "react";
import { Copy, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface KeywordDensityCheckerProps {
  onCopy?: (text: string) => void;
}

const KeywordDensityChecker: React.FC<KeywordDensityCheckerProps> = ({ onCopy }) => {
  const [content, setContent] = useState("");
  const [keywords, setKeywords] = useState("");

  const analysis = useMemo(() => {
    if (!content || !keywords) return null;

    const keywordList = keywords
      .split(",")
      .map((k) => k.trim().toLowerCase())
      .filter((k) => k.length > 0);

    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 0);

    const totalWords = words.length;
    const wordFrequency: Record<string, number> = {};

    words.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    const keywordStats = keywordList.map((keyword) => {
      const keywordWords = keyword.split(/\s+/);
      let count = 0;

      if (keywordWords.length === 1) {
        count = wordFrequency[keyword] || 0;
      } else {
        // Phrase matching
        const phrase = keywordWords.join(" ");
        const contentLower = content.toLowerCase();
        const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
        count = (contentLower.match(regex) || []).length;
      }

      const density = totalWords > 0 ? (count / totalWords) * 100 : 0;
      const recommendation =
        density < 1
          ? "Too low - consider adding more"
          : density > 3
          ? "Too high - may be keyword stuffing"
          : "Optimal range";

      return {
        keyword,
        count,
        density: density.toFixed(2),
        recommendation,
      };
    });

    return {
      totalWords,
      keywordStats,
      topWords: Object.entries(wordFrequency)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
        .map(([word, count]) => ({
          word,
          count,
          density: ((count / totalWords) * 100).toFixed(2),
        })),
    };
  }, [content, keywords]);

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="content" className="text-sm font-medium text-realm-black">
          Content
        </Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paste your content here..."
          className="mt-1 min-h-[200px]"
        />
        {content && (
          <p className="text-xs text-realm-gray mt-1">
            {content.split(/\s+/).filter((w) => w.length > 0).length} words
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="keywords" className="text-sm font-medium text-realm-black">
          Keywords (comma-separated)
        </Label>
        <Input
          id="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="keyword1, keyword2, keyword phrase"
          className="mt-1"
        />
      </div>

      {analysis && (
        <div className="space-y-6">
          <div className="p-4 bg-realm-lightgray rounded-lg">
            <div className="text-2xl font-bold text-realm-black">{analysis.totalWords}</div>
            <div className="text-sm text-realm-gray">Total Words</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-realm-black mb-4">Keyword Analysis</h3>
            <div className="space-y-4">
              {analysis.keywordStats.map((stat, index) => (
                <div key={index} className="p-4 border border-realm-lightgray rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-realm-black">{stat.keyword}</span>
                    <span
                      className={`text-sm ${
                        parseFloat(stat.density) < 1
                          ? "text-red-600"
                          : parseFloat(stat.density) > 3
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {stat.density}%
                    </span>
                  </div>
                  <div className="text-sm text-realm-gray mb-2">
                    Appears {stat.count} {stat.count === 1 ? "time" : "times"}
                  </div>
                  <div className="h-2 bg-realm-lightgray rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        parseFloat(stat.density) < 1
                          ? "bg-red-600"
                          : parseFloat(stat.density) > 3
                          ? "bg-yellow-600"
                          : "bg-green-600"
                      }`}
                      style={{ width: `${Math.min(parseFloat(stat.density) * 10, 100)}%` }}
                    />
                  </div>
                  <div className="text-xs text-realm-gray mt-2">{stat.recommendation}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-realm-black mb-4">Top 10 Words</h3>
            <div className="space-y-2">
              {analysis.topWords.map((word, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-realm-lightgray rounded-lg"
                >
                  <div>
                    <span className="font-medium text-realm-black">{word.word}</span>
                    <span className="text-sm text-realm-gray ml-2">
                      {word.count} {word.count === 1 ? "time" : "times"}
                    </span>
                  </div>
                  <span className="text-sm text-realm-gray">{word.density}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeywordDensityChecker;

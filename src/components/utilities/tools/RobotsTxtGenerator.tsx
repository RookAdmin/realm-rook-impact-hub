import React, { useState, useMemo } from "react";
import { Copy, Download, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RobotsTxtGeneratorProps {
  onCopy?: (text: string) => void;
}

interface Rule {
  userAgent: string;
  allow: string[];
  disallow: string[];
  crawlDelay?: string;
}

const RobotsTxtGenerator: React.FC<RobotsTxtGeneratorProps> = ({ onCopy }) => {
  const [rules, setRules] = useState<Rule[]>([
    { userAgent: "*", allow: [], disallow: ["/admin", "/private"], crawlDelay: undefined },
  ]);
  const [sitemap, setSitemap] = useState("");

  const robotsTxt = useMemo(() => {
    const lines: string[] = [];

    rules.forEach((rule) => {
      lines.push(`User-agent: ${rule.userAgent}`);
      rule.disallow.forEach((path) => {
        lines.push(`Disallow: ${path}`);
      });
      rule.allow.forEach((path) => {
        lines.push(`Allow: ${path}`);
      });
      if (rule.crawlDelay) {
        lines.push(`Crawl-delay: ${rule.crawlDelay}`);
      }
      lines.push("");
    });

    if (sitemap) {
      lines.push(`Sitemap: ${sitemap}`);
    }

    return lines.join("\n");
  }, [rules, sitemap]);

  const addRule = () => {
    setRules([...rules, { userAgent: "*", allow: [], disallow: [] }]);
  };

  const removeRule = (index: number) => {
    setRules(rules.filter((_, i) => i !== index));
  };

  const updateRule = (index: number, field: keyof Rule, value: any) => {
    const updated = [...rules];
    updated[index] = { ...updated[index], [field]: value };
    setRules(updated);
  };

  const addPath = (index: number, type: "allow" | "disallow") => {
    const updated = [...rules];
    updated[index][type] = [...updated[index][type], ""];
    setRules(updated);
  };

  const updatePath = (ruleIndex: number, pathIndex: number, type: "allow" | "disallow", value: string) => {
    const updated = [...rules];
    updated[ruleIndex][type] = updated[ruleIndex][type].map((path, i) =>
      i === pathIndex ? value : path
    );
    setRules(updated);
  };

  const removePath = (ruleIndex: number, pathIndex: number, type: "allow" | "disallow") => {
    const updated = [...rules];
    updated[ruleIndex][type] = updated[ruleIndex][type].filter((_, i) => i !== pathIndex);
    setRules(updated);
  };

  const handleCopy = () => {
    if (onCopy) {
      onCopy(robotsTxt);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([robotsTxt], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "robots.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {rules.map((rule, ruleIndex) => (
          <div key={ruleIndex} className="p-4 border border-realm-lightgray rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-realm-black">Rule {ruleIndex + 1}</h3>
              {rules.length > 1 && (
                <Button
                  onClick={() => removeRule(ruleIndex)}
                  variant="ghost"
                  size="sm"
                  className="text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div>
              <Label className="text-sm font-medium text-realm-black">User Agent</Label>
              <Input
                value={rule.userAgent}
                onChange={(e) => updateRule(ruleIndex, "userAgent", e.target.value)}
                placeholder="* or specific bot name"
                className="mt-1"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm font-medium text-realm-black">Disallow</Label>
                <Button
                  onClick={() => addPath(ruleIndex, "disallow")}
                  variant="ghost"
                  size="sm"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {rule.disallow.map((path, pathIndex) => (
                  <div key={pathIndex} className="flex gap-2">
                    <Input
                      value={path}
                      onChange={(e) =>
                        updatePath(ruleIndex, pathIndex, "disallow", e.target.value)
                      }
                      placeholder="/admin"
                      className="flex-1"
                    />
                    <Button
                      onClick={() => removePath(ruleIndex, pathIndex, "disallow")}
                      variant="ghost"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm font-medium text-realm-black">Allow</Label>
                <Button onClick={() => addPath(ruleIndex, "allow")} variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {rule.allow.map((path, pathIndex) => (
                  <div key={pathIndex} className="flex gap-2">
                    <Input
                      value={path}
                      onChange={(e) =>
                        updatePath(ruleIndex, pathIndex, "allow", e.target.value)
                      }
                      placeholder="/public"
                      className="flex-1"
                    />
                    <Button
                      onClick={() => removePath(ruleIndex, pathIndex, "allow")}
                      variant="ghost"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-realm-black">Crawl Delay (seconds)</Label>
              <Input
                type="number"
                value={rule.crawlDelay || ""}
                onChange={(e) =>
                  updateRule(ruleIndex, "crawlDelay", e.target.value || undefined)
                }
                placeholder="Optional"
                className="mt-1"
              />
            </div>
          </div>
        ))}

        <Button onClick={addRule} variant="outline" className="w-full rounded-full">
          <Plus className="w-4 h-4 mr-2" />
          Add Rule
        </Button>
      </div>

      <div>
        <Label htmlFor="sitemap" className="text-sm font-medium text-realm-black">
          Sitemap URL (Optional)
        </Label>
        <Input
          id="sitemap"
          value={sitemap}
          onChange={(e) => setSitemap(e.target.value)}
          placeholder="https://example.com/sitemap.xml"
          className="mt-1"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label className="text-sm font-medium text-realm-black">Generated robots.txt</Label>
          <div className="flex gap-2">
            <Button onClick={handleCopy} variant="outline" className="rounded-full">
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button onClick={handleDownload} variant="outline" className="rounded-full">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
        <Textarea
          value={robotsTxt}
          readOnly
          className="min-h-[200px] font-mono text-sm bg-realm-lightgray"
        />
      </div>
    </div>
  );
};

export default RobotsTxtGenerator;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MessageCircle, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const GEOSection = () => {
  const aiPlatforms = [
    { name: "ChatGPT", logo: "/ai/openai.png" },
    { name: "Claude", logo: "/ai/claude.png" },
    { name: "Gemini", logo: "/ai/gai.png" },
    { name: "Perplexity", logo: "/ai/perplexity.png" },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-realm-black rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-realm-black rounded-full blur-3xl"></div>
      </div>

      <div className="realm-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-realm-lightgray px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-realm-black" />
              <span className="text-sm font-medium text-realm-black">
                Introducing GEO
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Be the Answer AI Delivers:
              <br />
              <span className="text-realm-darkgray">
                DOMINATE AI Chat Results with GEO
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-realm-darkgray max-w-3xl mx-auto leading-relaxed">
              The future of product and brand visibility is here. Get cited and
              recommended by ChatGPT, Gemini, Claude, and every AI that matters.
            </p>
          </div>

          {/* Visual Demo Area */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Animated Chat Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-realm-lightgray to-white p-8 rounded-2xl shadow-lg border border-realm-lightgray">
                {/* Mock Chat Interface */}
                <div className="space-y-4">
                  {/* User Question */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-realm-black flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                      <p className="text-sm text-realm-black">
                        What are the best tools for AI-powered marketing?
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/services/seo-tools/perplexity.webp"   // 👈 your image path here
                        alt="ChatGPT Icon"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-realm-black to-realm-darkgray p-4 rounded-lg shadow-sm flex-1 text-white">
                      <p className="text-sm mb-3">
                        Based on current market leaders, I recommend:
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded border-2 border-yellow-400 animate-pulse">
                        <p className="text-sm font-bold text-yellow-300 mb-1">
                          ✨ Your Brand Here
                        </p>
                        <p className="text-xs text-gray-200">
                          Recommended for their innovative AI-powered solutions
                          and proven results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating AI Icons */}
                <div className="absolute -top-4 -right-4 bg-white p-2 rounded-lg shadow-lg">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-lg shadow-lg">
                  <img
                    src="/services/seo-tools/chatgpt.png"   // 👈 your image path here
                    alt="ChatGPT Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right: Key Points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-realm-black rounded-full flex items-center justify-center flex-shrink-0">
                  <p className="text-white text-xl">1</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI-First Visibility</h3>
                  <p className="text-realm-darkgray">
                    Optimize your brand for the way customers search now—through
                    AI conversations, not just search engines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-realm-black rounded-full flex items-center justify-center flex-shrink-0">
                   <p className="text-white text-xl">2</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Platform Coverage</h3>
                  <p className="text-realm-darkgray">
                    Get cited across ChatGPT, Claude, Gemini, Perplexity, and
                    every major AI platform shaping purchase decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-realm-black rounded-full flex items-center justify-center flex-shrink-0">
                   <p className="text-white text-xl">3</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
                  <p className="text-realm-darkgray">
                    Track AI citations, brand mentions, and the traffic they
                    drive with our proprietary GEO analytics dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Platform Logos */}
          <div className="mb-12">
            <p className="text-center text-sm font-medium text-realm-darkgray mb-6">
              Optimize for the platforms that matter
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {aiPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 border border-realm-lightgray rounded-lg hover:border-realm-black transition-all duration-300"
                >
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm font-medium text-realm-black">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/services/geo">
              <Button className="realm-button flex items-center gap-2 mx-auto" size="lg">
                Learn More About GEO <ArrowRight size={20} />
              </Button>
            </Link>
            <p className="text-sm text-realm-darkgray mt-4">
              Join the brands already dominating AI-powered discovery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GEOSection;


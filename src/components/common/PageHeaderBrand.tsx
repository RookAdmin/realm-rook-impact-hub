import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  isLarge?: boolean;
}

const PageHeader = ({ title, subtitle, isLarge = false }: PageHeaderProps) => {
  const isMobile = useIsMobile();
  return (
    <header className="bg-realm-black text-white py-16 md:py-24 mt-20 relative overflow-hidden">
      {/* Spline background */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <iframe
            src="https://my.spline.design/legendarywaves-R3Uyah548ZT00jFeXNZNHmHP/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full object-cover"
            style={{ minHeight: "100%", minWidth: "100%" }}
            title="Spline Background"
          ></iframe>
        </div>
      )}
      <div className="realm-container relative z-10">
        <h1
          className={`font-display font-bold ${
            isLarge
              ? "text-4xl md:text-5xl lg:text-6xl max-w-2xl"
              : "text-3xl md:text-4xl lg:text-5xl max-w-2xl"
          } mb-4`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl opacity-90 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;

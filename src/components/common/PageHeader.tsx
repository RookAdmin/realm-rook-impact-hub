import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  isLarge?: boolean;
}

const PageHeader = ({ title, subtitle, isLarge = false }: PageHeaderProps) => {
  return (
    <header className="bg-realm-black text-white py-16 md:py-24 mt-20">
      <div className="realm-container">
        <h1
          className={`font-display font-bold ${
            isLarge
              ? "text-4xl md:text-5xl lg:text-6xl"
              : "text-3xl md:text-4xl lg:text-5xl"
          } mb-4`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-4xl opacity-90 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;

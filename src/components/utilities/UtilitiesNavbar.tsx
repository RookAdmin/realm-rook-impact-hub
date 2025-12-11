import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const UtilitiesNavbar = () => {
  const location = useLocation();
  const isUtilitiesPage = location.pathname.startsWith("/utilities");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-realm-lightgray transition-all duration-300 py-4 md:py-6">
      <div className="realm-container flex items-center justify-between w-full">
        {/* Logo | Utilities - left side */}
        <div className="flex items-center gap-3 z-50 relative flex-shrink-0">
          <Link to="/" className="flex items-center">
            <Logo
              variant="dark"
              className="h-8 md:h-10 transition-all duration-300"
            />
          </Link>
          <span className="text-realm-gray text-xl">|</span>
          <Link to="/utilities" className="flex items-center">
            <span className="text-realm-black font-medium text-lg md:text-xl hover:text-[#0F7C4F] transition-colors duration-300">
              Utilities
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default UtilitiesNavbar;


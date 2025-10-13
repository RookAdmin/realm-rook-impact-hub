import React from "react";
import { Link } from "react-router-dom";
import { ImpactStudy } from "@/types";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Zguard from "@/components/assets/impact-studies/zguard.png"
import ZguardLogo from "@/components/assets/impact-studies/zguard-logo.png"
interface ImpactStudyCardProps {
  study: ImpactStudy;
}

const ImpactStudyCard = ({ study }: ImpactStudyCardProps) => {
  return (
    <Card className="border border-realm-lightgray hover:border-realm-black transition-all duration-300 flex flex-col md:flex-row h-full">
      {/* Image on the left */}
      <div className="md:w-1/2 overflow-hidden flex items-center justify-center">
        <img
          src={Zguard}
          alt={study.title}
          className="w-full object-cover realm-image realm-image-greyscale hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content on the right */}
      <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
        <div className="mb-4 flex items-center">
          <img
            src={ZguardLogo}
            alt='Logo'
            className="w-10 h-10 object-contain mr-3"
          />
          <h3 className="font-semibold">ZGuard</h3>
        </div>

        <h2 className="text-2xl font-display font-bold mb-3 line-clamp-2">
          Shopify Website Transformation and UI/UX Upgrade for ZGuard
        </h2>

        {/* <p className="font-medium text-lg mb-4">Shopify Website Transformation and UI/UX Upgrade for ZGuard</p> */}

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="inline-block bg-realm-lightgray text-realm-black px-3 py-1 rounded-full text-xs font-semibold">
            WebSite
          </span>
          <span className="inline-block bg-realm-lightgray text-realm-black px-3 py-1 rounded-full text-xs font-semibold">
            UX/UI
          </span>
          <span className="inline-block bg-realm-lightgray text-realm-black px-3 py-1 rounded-full text-xs font-semibold">
            Shopify
          </span>
        </div>


        <CardFooter className="pt-4">
          <Link
            to={`/case-studies/shopify-website-transformation-and-ui-ux-upgrade-for-zguard`}
            className="realm-button inline-flex items-center"
          >
            Read Full Study
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ImpactStudyCard;

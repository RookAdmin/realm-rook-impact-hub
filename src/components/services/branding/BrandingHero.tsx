import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

// Peerlist logo badge (copy this if not globally available)
const Badge = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
      fill="#00AA45"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
      fill="#219653"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
      fill="#24292E"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
      fill="white"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
      fill="#24292E"
    ></path>
  </svg>
);

const BrandingHero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="pt-16 md:pt-24 pb-16 relative">
      <div className="realm-container">
        <div className="max-w-4xl">
          <h1 className="realm-headline mb-6">
            Your Brand Isn't Just a Logo. It's a Legacy.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-realm-darkgray">
            Let us build a unique identity that speaks to hearts and minds.
          </p>

          <Button
            onClick={() => setIsContactOpen(true)}
            className="realm-button flex items-center gap-2"
          >
            Get Your Brand Built <ArrowRight size={16} />
          </Button>
        </div>
        {/* MacbookScroll Demo */}
        <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F] my-8 flex justify-center">
          <div className="scale-125 md:scale-150">
            {" "}
            {/* Increase scale as needed */}
            <MacbookScroll
              badge={
                <a href="https://peerlist.io/manuarora">
                  <Badge className="h-10 w-10 -rotate-12 transform" />
                </a>
              }
              src="/services/branding.png"
              showGradient={false}
            />
          </div>
        </div>
        {/* Centered Responsive Image */}
        <div className="w-full my-12">
          <img
            src="/services/branding.png"
            alt="Web and App Development Illustration"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">
              Get Your Brand Built
            </h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BrandingHero;

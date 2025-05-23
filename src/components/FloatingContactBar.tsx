
import React, { useState } from 'react';
import { MessageSquare, Phone, WhatsApp } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import ContactForm from './ContactForm';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const FloatingContactBar = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const barVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <>
      <motion.div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
        initial="hidden"
        animate="visible"
        variants={barVariants}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                variants={itemVariants}
                onClick={() => setIsContactModalOpen(true)}
                className={cn(
                  "flex items-center gap-2 bg-realm-black text-white py-3 pl-4 pr-5",
                  "hover:bg-black transition-colors duration-300",
                  "rounded-l-md shadow-md min-w-[130px] justify-center"
                )}
                aria-label="Contact us"
              >
                <MessageSquare size={18} />
                <span className="font-medium text-sm">Contact Us</span>
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Contact Us</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.a
                variants={itemVariants}
                href="tel:+971501234567"
                className={cn(
                  "flex items-center gap-2 bg-gray-700 text-white py-3 pl-4 pr-5",
                  "hover:bg-gray-800 transition-colors duration-300",
                  "rounded-l-md shadow-md min-w-[130px] justify-center"
                )}
                aria-label="Call us"
              >
                <Phone size={18} />
                <span className="font-medium text-sm">Call Us</span>
              </motion.a>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Call Us</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.a
                variants={itemVariants}
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 bg-green-600 text-white py-3 pl-4 pr-5",
                  "hover:bg-green-700 transition-colors duration-300",
                  "rounded-l-md shadow-md min-w-[130px] justify-center"
                )}
                aria-label="Chat on WhatsApp"
              >
                <WhatsApp size={18} />
                <span className="font-medium text-sm">WhatsApp</span>
              </motion.a>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Chat on WhatsApp</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>

      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">Contact Us</h2>
            <ContactForm onSuccess={() => setIsContactModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingContactBar;

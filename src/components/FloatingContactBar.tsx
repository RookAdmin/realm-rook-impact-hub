
import React, { useState } from 'react';
import { MessageSquare, Phone, MessageCircle } from 'lucide-react';
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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

  const labelVariants = {
    collapsed: { 
      width: 0,
      opacity: 0,
      marginLeft: 0
    },
    expanded: { 
      width: "auto",
      opacity: 1,
      marginLeft: 8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const handleItemInteraction = (itemId: string, action?: () => void) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
    if (action) action();
  };

  return (
    <>
      <motion.div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col"
        initial="hidden"
        animate="visible"
        variants={barVariants}
      >
        <TooltipProvider>
          {/* Contact Us */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                variants={itemVariants}
                onClick={() => handleItemInteraction('contact', () => setIsContactModalOpen(true))}
                onMouseEnter={() => setExpandedItem('contact')}
                onMouseLeave={() => setExpandedItem(null)}
                className={cn(
                  "flex items-center bg-realm-black text-white py-4 px-4",
                  "hover:bg-gray-800 transition-colors duration-300",
                  "border-b border-gray-700 min-h-[48px]"
                )}
                aria-label="Contact us"
              >
                <MessageSquare size={20} className="flex-shrink-0" />
                <motion.span
                  variants={labelVariants}
                  animate={expandedItem === 'contact' ? 'expanded' : 'collapsed'}
                  className="font-medium text-sm whitespace-nowrap overflow-hidden"
                >
                  Contact Us
                </motion.span>
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Contact Us</p>
            </TooltipContent>
          </Tooltip>

          {/* Call Us */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.a
                variants={itemVariants}
                href="tel:+917092800022"
                onClick={() => handleItemInteraction('call')}
                onMouseEnter={() => setExpandedItem('call')}
                onMouseLeave={() => setExpandedItem(null)}
                className={cn(
                  "flex items-center bg-realm-black text-white py-4 px-4",
                  "hover:bg-gray-800 transition-colors duration-300",
                  "border-b border-gray-700 min-h-[48px]"
                )}
                aria-label="Call us"
              >
                <Phone size={20} className="flex-shrink-0" />
                <motion.span
                  variants={labelVariants}
                  animate={expandedItem === 'call' ? 'expanded' : 'collapsed'}
                  className="font-medium text-sm whitespace-nowrap overflow-hidden"
                >
                  Call Us
                </motion.span>
              </motion.a>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Call Us</p>
            </TooltipContent>
          </Tooltip>

          {/* WhatsApp */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.a
                variants={itemVariants}
                href="https://wa.me/917092800022"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleItemInteraction('whatsapp')}
                onMouseEnter={() => setExpandedItem('whatsapp')}
                onMouseLeave={() => setExpandedItem(null)}
                className={cn(
                  "flex items-center bg-[#25D366] text-white py-4 px-4",
                  "hover:bg-[#1DA851] transition-colors duration-300",
                  "min-h-[48px]"
                )}
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={20} className="flex-shrink-0" />
                <motion.span
                  variants={labelVariants}
                  animate={expandedItem === 'whatsapp' ? 'expanded' : 'collapsed'}
                  className="font-medium text-sm whitespace-nowrap overflow-hidden"
                >
                  WhatsApp
                </motion.span>
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

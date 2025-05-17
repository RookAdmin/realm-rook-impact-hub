
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const FinalCta = () => {
  return (
    <section className="bg-realm-black text-white py-24 md:py-32">
      <div className="realm-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Your brand deserves more than a template.
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-realm-lightgray">
            Let's build something that truly sets you apart and drives real business results.
          </p>
          <Link to="/contact">
            <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray group px-8 py-6 text-lg">
              <span>Let's Build Something Together</span>
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;

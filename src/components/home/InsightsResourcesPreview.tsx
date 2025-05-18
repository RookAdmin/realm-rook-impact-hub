
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const InsightsResourcesPreview = () => {
  const insights = [
    {
      id: "insight1",
      title: "Why Most Rebrands Fail (And How to Ensure Yours Doesn't)",
      excerpt: "Discover the critical missteps most companies make when rebranding and how to avoid them.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=500",
      slug: "why-most-rebrands-fail",
      type: "insights"
    },
    {
      id: "insight2",
      title: "5 UI Patterns That Are Killing Your Conversion Rate",
      excerpt: "Uncover the common design mistakes that drive users away instead of converting them.",
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=800&h=500",
      slug: "ui-patterns-killing-conversion",
      type: "insights"
    }
  ];

  const caseStudies = [
    {
      id: "case1",
      title: "How We Helped HealthTech Innovator Achieve 200% Growth in 6 Months",
      excerpt: "A comprehensive rebrand and digital transformation that changed the game for this healthcare pioneer.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500",
      slug: "healthtech-growth-case-study",
      type: "impact-studies"
    },
    {
      id: "case2",
      title: "From Startup to Industry Leader: The Revolution of Mobile Banking UX",
      excerpt: "How our UX redesign helped a fintech startup outperform established banks in customer satisfaction.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=500",
      slug: "mobile-banking-ux-revolution",
      type: "impact-studies"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="realm-section bg-white">
      <div className="realm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Insights Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Insights</h2>
              <div className="w-12 h-0.5 bg-realm-black"></div>
            </div>
            
            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {insights.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Link to={`/resources/insights/${item.slug}`} className="group">
                    <div className="aspect-video overflow-hidden mb-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover realm-image-greyscale group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="text-realm-darkgray mb-4">
                      {item.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
              
              <Link 
                to="/resources/insights" 
                className="inline-flex items-center font-medium hover:text-realm-black/80"
              >
                <span>View All Insights</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          {/* Impact Studies Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Impact Studies</h2>
              <div className="w-12 h-0.5 bg-realm-black"></div>
            </div>
            
            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {caseStudies.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Link to={`/case-studies/${item.slug}`} className="group">
                    <div className="aspect-video overflow-hidden mb-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover realm-image-greyscale group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="text-realm-darkgray mb-4">
                      {item.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
              
              <Link 
                to="/case-studies" 
                className="inline-flex items-center font-medium hover:text-realm-black/80"
              >
                <span>View All Impact Studies</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsResourcesPreview;

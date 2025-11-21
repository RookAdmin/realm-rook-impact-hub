import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, TrendingUp, Lightbulb, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const benefits = [
    {
      icon: <Users size={32} />,
      title: "Purpose-Driven Work",
      description: "Contribute to products that make a difference and help global causes."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Unlimited Learning",
      description: "Training, mentorship, and access to top tools."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Winning Together",
      description: "Monthly retreats, collaborative wins, shared bonuses."
    }
  ];

  const openRoles = [
    {
      title: "Full Stack Developer",
      location: "Remote / Chennai, India",
      description: "Build scalable web applications using modern tech stacks. Work with React, Node.js, and cloud platforms."
    },
    {
      title: "UI/UX Designer",
      location: "Remote / Mumbai, India",
      description: "Design beautiful, user-centric interfaces. Create wireframes, prototypes, and high-fidelity mockups."
    },
    {
      title: "Digital Marketing Specialist",
      location: "Remote / Bangalore, India",
      description: "Drive growth through SEO, content marketing, and social media strategies."
    },
    {
      title: "AI/ML Engineer",
      location: "Remote / Hybrid",
      description: "Develop intelligent systems and automation solutions using cutting-edge AI technologies."
    }
  ];

  const testimonials = [
    {
      quote: "Realm gave me the freedom to create and make an impact from day one.",
      author: "Developer"
    },
    {
      quote: "Every day, I learn something new from my teammates.",
      author: "Marketer"
    }
  ];

  const cultureIcons = [
    { icon: <Users size={24} />, label: "Team" },
    { icon: <TrendingUp size={24} />, label: "Growth" },
    { icon: <Lightbulb size={24} />, label: "Innovation" }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - We Grow Together | Realm by Rook</title>
        <meta name="description" content="Join Realm by Rook. A team where growth is a collective journey, every voice shapes our story, and every win is shared." />
        <meta name="keywords" content="careers, jobs, work with us, digital agency jobs, remote work, tech careers" />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="realm-section pt-32 bg-white border-b border-gray-200">
          <div className="realm-container text-center max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                We Grow Together.
              </h1>
              <p className="text-xl md:text-2xl text-realm-darkgray max-w-3xl mx-auto">
                Join a team where growth is a collective journey. At Realm by Rook, every voice shapes our story and every win is shared.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture at Realm by Rook */}
        <section className="realm-section bg-white border-b border-gray-200">
          <div className="realm-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-realm-darkgray">
              Our Culture: Rooted in Respect, Driven by Curiosity
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="mb-6">
                At Realm by Rook, we cultivate a workplace where creativity blooms and learning is constant. Everyone brings something unique to the table, from engineers to storytellers, designers to strategists. Here, feedback is valued, ideas are celebrated, and collaboration is core.
              </p>
              <p className="font-medium text-realm-black">
                Growth is not just encouraged, it's expected.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              {cultureIcons.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-realm-black hover:bg-gray-200 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-realm-darkgray">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us? */}
        <section className="realm-section bg-gray-50 border-b border-gray-200">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Why Join Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-realm-black mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles & Application */}
        <section className="realm-section bg-white border-b border-gray-200">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Current Openings
            </h2>
            <p className="text-center text-realm-darkgray mb-12 max-w-2xl mx-auto">
              Find your fit and join our journey. All roles listed are updated quarterly—every candidate is treated with respect, and feedback is always returned.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {openRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 p-6 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                  <p className="text-sm text-realm-darkgray mb-4">{role.location}</p>
                  <p className="text-gray-600 mb-6">{role.description}</p>
                  <a 
                    href="mailto:hustle@realmrook.com?subject=Application for ${role.title}"
                    className="inline-flex items-center text-realm-black font-medium hover:underline"
                  >
                    Apply Now <ArrowRight size={16} className="ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Stories */}
        <section className="realm-section bg-gray-50 border-b border-gray-200">
          <div className="realm-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Voices from Our Team
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8"
                >
                  <p className="text-xl italic text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm text-realm-darkgray font-medium">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="realm-section bg-white">
          <div className="realm-container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to grow with us?
            </h2>
            <p className="text-lg text-realm-darkgray mb-8">
              Start your journey at Realm by Rook.
            </p>
            <a href="mailto:hustle@realmrook.com?subject=Career Inquiry">
              <Button className="realm-button bg-realm-black text-white inline-flex items-center gap-2">
                <Mail size={20} />
                Get in Touch
              </Button>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers;

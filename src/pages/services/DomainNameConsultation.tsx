import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Search, Shield, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const DomainNameConsultation = () => {
  const form = useForm({
    defaultValues: {
      brandName: "",
      businessType: "",
      extension: "",
      budget: "",
      email: "",
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Your strategy request has been received. We'll be in touch shortly.");
    form.reset();
  };

  // Recent domain wins
  const domainWins = [
    {
      domain: "lumiereai.com",
      description: "Enterprise design AI platform"
    },
    {
      domain: "oakridge.org",
      description: "Education non-profit"
    },
    {
      domain: "lift.app",
      description: "Mobile fitness startup"
    },
    {
      domain: "panora.ai",
      description: "Brokered at 60% below listed value"
    },
    {
      domain: "zettacore.com",
      description: "Transitioned from zettacore.io in 6 weeks"
    }
  ];

  return (
    <main className="min-h-screen">
      <ServiceBreadcrumb 
        serviceName="Domain Name Consultation" 
        serviceUrl="/services/domain-name-consultation" 
      />
      
      {/* Hero Section */}
      <section className="bg-realm-black text-white py-20 md:py-32">
        <div className="realm-container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="realm-headline mb-6">
              The Right Domain is Not Taken. It's Strategically Chosen.
            </h1>
            <p className="realm-subheadline text-white/90 mb-10">
              We help you secure the perfect .com, .org, .ai, .app, or your custom TLD—designed to grow with your brand. Start smart, not scattered.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray">
                  Book a 1:1 Domain Strategy Call
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" className="realm-button border-white text-white hover:bg-white/10">
                  View Past Domain Success Stories
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 md:py-24">
        <div className="realm-container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Your Domain Is the Front Door to Your Brand.
            </h2>
            <p className="text-center text-realm-darkgray mb-12 max-w-3xl mx-auto">
              Domains are not just URLs. They're psychological cues that drive trust, credibility, and recall.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                <p className="text-xl font-medium mb-2">Lower your click-through rates</p>
                <p className="text-realm-darkgray">Poor domain choices lead to reduced engagement and fewer visitors.</p>
              </div>
              <div className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                <p className="text-xl font-medium mb-2">Confuse users</p>
                <p className="text-realm-darkgray">Complicated domains are harder to remember and share with others.</p>
              </div>
              <div className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                <p className="text-xl font-medium mb-2">Reduce perceived value</p>
                <p className="text-realm-darkgray">Suboptimal domains can negatively impact the perception of your product.</p>
              </div>
            </div>
            
            <div className="border border-realm-lightgray p-8">
              <h3 className="text-2xl font-display font-medium mb-4 text-center">Domain Comparison Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-realm-lightgray">
                  <p className="text-lg font-medium mb-2">www.brand.ai</p>
                  <p className="text-realm-darkgray">Tech-focused but limited recognition</p>
                </div>
                <div className="text-center p-4 bg-realm-lightgray">
                  <p className="text-lg font-medium mb-2">www.brand.com</p>
                  <p className="text-realm-darkgray">Highest trust and click-through rate</p>
                </div>
                <div className="text-center p-4 bg-realm-lightgray">
                  <p className="text-lg font-medium mb-2">www.brand.app</p>
                  <p className="text-realm-darkgray">Mobile-focused but specific appeal</p>
                </div>
              </div>
              <p className="text-center text-realm-darkgray">Our research shows .com domains consistently outperform alternative TLDs in click confidence by 32%.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-realm-lightgray">
        <div className="realm-container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Domain Strategy in 3 Precision Steps
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 flex items-center justify-center border border-realm-black shrink-0">
                  <Search size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium mb-2">1. Research & Industry Mapping</h3>
                  <p className="text-realm-darkgray">
                    We analyze your market, keywords, and growth plans to shortlist the ideal domain structure.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 flex items-center justify-center border border-realm-black shrink-0">
                  <Shield size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium mb-2">2. Brand Safety & Availability</h3>
                  <p className="text-realm-darkgray">
                    We assess trademark risks, cybersquatters, and global conflicts for clean acquisition.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 flex items-center justify-center border border-realm-black shrink-0">
                  <Star size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium mb-2">3. Premium or Primary Acquisition</h3>
                  <p className="text-realm-darkgray">
                    We negotiate with brokers or registrars to help you secure your top domain at the best possible price.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="realm-button">
                  Schedule a Discovery Call
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ideal Use Cases */}
      <section className="py-16 md:py-24">
        <div className="realm-container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              We've Helped Founders and CMOs Choose:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-realm-lightgray">
                <div className="flex items-center mb-4">
                  <Check size={20} className="mr-2" />
                  <p className="text-xl font-medium">Brand-matching .com domains</p>
                </div>
                <p className="text-realm-darkgray">That were "already taken" but acquired through our expert negotiations.</p>
              </div>
              
              <div className="p-6 border border-realm-lightgray">
                <div className="flex items-center mb-4">
                  <Check size={20} className="mr-2" />
                  <p className="text-xl font-medium">Purpose-driven .org domains</p>
                </div>
                <p className="text-realm-darkgray">For global non-profits seeking credibility and mission alignment.</p>
              </div>
              
              <div className="p-6 border border-realm-lightgray">
                <div className="flex items-center mb-4">
                  <Check size={20} className="mr-2" />
                  <p className="text-xl font-medium">App-first .app domains</p>
                </div>
                <p className="text-realm-darkgray">With SSL integration by default for secure mobile applications.</p>
              </div>
              
              <div className="p-6 border border-realm-lightgray">
                <div className="flex items-center mb-4">
                  <Check size={20} className="mr-2" />
                  <p className="text-xl font-medium">Fast-scaling .ai domains</p>
                </div>
                <p className="text-realm-darkgray">For ML startups positioning at the cutting edge of technology.</p>
              </div>
              
              <div className="p-6 border border-realm-lightgray md:col-span-2">
                <div className="flex items-center mb-4">
                  <Check size={20} className="mr-2" />
                  <p className="text-xl font-medium">Local domain localization strategies</p>
                </div>
                <p className="text-realm-darkgray">Including .in, .co.uk, .de domains for regional market penetration.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof of Work Section */}
      <section className="py-16 md:py-24 bg-realm-lightgray">
        <div className="realm-container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Recent Domain Wins
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {domainWins.map((win, index) => (
                <Card key={index} className="p-6 text-center hover:border-realm-black transition-all duration-300">
                  <p className="text-xl font-display font-medium mb-2">{win.domain}</p>
                  <p className="text-realm-darkgray">{win.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA with Form */}
      <section className="py-16 md:py-24">
        <div className="realm-container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Let's Choose a Domain That Grows With You.
              </h2>
              <p className="text-realm-darkgray">
                Submit your brand or product name, and we'll send a strategic domain shortlist—free of cost.
              </p>
            </div>
            
            <Card className="p-8 mx-auto max-w-3xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="brandName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brand Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your brand or product name" required {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Business</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g., SaaS, E-commerce, etc." {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="extension"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ideal Extension</FormLabel>
                          <Select 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your preference" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value=".com">.com</SelectItem>
                              <SelectItem value=".org">.org</SelectItem>
                              <SelectItem value=".io">.io</SelectItem>
                              <SelectItem value=".ai">.ai</SelectItem>
                              <SelectItem value=".app">.app</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <Select 
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your budget" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="< $1,000">Under $1,000</SelectItem>
                              <SelectItem value="$1,000 - $5,000">$1,000 - $5,000</SelectItem>
                              <SelectItem value="$5,000 - $20,000">$5,000 - $20,000</SelectItem>
                              <SelectItem value="$20,000+">$20,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" required {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button type="submit" className="realm-button w-full">
                    Submit to Get Strategy
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DomainNameConsultation;

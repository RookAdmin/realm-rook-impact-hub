
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    }
  });

  const handleSubmit = (data: any) => {
    console.log(data);
    toast.success("Your message has been sent! We'll get back to you shortly.");
    form.reset();
  };

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="realm-container">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <h1 className="realm-headline">Let's Talk</h1>
            <p className="realm-subheadline">
              Ready to take your brand to the next level? Get in touch with us to discuss your project.
            </p>
            
            <div className="mt-12 space-y-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-realm-darkgray">hello@realmbybook.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-realm-darkgray">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Locations</h3>
                  <p className="text-realm-darkgray">Melbourne • Sydney • New York</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" required {...field} />
                        </FormControl>
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
                          <Input type="email" placeholder="Your email" required {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project and goals" 
                          rows={5}
                          required
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="realm-button">
                  Send Message
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;

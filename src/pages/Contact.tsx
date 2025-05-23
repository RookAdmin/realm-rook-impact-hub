
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

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
      service: "",
      message: "",
      whatsapp_number: "",
    }
  });

  const handleSubmit = async (data: any) => {
    console.log('Submitting form data:', data);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            company: data.company || null,
            service: data.service || null,
            message: data.message,
            whatsapp_number: data.whatsapp_number || null,
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        toast.error("There was an error sending your message. Please try again.");
        return;
      }

      toast.success("Your message has been sent! We'll get back to you shortly.");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error sending your message. Please try again.");
    }
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
            <h1 className="realm-headline">Let's Start Something Great</h1>
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
                  <p className="text-realm-darkgray">hlo@realmrook.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-realm-darkgray">+91 70927 00022</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Office Hours</h3>
                  <p className="text-realm-darkgray">Mon–Fri | 10 AM – 6 PM IST</p>
                  <p className="text-realm-darkgray mt-1">Chennai, Mumbai, Bangalore,  India</p>
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
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="whatsapp_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="+91 98765 43210" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What Do You Need?</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Branding">Branding</SelectItem>
                            <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                            <SelectItem value="Web/App Development">Web/App Development</SelectItem>
                            <SelectItem value="SEO">SEO</SelectItem>
                            <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                            <SelectItem value="AI Business Automation">AI Business Automation</SelectItem>
                            <SelectItem value="Domain Name Consultation">Domain Name Consultation</SelectItem>
                            <SelectItem value="Enterprise Domain Management">Enterprise Domain Management</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message / Project Details</FormLabel>
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
                
                <Button type="submit" className="realm-button bg-realm-black text-white">
                  Send Message
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

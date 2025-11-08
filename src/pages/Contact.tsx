
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { countryCodes } from "@/data/countryCodes";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import ServiceChecklist from "@/components/common/ServiceChecklist";

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
  const [openCountryCode, setOpenCountryCode] = useState(false);
  
  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      services: [],
      message: "",
      whatsapp_country_code: "91",
      whatsapp_number: "",
    }
  });

  const handleSubmit = async (data: any) => {
    console.log('Submitting form data:', data);
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: `${data.first_name} ${data.last_name}`.trim(),
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.whatsapp_country_code && data.whatsapp_number ? `+${data.whatsapp_country_code} ${data.whatsapp_number}` : null,
            business_name: data.company || null,
services_interested: Array.isArray(data.services) && data.services.length > 0
  ? data.services   // keep as array
  : null,            budget_range: data.budget_range || null,
            lead_source: data.lead_source,
            notes: data.message,
            status: 'New'
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
    <>
      <Helmet>
        <title>Contact Us | Book Your Free Strategy Call with Digital Marketing Experts</title>
        <meta name="description" content="Transform your business with expert guidance. Book a free strategy call to discuss branding, web development, SEO, AI automation, and growth marketing. Get actionable insights from industry experts." />
        <meta name="keywords" content="contact digital agency, free strategy call, marketing consultation, web development consultation, business transformation, book consultation, agency contact, free proposal" />
        <meta property="og:title" content="Get Your Free Strategy Call | Realm by Rook" />
        <meta property="og:description" content="Let's discuss how to scale your business. Book a free consultation with our experts. No obligation, just actionable insights." />
      </Helmet>
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
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First name" required {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Last name" required {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
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
                  
                  <div>
                    <FormLabel>WhatsApp Number</FormLabel>
                    <div className="flex gap-2 mt-2">
                      <FormField
                        control={form.control}
                        name="whatsapp_country_code"
                        render={({ field }) => (
                          <FormItem className="w-32">
                            <Popover open={openCountryCode} onOpenChange={setOpenCountryCode}>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                      "justify-between",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? `+${field.value}`
                                      : "Code"}
                                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                <Command>
                                  <CommandInput placeholder="Search country..." />
                                  <CommandList>
                                    <CommandEmpty>No country found.</CommandEmpty>
                                    <CommandGroup>
                                      {countryCodes.map((country) => (
                                        <CommandItem
                                          value={`${country.country} ${country.code}`}
                                          key={country.iso}
                                          onSelect={() => {
                                            field.onChange(country.code);
                                            setOpenCountryCode(false);
                                          }}
                                        >
                                          <Check
                                            className={cn(
                                              "mr-2 h-4 w-4",
                                              country.code === field.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                          {country.country} (+{country.code})
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="whatsapp_number"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="Phone number" 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <ServiceChecklist control={form.control} name="services" />
                  
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
    </>
  );
};

export default Contact;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you shortly.");
  };

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="realm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="realm-headline">Let's Talk</h1>
            <p className="realm-subheadline">
              Ready to take your brand to the next level? Get in touch with us to discuss your project.
            </p>
            
            <div className="mt-12 space-y-6">
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-realm-darkgray">hello@realmbybook.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-realm-darkgray">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Locations</h3>
                <p className="text-realm-darkgray">Melbourne • Sydney • New York</p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input id="company" placeholder="Your company name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium">
                  Project Details
                </label>
                <Textarea 
                  id="project" 
                  placeholder="Tell us about your project and goals" 
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="realm-button">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

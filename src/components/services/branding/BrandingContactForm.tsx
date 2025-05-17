
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const BrandingContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectNeed: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', projectNeed: '' });
    }, 1000);
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-realm-black text-white">
      <div className="realm-container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's Build Your Brand Together.
          </h2>
          <p className="text-white/70">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
            </div>
            
            <div>
              <Label htmlFor="projectNeed" className="text-white">Project Need</Label>
              <Textarea 
                id="projectNeed"
                name="projectNeed"
                value={formData.projectNeed}
                onChange={handleChange}
                placeholder="Tell us about your brand and what you're looking for"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white min-h-[120px]"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-realm-black hover:bg-white/90"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Start My Branding Journey <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-white/70">
              Or email us directly: <a href="mailto:hlo@realmrook.com" className="underline text-white">hlo@realmrook.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingContactForm;

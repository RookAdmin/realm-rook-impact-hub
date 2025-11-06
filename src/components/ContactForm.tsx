import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { countryCodes } from "@/data/countryCodes";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import ServiceChecklist from "@/components/common/ServiceChecklist";

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
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
        .from('contact_submissions')
        .insert([
          {
            first_name: data.first_name,
            last_name: data.last_name,
            name: `${data.first_name} ${data.last_name}`.trim(),
            email: data.email,
            company: data.company || null,
            service: Array.isArray(data.services) && data.services.length > 0 ? data.services.join(', ') : null,
            message: data.message,
            whatsapp_number: data.whatsapp_country_code && data.whatsapp_number ? `+${data.whatsapp_country_code} ${data.whatsapp_number}` : null,
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        toast.error("There was an error sending your message. Please try again.");
        return;
      }

      toast.success("Your message has been sent! We'll get back to you shortly.");
      form.reset();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
                  rows={4}
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
  );
};

export default ContactForm;

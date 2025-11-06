import React from 'react';
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Control } from "react-hook-form";

const SERVICES = [
  { id: "GEO", label: "GEO" },
  { id: "Agentica", label: "Agentica" },
  { id: "AI Agents Automation", label: "AI Agents Automation" },
  { id: "Web/App Development", label: "Web/App Development" },
  { id: "Social Media Marketing", label: "Social Media Marketing" },
  { id: "Branding", label: "Branding" },
  { id: "UI/UX Design", label: "UI/UX Design" },
  { id: "SEO", label: "SEO" },
  { id: "Domain Name Consultation", label: "Domain Name Consultation" },
  { id: "Enterprise Domain Management", label: "Enterprise Domain Management" },
];

interface ServiceChecklistProps {
  control: Control<any>;
  name: string;
}

const ServiceChecklist: React.FC<ServiceChecklistProps> = ({ control, name }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>What Do You Need? (Select all that apply)</FormLabel>
          <div className="border rounded-md bg-background">
            <ScrollArea className="h-[240px] w-full">
              <div className="p-4 space-y-3">
                {SERVICES.map((service) => (
                  <FormField
                    key={service.id}
                    control={control}
                    name={name}
                    render={({ field }) => {
                      const currentValue = field.value || [];
                      const isChecked = currentValue.includes(service.id);
                      
                      return (
                        <FormItem
                          key={service.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={isChecked}
                              onCheckedChange={(checked) => {
                                const updatedValue = checked
                                  ? [...currentValue, service.id]
                                  : currentValue.filter((value: string) => value !== service.id);
                                field.onChange(updatedValue);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {service.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </FormItem>
      )}
    />
  );
};

export default ServiceChecklist;

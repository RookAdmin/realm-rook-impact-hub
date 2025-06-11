import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import PageHeader from "@/components/common/PageHeader";
import { Helmet } from "react-helmet-async";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const DomainConsultationService = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      domain: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success(
      "Your consultation request has been submitted. We'll get back to you shortly."
    );
    form.reset();
  };

  // Domain services
  const services = [
    {
      title: "Domain Selection Strategy",
      description:
        "Expert guidance on selecting domain names that align with your brand and business objectives.",
      icon: <Globe size={24} />,
    },
    {
      title: "Domain Security Assessment",
      description:
        "Comprehensive evaluation of your domain security posture and recommendations for improvement.",
      icon: <Shield size={24} />,
    },
    {
      title: "Domain Portfolio Review",
      description:
        "Analysis of your existing domain portfolio to identify optimization opportunities.",
      icon: <CheckCircle size={24} />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Domain Consultation | Realm by Rook - Secure Your Digital Foundation
        </title>
        <meta
          name="description"
          content="Expert guidance on domain selection, security, and portfolio management. Build a strong digital foundation for your brand."
        />
        <meta
          name="keywords"
          content="domain consultation, domain security, portfolio management, digital foundation"
        />
      </Helmet>
      <main className="min-h-screen pt-20">
        <ServiceBreadcrumb
          serviceName="Domain Name Consultation"
          serviceUrl="/services/domain-consultation"
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
                Strategic Domain Acquisition & Management
              </h1>
              <p className="realm-subheadline text-white/90 mb-10">
                Your domain is your digital foundation. We ensure it's secure,
                strategic, and aligned with your brand vision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
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
                Domain Consultation Services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="realm-icon-container">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-display font-medium mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-realm-darkgray text-center">
                      {service.description}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Consultation Request Form */}
        <section className="py-16 md:py-24 bg-realm-lightgray">
          <div className="realm-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
                Request a Domain Consultation
              </h2>
              <p className="text-center text-realm-darkgray mb-12">
                Complete the form below to schedule your personalized domain
                consultation with our experts.
              </p>

              <Card className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                required
                                {...field}
                              />
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
                              <Input
                                type="email"
                                placeholder="Your email"
                                required
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company name"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="domain"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Domain Name (if applicable)</FormLabel>
                            <FormControl>
                              <Input placeholder="example.com" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tell us about your domain needs</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your domain requirements or challenges"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="realm-button w-full">
                      Submit Request
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-realm-black text-white">
          <div className="realm-container">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to secure your digital foundation?
              </h2>

              <p className="text-white/80 mb-10">
                Our domain experts are ready to help you navigate the
                complexities of domain acquisition and management.
              </p>

              <Link to="/contact">
                <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray">
                  Contact Our Domain Specialists
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DomainConsultationService;

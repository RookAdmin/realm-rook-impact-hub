
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceBreadcrumb from '@/components/services/ServiceBreadcrumb';

const WebAppDevelopmentService = () => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="realm-container">
        <ServiceBreadcrumb serviceName="Web/App Development" serviceUrl="/services/web-app-development" />
        
        <div className="py-16 md:py-24 text-center">
          <h1 className="realm-headline mb-6">Web & App Development Services</h1>
          <p className="text-xl md:text-2xl mb-12 text-realm-darkgray max-w-3xl mx-auto">
            This page is coming soon. We're building digital solutions that perform flawlessly.
          </p>
          <Link to="/services">
            <Button variant="outline" className="realm-button bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Services
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WebAppDevelopmentService;

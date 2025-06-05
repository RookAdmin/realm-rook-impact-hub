import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ServiceBreadcrumbProps {
  serviceName: string;
  serviceUrl: string;
}

const ServiceBreadcrumb = ({
  serviceName,
  serviceUrl,
}: ServiceBreadcrumbProps) => {
  return (
    <Breadcrumb
      className={` ${
        serviceName === "Domain Name Consultation" ||
        serviceName === "Enterprise Domain Management" ||
        serviceName === "Social Media Marketing" ||
        serviceName === "AI & Business Automation" ||
        serviceName === "AI Agents Automation"
          ? " text-white px-20 pt-20 bg-[#0A0A0A]"
          : "py-4"
      }`}
    >
      <BreadcrumbList
        className={` ${
          serviceName === "Domain Name Consultation" ||
          serviceName === "Enterprise Domain Management" ||
          serviceName === "Social Media Marketing" ||
          serviceName === "AI & Business Automation" ||
          serviceName === "AI Agents Automation"
            ? "text-[white]"
            : ""
        }`}
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            className={` ${
              serviceName === "Domain Name Consultation" ||
              serviceName === "Enterprise Domain Management" ||
              serviceName === "Social Media Marketing" ||
              serviceName === "AI & Business Automation" ||
              serviceName === "AI Agents Automation"
                ? "hover:text-[#6f6f6f]"
                : "hover:text-[#6f6f6f]"
            }`}
            asChild
          >
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            className={` ${
              serviceName === "Domain Name Consultation" ||
              serviceName === "Enterprise Domain Management" ||
              serviceName === "Social Media Marketing" ||
              serviceName === "AI & Business Automation" ||
              serviceName === "AI Agents Automation"
                ? "hover:text-[#6f6f6f]"
                : "hover:text-[#6f6f6f]"
            }`}
            asChild
          >
            <Link to="/services">What We Do?</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage
            className={` ${
              serviceName === "Domain Name Consultation" ||
              serviceName === "Enterprise Domain Management" ||
              serviceName === "Social Media Marketing" ||
              serviceName === "AI & Business Automation" ||
              serviceName === "AI Agents Automation"
                ? "text-[white]"
                : ""
            }`}
          >
            {serviceName}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ServiceBreadcrumb;

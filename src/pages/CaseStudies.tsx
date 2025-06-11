import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import PageHeader from "@/components/common/PageHeader";
import CtaSection from "@/components/CtaSection";

// Main Page Component
const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  useEffect(() => {
    // Fetch case studies data
    fetch("/api/case-studies")
      .then((response) => response.json())
      .then((data) => setCaseStudies(data));
  }, []);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Impact Studies | Realm by Rook</title>
        <meta
          name="description"
          content="Explore our impact studies to see how Realm by Rook drives measurable business transformations."
        />
      </Helmet>
      <PageHeader
        title="Impact Studies"
        subtitle="Real transformations. Real results. See how our work drives measurable business impact."
        isLarge={true}
      />
      {/* Featured Case Studies Section */}
      <section className="realm-section">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Featured Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-realm-lightgray">
                <CardContent>
                  <h3 className="text-xl font-display font-medium mb-4">
                    {study.title}
                  </h3>
                  <p className="text-realm-darkgray">{study.description}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/case-studies/${study.slug}`}>
                    <Button variant="link" className="text-realm-black">
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;

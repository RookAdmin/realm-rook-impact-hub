import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import { Droplet, PawPrint, Globe, ArrowRight } from "lucide-react";

const ProfitPledge = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white text-realm-black py-24 md:py-32 border-b border-gray-200">
        <div className="realm-container text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-realm-black text-white text-sm font-bold rounded-full mb-6">
            10% Profit Pledge
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-4xl mx-auto">
            Giving Back, Where It Matters Most.
          </h1>
          <p className="text-xl md:text-2xl text-realm-darkgray max-w-3xl mx-auto mb-12">
            At Realm by Rook, 10% of every profit is pledged to the Aravindh Initiative, returning hope, health, and
            opportunity to the communities that inspire us.
          </p>

          {/* Visual Network Illustration */}
          <div className="max-w-4xl mx-auto my-16 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#dc2e3e] flex items-center justify-center mb-4 shadow-lg">
                  <Droplet className="text-white" size={32} />
                </div>
                <div className="h-20 w-1 bg-gradient-to-b from-[#dc2e3e] to-gray-200"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#ffd800] flex items-center justify-center mb-4 shadow-lg">
                  <PawPrint className="text-realm-white" size={32} />
                </div>
                <div className="h-20 w-1 bg-gradient-to-b from-[#ffd800] to-gray-200"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#00d437] flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="text-white" size={32} />
                </div>
                <div className="h-20 w-1 bg-gradient-to-b from-[#00d437] to-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="realm-section bg-white border-b border-gray-200">
        <div className="realm-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-realm-black">
            Why We Partner with Aravindh Initiative
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              The Aravindh Initiative is a catalyst for real change, from life-saving blood donation drives (Red
              Impact), to compassion for street animals (Orange Impact), to educational programs and green futures. We
              dedicate 10% of all Realm by Rook profits to these causes, ensuring every success returns to those who
              need it most.
            </p>
            <p>Together, we build a legacy of innovation that uplifts every origin.</p>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="realm-section bg-white border-b border-gray-200">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Impact Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Red Impact */}
            <div className="bg-gray-50 border-l-4 border-[#dc2e3e] p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#dc2e3e] flex items-center justify-center mr-4">
                  <Droplet className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Blood Donation Drives</h3>
              </div>
              <p className="text-gray-600">
                Life-saving campaigns outreach, bringing hope to thousands—with your support.
              </p>
            </div>

            {/* Orange Impact */}
            <div className="bg-gray-50 border-l-4 border-[#ffd800] p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#ffd800] flex items-center justify-center mr-4">
                  <PawPrint className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Street Animal Welfare</h3>
              </div>
              <p className="text-gray-600">
                Providing food, warmth, and compassion for the voiceless, one day at a time.
              </p>
            </div>

            {/* Blue/Green Impact */}
            <div className="bg-gray-50 border-l-4 border-[#00d437] p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#00d437] flex items-center justify-center mr-4">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Education & Sustainability</h3>
              </div>
              <p className="text-gray-600">
                Empowering young minds and greener tomorrow, one community, every quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 10% Pledge Explained */}
      <section className="realm-section bg-white border-b border-gray-200">
        <div className="realm-container max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center text-realm-black">
              10%: More Than a Promise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every quarter, 10% of Realm by Rook profits are entrusted to Aravindh Initiative programs, overseen by our
              joint committee and transparently reported. This is our bond with every customer: that your trust in us
              echoes outwards in real, accountable action.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every project, every life changed, is part of this promise.
            </p>
            <div className="text-center">
              <a
                href="https://aravindh.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-realm-black hover:underline"
              >
                Learn more at aravindh.org <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Voices of Impact */}
      <section className="realm-section bg-white border-b border-gray-200">
        <div className="realm-container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Voices of Impact</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 border-l-4 border-[#dc2e3e] p-8 shadow-sm">
              <p className="text-xl italic text-gray-700 mb-4">
                "Together with Realm, our blood drives reach further—saving lives, inspiring hope."
              </p>
              <p className="text-sm text-gray-500 font-medium">— Aravindh Volunteer, India</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-[#ffd800] p-8 shadow-sm">
              <p className="text-xl italic text-gray-700 mb-4">
                "Street animals find comfort and care, thanks to this unique pledge."
              </p>
              <p className="text-sm text-gray-500 font-medium">— Community Leader, Global</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-[#00d437] p-8 shadow-sm">
              <p className="text-xl italic text-gray-700 mb-4">
                "Education and green futures are now a reality, not a dream."
              </p>
              <p className="text-sm text-gray-500 font-medium">— Beneficiary, Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="realm-section bg-white">
        <div className="realm-container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Be Part of the Cycle of Good.</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Realm by Rook, growth carries a duty. We invest 10% of our progress in championing health, hope, and
            better tomorrows through the Aravindh Initiative. See the impact, share the journey.
          </p>
          <a
            href="https://aravindh.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-medium text-realm-black hover:underline"
          >
            Visit Aravindh Initiative <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProfitPledge;


import React from 'react';
import { brandDosDonts } from '@/data/brandKitData';
import { CheckCircle, XCircle } from 'lucide-react';

const DosDonts = () => {
  return (
    <section className="realm-section border-b border-realm-lightgray">
      <div className="realm-container">
        <h2 className="text-3xl font-display font-bold mb-10">Do's & Don'ts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="flex items-center justify-center">
            <h3 className="text-xl font-semibold px-8 py-3 border-b-2 border-realm-black">Do This</h3>
          </div>
          <div className="flex items-center justify-center">
            <h3 className="text-xl font-semibold px-8 py-3 border-b-2 border-realm-black">Don't Do This</h3>
          </div>
          
          {brandDosDonts.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start p-4 bg-realm-lightgray bg-opacity-30">
                <CheckCircle className="mr-3 text-green-600 flex-shrink-0" size={20} />
                <p>{item.do}</p>
              </div>
              <div className="flex items-start p-4 bg-realm-lightgray bg-opacity-30">
                <XCircle className="mr-3 text-red-600 flex-shrink-0" size={20} />
                <p>{item.dont}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DosDonts;

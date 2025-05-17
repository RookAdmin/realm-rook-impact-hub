
import React from 'react';
import { permissions } from '@/data/brandKitData';

const Permissions = () => {
  return (
    <section className="realm-section">
      <div className="realm-container">
        <h2 className="text-3xl font-display font-bold mb-10">Usage Permissions</h2>
        
        <div className="max-w-3xl">
          <p className="mb-8 text-lg">
            We appreciate your interest in using our brand assets. To ensure consistency and
            protect our brand integrity, please follow these guidelines:
          </p>
          
          <ul className="space-y-4">
            {permissions.map((permission, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 font-bold">•</span>
                <p>{permission}</p>
              </li>
            ))}
          </ul>
          
          <p className="mt-8 text-lg">
            If you have any questions or need special permission for usage not covered here,
            please contact us at <a href="mailto:hlo@realmrook.com" className="realm-link">hlo@realmrook.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Permissions;

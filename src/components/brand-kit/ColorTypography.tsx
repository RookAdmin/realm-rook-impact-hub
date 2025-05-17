
import React from 'react';
import { brandColors, typography } from '@/data/brandKitData';

const ColorTypography = () => {
  return (
    <section className="realm-section border-b border-realm-lightgray">
      <div className="realm-container">
        <h2 className="text-3xl font-display font-bold mb-10">Colors & Typography</h2>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Brand Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brandColors.map((color) => (
              <div key={color.name} className="flex flex-col">
                <div 
                  className="aspect-square mb-3 rounded" 
                  style={{ backgroundColor: color.hex }}
                  aria-label={`${color.name} color sample`}
                ></div>
                <p className="font-medium">{color.name}</p>
                <p className="text-sm text-realm-gray">{color.hex}</p>
                <p className="text-xs text-realm-gray">RGB: {color.rgb}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6">Typography</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {typography.map((font) => (
              <div key={font.name} className="flex flex-col">
                <h4 
                  className={`text-4xl mb-2 ${font.name === 'Playfair Display' ? 'font-display' : 'font-sans'}`}
                >
                  {font.name}
                </h4>
                <p className="text-realm-gray mb-2">{font.usage}</p>
                <p className="text-sm text-realm-gray">Weights: {font.weights.join(', ')}</p>
                <div className={`mt-4 ${font.name === 'Playfair Display' ? 'font-display' : 'font-sans'}`}>
                  <p className="font-normal mb-1">The quick brown fox jumps over the lazy dog</p>
                  <p className="font-medium mb-1">The quick brown fox jumps over the lazy dog</p>
                  <p className="font-bold">The quick brown fox jumps over the lazy dog</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorTypography;


import React from 'react';

interface TransformationStory {
  before: string;
  after: string;
}

interface TransformationStoriesProps {
  stories: TransformationStory[];
}

const TransformationStories: React.FC<TransformationStoriesProps> = ({ stories }) => {
  return (
    <section className="realm-section bg-realm-black text-white">
      <div className="realm-container">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold">From Ordinary to Unforgettable.</h2>
          <div className="w-16 h-1 bg-white mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="mb-6">
                <p className="text-realm-lightgray font-medium line-through opacity-70">
                  Before: {story.before}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-white font-medium">
                  After: {story.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationStories;

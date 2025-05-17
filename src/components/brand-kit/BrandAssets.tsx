
import React from 'react';
import { brandAssets } from '@/data/brandKitData';
import DownloadButton from '../common/DownloadButton';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const BrandAssets = () => {
  return (
    <section className="realm-section border-b border-realm-lightgray">
      <div className="realm-container">
        <h2 className="text-3xl font-display font-bold mb-10">Downloadable Assets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandAssets.map((asset) => (
            <Card key={asset.id} className="overflow-hidden border border-realm-lightgray hover:border-realm-black transition-all duration-300">
              <CardHeader className="pb-0">
                <h3 className="text-xl font-semibold">{asset.name}</h3>
                <p className="text-sm text-realm-gray">{asset.description}</p>
              </CardHeader>
              
              <CardContent className="pt-4">
                <AspectRatio ratio={16/9} className="bg-realm-lightgray mb-4 rounded overflow-hidden">
                  <img 
                    src={asset.previewUrl} 
                    alt={asset.name} 
                    className="w-full h-full object-contain" 
                  />
                </AspectRatio>
              </CardContent>
              
              <CardFooter className="flex flex-wrap gap-2">
                {asset.fileTypes.map((fileType) => (
                  <DownloadButton 
                    key={fileType}
                    label={fileType}
                    url={asset.downloadUrls[fileType]}
                    variant="outline"
                    className="text-sm px-3 py-1 h-auto"
                  />
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandAssets;

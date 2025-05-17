
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  label: string;
  url: string;
  variant?: 'default' | 'outline' | 'link';
  className?: string;
}

const DownloadButton = ({ label, url, variant = 'default', className }: DownloadButtonProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button 
      variant={variant} 
      onClick={handleDownload} 
      className={cn('flex items-center gap-2', className)}
    >
      <span>{label}</span>
      <Download size={16} />
    </Button>
  );
};

export default DownloadButton;

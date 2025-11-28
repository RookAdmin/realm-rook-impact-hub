
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
  return (
    <Button
      variant={variant}
      asChild
      className={cn('flex items-center gap-2', className)}
    >
      <a href={url} download target="_blank" rel="noopener noreferrer">
        <span>{label}</span>
        <Download size={16} />
      </a>
    </Button>
  );
};

export default DownloadButton;

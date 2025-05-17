
import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const Tag = ({ label, className, onClick }: TagProps) => {
  return (
    <span 
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium rounded-full border border-realm-black',
        onClick ? 'cursor-pointer hover:bg-realm-black hover:text-white transition-colors' : '',
        className
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default Tag;

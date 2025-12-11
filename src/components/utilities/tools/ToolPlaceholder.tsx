import React from "react";

interface ToolPlaceholderProps {
  name: string;
  onCopy?: (text: string) => void;
}

const ToolPlaceholder: React.FC<ToolPlaceholderProps> = ({ name, onCopy }) => {
  return (
    <div className="text-center py-12">
      <p className="text-realm-gray mb-4">{name} tool is coming soon!</p>
      <p className="text-sm text-realm-gray">This utility will be available in a future update.</p>
    </div>
  );
};

export default ToolPlaceholder;


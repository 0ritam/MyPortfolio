"use client"

import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconFileText, IconDownload } from '@tabler/icons-react';


export default function Viewcv({ className }: { className?: string }) {
  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = '/cv.pdf';  
    link.download = 'RitamMaity.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <BentoGridItem
      icon={<IconFileText className="h-10 w-10 text-neutral-500" />}
      className={`${className} cursor-pointer relative hover:border-neutral-600 transition-colors duration-200`}
      onClick={handleDownload}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/50 md:bg-transparent md:opacity-0 md:group-hover/bento:opacity-100 md:group-hover/bento:bg-neutral-900/50 transition-all duration-200">
        <div className="flex items-center gap-2 text-neutral-200">
          <IconDownload className="w-6 h-6" />
          <span className="text-sm font-medium">Download Resume</span>
        </div>
      </div>
    </BentoGridItem>
  );
}
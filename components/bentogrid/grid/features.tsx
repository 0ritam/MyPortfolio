import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconLink} from '@tabler/icons-react';
import { StacksCard } from './cards/stack-card';
import GithubLink from './cards/github-link';
import { GithubStats } from './cards/github-stats';
import { LinksCard } from './cards/links';
import Research from './cards/research';
import Image from 'next/image';


export default function Featuregrid({ className }: { className?: string }) {
  return (
    <div className={`flex-1 ${className}`}>
      {/* First row - GitHub sections */}      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <div className="sm:col-span-1 lg:col-span-3">
          <BentoGridItem className="h-[200px]">
            <GithubLink />
          </BentoGridItem>
        </div>        
        <div className="sm:col-span-1 lg:col-span-3">
          <BentoGridItem className="h-[200px]">
            <GithubStats />
          </BentoGridItem>
        </div>
      </div>

      {/* Second row - Links section */}      
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <BentoGridItem className="h-[160px]">
            <LinksCard />
          </BentoGridItem>
        </div>
        <div className="sm:col-span-1">
          <BentoGridItem
            className="h-[160px] relative overflow-hidden"
          >            <Image
              src="/luffy2.jpg"
              alt="Luffy Image"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </BentoGridItem>
        </div>
      </div>

      {/* Third row */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">        <div className="sm:col-span-2">
          <BentoGridItem className="h-[160px] overflow-hidden flex items-center justify-center">
            <StacksCard />
          </BentoGridItem>
        </div>        <div className="sm:col-span-1">
          <BentoGridItem className="h-[160px]">
            <Research />
          </BentoGridItem>
        </div>
      </div>
    </div>
  );
}
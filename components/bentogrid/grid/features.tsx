import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconBriefcase, IconCode, IconBrandGithub, IconMusic, IconLink, IconStack, IconMessage, IconBook } from '@tabler/icons-react';
import { StacksCard } from './cards/stack-card';
import GithubLink from './cards/github-link';
import { GithubStats } from './cards/github-stats';
import { LinksCard } from './cards/links';


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

      {/* Second row - Links section */}      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <BentoGridItem className="h-[160px]">
            <LinksCard />
          </BentoGridItem>
        </div>
        <div className="sm:col-span-1">
          <BentoGridItem
            title="Link"
            description="Small link widget"
            icon={<IconLink className="h-4 w-4 text-neutral-500" />}
            className="h-[160px]"
          />
        </div>
      </div>

      {/* Third row */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">        <div className="sm:col-span-2">
          <BentoGridItem className="h-[160px] overflow-hidden flex items-center justify-center">
            <StacksCard />
          </BentoGridItem>
        </div>
        <div className="sm:col-span-1">
          <BentoGridItem
            title="Books"
            description="Reading and learning"
            icon={<IconBook className="h-4 w-4 text-neutral-500" />}
            className="h-[160px]"
          />
        </div>
      </div>
    </div>
  );
}
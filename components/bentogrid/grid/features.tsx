import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconBriefcase, IconCode, IconBrandGithub, IconMusic, IconLink, IconStack, IconMessage, IconBook } from '@tabler/icons-react';

export default function Featuregrid({ className }: { className?: string }) {
  return (
    <div className={`flex-1 ${className}`}>
      {/* First row - GitHub sections */}
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-3">
          <BentoGridItem
            title="GitHub Link"
            description="My experiments (aka projects)"
            icon={<IconBrandGithub className="h-4 w-4 text-neutral-500" />}
            className="h-[200px]"
          />
        </div>
        <div className="col-span-3">
          <BentoGridItem
            title="GitHub Stats"
            description="Statistics display area"
            icon={<IconCode className="h-4 w-4 text-neutral-500" />}
            className="h-[200px]"
          />
        </div>
      </div>

      {/* Second row - Links section */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        {/* Small link widget on left */}
        <div className="col-span-1">
          <BentoGridItem
            title="Link"
            description="Small link widget"
            icon={<IconLink className="h-4 w-4 text-neutral-500" />}
            className="h-[180px]"
          />
        </div>
        {/* 2x2 grid of links on right */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[180px]">
            <div>
              <BentoGridItem
                title="LinkedIn"
                description="Professional"
                icon={<IconLink className="h-4 w-4 text-neutral-500" />}
                className="h-[84px]"
              />
            </div>
            <div>
              <BentoGridItem
                title="Twitter"
                description="Social updates"
                icon={<IconLink className="h-4 w-4 text-neutral-500" />}
                className="h-[84px]"
              />
            </div>
            <div>
              <BentoGridItem
                title="Reddit"
                description="Discussions"
                icon={<IconLink className="h-4 w-4 text-neutral-500" />}
                className="h-[84px]"
              />
            </div>
            <div>
              <BentoGridItem
                title="Web"
                description="Portfolio"
                icon={<IconLink className="h-4 w-4 text-neutral-500" />}
                className="h-[84px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third row */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <BentoGridItem
            title="Tech Stack"
            description="Technology stack showcase"
            icon={<IconStack className="h-4 w-4 text-neutral-500" />}
            className="h-[160px]"
          />
        </div>
        <div className="col-span-1">
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
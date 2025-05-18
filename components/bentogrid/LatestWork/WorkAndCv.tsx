import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconFileText, IconEye } from '@tabler/icons-react';

const Skeleton = () => (
  <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

export default function WorkAndCv({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="Work & Experience"
      description={
        <div className="grid grid-cols-2 gap-4">
          {/* Latest Work Section */}
          <div className="space-y-2">
            <div className="font-medium">Latest Work</div>
            <div className="text-sm text-neutral-400">Recent development projects</div>
            <div className="h-20">
              <Skeleton />
            </div>
          </div>

          {/* CV Section */}
          <div className="space-y-2">
            <div className="font-medium">Curriculum Vitae</div>
            <div className="text-sm text-neutral-400">View my experience</div>
            <a 
              href="/cv.pdf" 
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors text-neutral-200"
            >
              <IconFileText className="h-4 w-4" />
              <span>View CV</span>
            </a>
          </div>
        </div>      }
      icon={<IconEye className="h-4 w-4 text-neutral-500" />}
      className={`${className} h-[380px]`}
    />
  );
}

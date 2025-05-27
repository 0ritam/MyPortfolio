import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconSchool } from '@tabler/icons-react';

export default function Work({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="Education"
      description={
        <div className="flex flex-col space-y-8 relative px-4 py-2">
          {/* MCA Education */}
          <div className="flex items-start space-x-4">
            <div className="relative flex items-center">
              <div className="w-[10px] h-[10px] text-xs font-bold text-white">×</div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-1">
                <IconSchool className="h-5 w-5 text-white" />
                <h3 className="font-medium text-lg">
                  <span className="hidden sm:inline">MCA</span>
                  <span className="sm:hidden">Master of Computer Applications</span>
                </h3>
              </div>
              <p className="text-neutral-400">Christ University</p>
              <p className="text-sm text-neutral-500">2024 - Present</p>
              <p className="text-sm text-neutral-400 mt-1">Bangalore, India</p>
            </div>
          </div>

          {/* BCA Education */}
          <div className="flex items-start space-x-4">
            <div className="relative flex items-center">
              <div className="w-[10px] h-[10px] text-xs font-bold text-white">×</div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-1">
                <IconSchool className="h-5 w-5 text-white" />
                <h3 className="font-medium text-lg">
                  <span className="hidden sm:inline">BCA</span>
                  <span className="sm:hidden">Bachelor of Computer Applications</span>
                </h3>
              </div>
              <p className="text-neutral-400">Manipal University</p>
              <p className="text-sm text-neutral-500">2021 - 2024</p>
              <p className="text-sm text-neutral-400 mt-1">Jaipur, India</p>
            </div>
          </div>
        </div>
      }
      icon={<IconSchool className="h-4 w-4 text-neutral-500" />}
      className={`${className}`}
    />
  );
}

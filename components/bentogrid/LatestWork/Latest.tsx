import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconEye } from '@tabler/icons-react';

const Skeleton = () => (
  <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

export default function LatestWork({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="Latest Work"
      description="Recent development projects"
      icon={<IconEye className="h-4 w-4 text-neutral-500" />}
      className={className}
      header={<Skeleton />}
    />
  );
}
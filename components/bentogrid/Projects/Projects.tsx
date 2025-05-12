import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconCode } from '@tabler/icons-react';

const Skeleton = () => (
  <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

export default function Projects({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="Projects"
      description="Atomix UI • Quick Bid"
      icon={<IconCode className="h-4 w-4 text-neutral-500" />}
      className={className}
      header={<Skeleton />}
    />
  );
}
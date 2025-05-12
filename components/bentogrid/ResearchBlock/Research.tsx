import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconFileText } from '@tabler/icons-react';

export default function Research({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="Research"
      description="Research papers and publications"
      icon={<IconFileText className="h-4 w-4 text-neutral-500" />}
      className={className}
    />
  );
}
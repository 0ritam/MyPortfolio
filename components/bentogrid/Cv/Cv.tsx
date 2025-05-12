import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconFileText } from '@tabler/icons-react';

export default function CV({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="CV"
      description="View CV"
      icon={<IconFileText className="h-4 w-4 text-neutral-500" />}
      className={className}
    />
  );
}
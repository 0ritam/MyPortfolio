import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconBriefcase } from '@tabler/icons-react';

export default function Featuregrid({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="Status"
      description="Available for freelance, full-time, and contract work"
      icon={<IconBriefcase className="h-4 w-4 text-neutral-500" />}
      className={className}
    />
  );
}
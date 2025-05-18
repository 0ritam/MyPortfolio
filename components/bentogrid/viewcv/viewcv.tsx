import { BentoGridItem } from '@/components/ui/bento-grid';


export default function Viewcv({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="Cv"
      description="view cv"
      // icon={<IconFileText className="h-4 w-4 text-neutral-500" />}
      className={className}
    />
  );
}
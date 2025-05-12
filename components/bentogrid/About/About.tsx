import { BentoGridItem } from '@/components/ui/bento-grid';
import { IconUser } from '@tabler/icons-react';

export default function About({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="About"
      description="I am a software developer passionate about crafting dynamic and user-centric web apps. With experience in modern technologies, I thrive on building scalable solutions."
      icon={<IconUser className="h-4 w-4 text-neutral-500" />}
      className={className}
    />
  );
}
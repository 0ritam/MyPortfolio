import { BentoGridItem } from '@/components/ui/bento-grid';
import {
  TypeScriptIcon,
  NextJsIcon,
  NodeIcon,
  
  
} from '@/components/icons/tech-stack';

const TechStack = () => (
  <span className="inline-flex gap-2">
    <TypeScriptIcon />
    <NextJsIcon />
    <NodeIcon />
    
  </span>
);

export default function About({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="About Me"
      description={
        <div className="flex-1 space-y-4 text-white">
          <h2 className="text-xs opacity-70 font-[var(--font-crimson-text)]">
            Full-Stack Developer
          </h2>

          <div className="font-[var(--font-caveat)] text-2xl">
            Hello, welcome to my little corner on the web! 👋
          </div>

          <div className="font-[var(--font-crimson-text)]">
            I'm a self-taught code solutions programmer, I love programming and I try to use the most{' '}
            <strong> clean software architecture</strong>, and{' '}
            <strong>maintainable code</strong>. I like to work with technologies from the <TechStack /> 
            <br></br>
            ecosystem.
          </div>

          <div className="font-[var(--font-crimson-text)]">
            I hope I can help you. I'd love to hear your ideas and contribute whenever possible.
          </div>
        </div>
      }
      className={`${className} overflow-auto bg-black p-6 rounded-lg`}
    />
  );
}
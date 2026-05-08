import { BentoGridItem } from '@/components/ui/bento-grid';

export default function About({ className }: { className?: string }) {
  return (
    <BentoGridItem
      title="Full-Stack Developer"
      description={
        <div className="flex-1 space-y-4 text-white">
          <div className="font-[var(--font-caveat)]">
            <h2>Hello, welcome to my little corner on the web! 👋</h2>
          </div>

          <div className="border-t border-neutral-800 pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-[var(--font-caveat)] text-2xl text-white leading-none">Experience</h3>
              <span className="text-xs text-neutral-500">Jan 2026 – Present</span>
            </div>
            <div className="font-[var(--font-crimson-text)] text-sm space-y-2">
              <div>
                <span className="text-white font-semibold">SDE Intern</span>
                <span className="text-neutral-400"> · SuperAGI</span>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-300">
                <li>
                  Shipped React 19 / Next.js 15 / Vue features — ReactFlow workflows, LiveKit WebRTC call UI, and Yjs CRDT collab editing.
                </li>
                <li>
                  Built Node.js backend across 12+ microservices — Webhook Service with multi-auth and MQTT-over-WSS analytics surfacing $794K+ pipeline.
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
      className={`${className} overflow-auto bg-black p-6 rounded-lg`}
    />
  );
}
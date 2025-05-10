import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconBriefcase,
  IconUser,
  IconFileText,
  IconCode,
  IconEye,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Bar */}
      <header className="w-full px-6 py-2 flex justify-between items-center border-b border-neutral-800 mb-8">
        <div>
          <h1 className="text-xl font-semibold">Ritam Maity</h1>
          <p className="text-sm text-neutral-400">Software Developer</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <IconBrandTwitter className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            <IconBrandLinkedin className="h-5 w-5" />
          </a>
          <a href="mailto:your.email@example.com" className="text-neutral-400 hover:text-white transition-colors">
            <IconMail className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8">
        {/* Hero Space */}
        <section className="w-full h-[200px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 mb-4">
          <h2 className="text-2xl font-bold text-purple-400">Hero Space</h2>
        </section>

        {/* About and Status Row */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          <BentoGridItem
            title="About"
            description="I am a software developer passionate about crafting dynamic and user-centric web apps. With experience in modern technologies, I thrive on building scalable solutions."
            icon={<IconUser className="h-4 w-4 text-neutral-500" />}
            className="col-span-2 h-[200px]"
          />
          <BentoGridItem
            title="Status"
            description="Available for freelance, full-time, and contract work"
            icon={<IconBriefcase className="h-4 w-4 text-neutral-500" />}
            className="col-span-3 h-[200px]"
          />
        </div>

        {/* Projects and Right Side Sections */}
        <div className="grid grid-cols-4 gap-4">
          {/* Projects Section */}
          <BentoGridItem
            title="Projects"
            description="Atomix UI • Quick Bid"
            icon={<IconCode className="h-4 w-4 text-neutral-500" />}
            className="col-span-3 h-[500px]"
            header={<Skeleton />}
          />

          {/* Right Side Sections */}
          <div className="space-y-4 col-span-1">
            <BentoGridItem
              title="Latest Work"
              description="Recent development projects"
              icon={<IconEye className="h-4 w-4 text-neutral-500" />}
              className="h-[160px]"
              header={<Skeleton />}
            />
            <BentoGridItem
              title="CV"
              description="View CV"
              icon={<IconFileText className="h-4 w-4 text-neutral-500" />}
              className="h-[160px]"
            />
            <BentoGridItem
              title="Research"
              description="Research papers and publications"
              icon={<IconFileText className="h-4 w-4 text-neutral-500" />}
              className="h-[160px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

const Skeleton = () => (
  <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);


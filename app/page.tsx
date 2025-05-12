import React from "react";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import HeroSpace from "@/components/bentogrid/HeroSpace/Hero";
import About from "@/components/bentogrid/About/About";
import Featuregrid from "@/components/bentogrid/grid/features";
import Projects from "@/components/bentogrid/Projects/Projects";
import LatestWork from "@/components/bentogrid/LatestWork/Latest";
import CV from "@/components/bentogrid/Cv/Cv";
import Research from "@/components/bentogrid/ResearchBlock/Research";

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
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <IconBrandTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <IconBrandLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <IconMail className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8">
        {/* Hero Space */}

        <HeroSpace />

        {/* About and Status Row */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          <About className="col-span-2 h-[200px]" />

          <Featuregrid className="col-span-3 h-[200px]" />
        </div>

        {/* Projects and Right Side Sections */}
        <div className="grid grid-cols-4 gap-4">
          {/* Projects Section */}

          <Projects className="col-span-3 h-[500px]" />

          {/* Right Side Sections */}
          <div className="space-y-4 col-span-1">
            <LatestWork className="h-[160px]" />

            <CV className="h-[160px]" />

            <Research className="h-[160px]" />
          </div>
        </div>
      </main>
    </div>
  );
}

import React from "react";
import HeroSpace from "@/components/bentogrid/HeroSpace/Hero";
import About from "@/components/bentogrid/About/About";
import Featuregrid from "@/components/bentogrid/grid/features";
import Projects from "@/components/bentogrid/Projects/Projects";
import Viewcv from "@/components/bentogrid/viewcv/viewcv";
import Work from "@/components/bentogrid/Work/Work";

export default function BentoGridDemo() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Bar */}
      <header className="w-full px-4 sm:px-6 py-2 flex flex-col sm:flex-row mb-4 sm:mb-8 gap-2">
        {/* <div>
          <h1 className="text-xl font-semibold text-center sm:text-left">Ritam Maity</h1>
          <p className="text-sm text-neutral-400 text-center sm:text-left">Software Developer</p>
        </div> */}
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Hero Space */}
        <HeroSpace />

        {/* About and Features Grid Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="w-full lg:w-[400px] mb-4 lg:mb-0">
            <About className="h-full" />
          </div>
          <Featuregrid className="w-full" />
        </div>

        {/* Projects and Right Side Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Projects Section */}
          <Projects className="lg:col-span-3 h-[500px]" />

          {/* Right Side Sections */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <Work />
              <Viewcv className="h-[150px]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

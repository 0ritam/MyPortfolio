import { Typewriter } from './Typewriter'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSpace() {
  return (
    <section className="relative w-full h-[200px] rounded-xl border border-neutral-800 p-6 mb-4 overflow-hidden">
      {/* Background image */}
      <Image
        src="/bg.webp"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/30"
      />

      {/* Content */}
      <div className="relative flex flex-row items-center justify-between h-full gap-4">
        <div className="flex flex-col justify-center min-w-0">
          <h2 className="text-6xl font-bold text-white mb-2">
            Ritam Maity
          </h2>
          <div className="text-2xl text-neutral-300">
            <Typewriter
              words={[
                'En|',
                'Tech stuff enthusiast',
                'Nature admirer',
                'Full stack developer'
              ]}
              cursor
              loop
            />
          </div>
        </div>
        <Link
          href="/projects"
          className="hidden sm:flex shrink-0 items-center gap-2 px-6 py-3 rounded-xl border border-neutral-700 bg-black/40 backdrop-blur-sm text-sm text-neutral-200 hover:bg-black/60 hover:border-neutral-500 hover:text-white transition-all whitespace-nowrap"
        >
          View Projects →
        </Link>
      </div>
    </section>
  );
}

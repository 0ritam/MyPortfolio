import { Typewriter } from './Typewriter'

export default function HeroSpace() {
  return (
    <section className="w-full h-[200px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 mb-4">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-6xl font-bold text-white mb-2">
          Ritam Maity
        </h2>
        <div className="text-2xl text-neutral-400">
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
    </section>
  );
}
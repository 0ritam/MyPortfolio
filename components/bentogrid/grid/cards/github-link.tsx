import Image from 'next/image';

import catImg from './cat.jpg';
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

const GithubLink = () => {
  return (
    <a
      className="group relative flex transform-gpu flex-col justify-between gap-5 overflow-hidden  text-white transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100 h-[200px] w-[400px]"
      href="https://github.com/0ritam"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src={catImg}
          alt="background image"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
        ></span>
      </span>
      <span aria-hidden="true" className="px-6 pt-6">
        <span className="flex justify-between">
          <GithubLogo size="2em" className="text-xl"/>
        </span>
        <span className="space-y-0.5 px-6 pb-6">
        <span className="block font-semibold">GitHub</span>
        <span className="block text-sm">My experiments (aka projects)</span>
      </span>
      </span>

      
    </a>
  );
};

export default GithubLink;
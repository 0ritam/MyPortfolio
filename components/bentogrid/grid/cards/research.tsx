import Image from 'next/image';
import reeserch from './research2.jpg';
import { BookBookmark } from '@phosphor-icons/react/dist/ssr';

const Research = () => {
  return (
    <a
      className="group relative flex transform-gpu flex-col justify-between gap-5 overflow-hidden text-white transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100 h-full w-full"
      href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5211244"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <Image
          src={reeserch}
          alt="research background"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
          priority
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
        ></span>
      </span>
      <span aria-hidden="true" className="px-6 pt-6">
        <span className="flex justify-between">
          <BookBookmark weight="fill" className="text-2xl" />
        </span>
      </span>

      <span className="space-y-0.5 px-6 pb-6">
        <span className="block font-semibold">SSRN</span>
        <span className="block text-sm">My Paper</span>
      </span>
    </a>
  );
};

export default Research;


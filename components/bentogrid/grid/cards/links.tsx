import {
  LinkedinLogo,
  XLogo,
  DiscordLogo,
  Bookmark
} from '@phosphor-icons/react/dist/ssr'

export const LinksCard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full w-full p-1">
      <a
        href="https://www.linkedin.com/in/dev-rmaity"
        target="_blank"
        rel="noopener noreferrer"
        className="flex transform-gpu flex-col items-center justify-center rounded-lg bg-[#2867b2] text-white duration-500 hover:scale-[.97]"
      >
        <LinkedinLogo weight="fill" className="text-2xl" />
        <p className="text-[12px] text-white/90">(serious stuff)</p>
      </a>
      <a
        href="https://x.com/dev_ritam"
        target="_blank"
        rel="noopener noreferrer"
        className="flex transform-gpu flex-col items-center justify-center rounded-lg bg-[#1c1d1f] text-white duration-500 hover:scale-[.97]"
      >
        <XLogo weight="fill" className="text-2xl" />
        <p className="text-[12px] text-white/55">(my timeline ;)</p>
      </a>
      <a
        href="https://substack.com/@ritammaity/notes"
        target="_blank"
        rel="noopener noreferrer"
        className="flex transform-gpu flex-col items-center justify-center rounded-lg bg-[#FF4500] text-white duration-500 hover:scale-[.97]"
      >
        <Bookmark weight="fill" className="text-2xl" />
        <p className="text-[12px] opacity-50">&quot;What is this?&quot;</p>
      </a>
      <a
        href="https://discord.com/channels/@me"
        target="_blank"
        rel="noopener noreferrer"
        className="flex transform-gpu flex-col items-center justify-center rounded-lg bg-[#5865F2] text-white duration-500 hover:scale-[.97]"
      >
        <DiscordLogo weight="fill" className="text-2xl" />
        <p className="text-[12px] text-white/90">play around;</p>
      </a>
    </div>
  )
}
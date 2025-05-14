import React from 'react'
import { stackLines, IconItem } from './stack-icons'

type MarqueeProps = {
  children: React.ReactNode
  reverse?: boolean
}

const Marquee = ({ children, reverse = false }: MarqueeProps) => {
  return (
    <div className="relative flex overflow-x-hidden hover:[&>div>div]:animation-play-state-paused">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 w-12 h-full z-10 bg-gradient-to-r from-[#0f0f0f] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-12 h-full z-10 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none" />
      
      {/* Scrolling Track */}
      <div className="flex whitespace-nowrap gap-4">
        {/* First instance of items */}
        <div className={`flex gap-4 items-center shrink-0 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className={`flex gap-4 items-center shrink-0 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

const IconElement = ({
  data: { color, icon: Icon, title }
}: {
  data: IconItem
}) => (
  <div
    key={title}
    title={title}
    style={{ color }}
    className="flex items-center justify-center text-5xl transition-transform hover:scale-110 cursor-pointer"
  >
    <Icon />
  </div>
)

export const StacksCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="py-2">
        <Marquee>
          {stackLines.top.map(data => (
            <IconElement key={data.title} data={data} />
          ))}
        </Marquee>
      </div>

      <div className="py-2">
        <Marquee reverse>
          {stackLines.bottom.map(data => (
            <IconElement key={data.title} data={data} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

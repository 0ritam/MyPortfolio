import React, { SVGProps } from 'react'

import { 
  AWSIcon, 
  BunIcon, 
  CPlusPlusIcon, 
  CloudflareIcon, 
  CSS3Icon, 
  DockerIcon, 
  ExpressIcon, 
  FigmaIcon, 
  GithubIcon, 
  HTML5Icon, 
  JavascriptIcon, 
  NextIcon, 
  NodeIcon, 
  PostgreSQLIcon, 
  PrismaIcon, 
  ReactIcon, 
  TailwindcssIcon, 
  TypescriptIcon, 
  VercelIcon, 
  VSCodeIcon 
} from '@/components/icons';

export type IconItem = {
  title: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  color: string;
};

type StackLine = {
  top: IconItem[];
  bottom: IconItem[];
};

export const stackLines: StackLine = {
  top: [
    { title: 'Typescript', icon: TypescriptIcon, color: '#3178C6' },
    { title: 'HTML5', icon: HTML5Icon, color: '#E34F26' },
    { title: 'CSS3', icon: CSS3Icon, color: '#1572B6' },
    { title: 'React.js', icon: ReactIcon, color: '#61DAFB' },
    { title: 'Next.js', icon: NextIcon, color: '#FFFFFF' },
    { title: 'Tailwind CSS', icon: TailwindcssIcon, color: '#06B6D4' },
    { title: 'Javascript', icon: JavascriptIcon, color: '#F7DF1E' },
    { title: 'Node.js', icon: NodeIcon, color: '#339933' },
    { title: 'Express.js', icon: ExpressIcon, color: '#000000' },
    { title: 'GitHub', icon: GithubIcon, color: '#181717' }
  ],
  bottom: [
    { title: 'Docker', icon: DockerIcon, color: '#2496ED' },
    { title: 'AWS', icon: AWSIcon, color: '#FF9900' },
    { title: 'Cloudflare', icon: CloudflareIcon, color: '#F38020' },
    { title: 'Bun', icon: BunIcon, color: '#F7E018' },
    { title: 'C++', icon: CPlusPlusIcon, color: '#00599C' },
    { title: 'PostgreSQL', icon: PostgreSQLIcon, color: '#4169E1' },
    { title: 'Prisma', icon: PrismaIcon, color: '#2D3748' },
    { title: 'Figma', icon: FigmaIcon, color: '#F24E1E' },
    { title: 'Vercel', icon: VercelIcon, color: '#000000' },
    { title: 'VS Code', icon: VSCodeIcon, color: '#007ACC' }
  ]
};
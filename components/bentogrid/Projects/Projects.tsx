import { BentoGridItem } from '@/components/ui/bento-grid';
import Link from 'next/link';

const projects = [
	{
		title: 'FinLit',
		period: 'Dec 2024 - March 2024',
		description:
			'Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
		link: '/projects',
	},
	{
		title: 'Ai Podcast Clipper',
		period: 'May 2024 - Present',
		description:
			'A fast, intuitive platform where users can bid, win, and save on top products and services in real-time.',
		technologies: ['Next.js', 'TypeScript', 'Docker', 'Prisma', 'Supabase'],
		link: '/projects',
	},
];

export default function Projects({ className }: { className?: string }) {
	return (
		<BentoGridItem
			description={
				<div className="flex flex-col h-full">
					{/* Project Grid - 1 column on mobile, 2 on desktop */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
						{projects.map((project, index) => (
							<div
								key={index}
								className={`group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 hover:bg-neutral-900 transition-all ${
									index === 1 ? 'hidden sm:block' : ''
								}`}
							>
								{/* Empty Space for Image */}
								<div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
									<div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800" />
								</div>

								{/* Project Info */}
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-medium text-white">
											{project.title}
										</h3>
									</div>
									<div className="text-sm text-neutral-400">
										{project.period}
									</div>
									<p className="text-sm text-neutral-400 line-clamp-2">
										{project.description}
									</p>

									{/* Technologies */}
									<div className="flex flex-wrap gap-2 pt-2">
										{project.technologies.map((tech, i) => (
											<span
												key={i}
												className="px-2 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Show More Button */}
					<div className="mt-4 sticky bottom-0 bg-black/80 backdrop-blur-sm pt-2">
						<Link
							href="/projects"
							className="flex w-full items-center justify-center px-4 py-3 rounded-xl border border-neutral-800 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all"
						>
							View All Projects →
						</Link>
					</div>
				</div>
			}
			className={`${className} h-[520px]`}
		/>
	);
}
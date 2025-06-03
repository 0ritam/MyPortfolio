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
			// title="Projects"
			description={
				<div className="space-y-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{projects.map((project, index) => (
							<div
								key={index}
								className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 hover:bg-neutral-900 transition-all pointer-events-none"
							>
								{/* Transparent Overlay */}
								<div className="absolute inset-0 bg-neutral-950/50 rounded-xl group-hover:bg-neutral-950/30 transition-all z-10" />

								{/* Empty Space for Image */}
								<div className="aspect-video w-full overflow-hidden rounded-lg mb-4 relative">
									<div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800" />
								</div>

								{/* Project Info */}
								<div className="space-y-2 relative z-0">
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
					<div className="flex justify-center pt-2">
						<Link
							href="/projects"
							className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-neutral-800 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all pointer-events-auto"
						>
							Show More →
						</Link>
					</div>
				</div>
			}
			className={`${className} h-[520px]`}
		/>
	);
}
import { BentoGridItem } from '@/components/ui/bento-grid';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects({ className }: { className?: string }) {
	return (
		<BentoGridItem className={`${className} h-[520px]`}>
			<div className="flex flex-col h-full p-4">
				{/* Background Image */}
				<div className="relative flex-1 overflow-hidden rounded-xl border border-neutral-800">
					<Image
						src="/Iam3.webp"
						alt="Projects background"
						fill
						className="object-cover"
					/>
				</div>

				{/* View All Projects Button */}
				<div className="mt-4">
					<Link
						href="/projects"
						className="flex w-full items-center justify-center px-4 py-3 rounded-xl border border-neutral-800 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all"
					>
						View All Projects →
					</Link>
				</div>
			</div>
		</BentoGridItem>
	);
}

import Link from 'next/link';

export default function NavigationLink({
	className,
	children,
	href,
	target,
}: {
	className?: string;
	children: React.ReactNode;
	href: string;
	target?: string;
}) {
	return (
		<Link
			href={href}
			target={target}
			className={`${className} inline-block text-lg font-bold uppercase leading-[150%] text-white hover:text-primaryBlue md:mx-4 md:text-[14px] md:text-primaryBlack lg:mx-12`}
		>
			{children}
		</Link>
	);
}

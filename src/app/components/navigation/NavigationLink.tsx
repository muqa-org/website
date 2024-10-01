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
			className={`${className} text-primaryBlack hover:text-primaryBlue mx-12 inline-block text-[14px] font-bold uppercase leading-[150%]`}
		>
			{children}
		</Link>
	);
}

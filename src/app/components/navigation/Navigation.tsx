import Link from 'next/link';
import Image from 'next/image';

import Container from '@/app/components/Container';
import NavigationLink from '@/app/components/navigation/NavigationLink';

export const Navigation = () => {
	return (
		<nav className='py-8'>
			<Container>
				<div className='flex items-center justify-between'>
					<Link href='/'>
						<Image src='/images/logo.svg' width={58} height={46} alt='logo' />
					</Link>
					<ul className='flex items-center gap-8 ml-20'>
						<li>
							<NavigationLink href='/'>About</NavigationLink>
						</li>
						<li>
							<NavigationLink href='/'>Blog</NavigationLink>
						</li>
						<li>
							<NavigationLink href='/'>Docs</NavigationLink>
						</li>
					</ul>
					<Link
						href='/#contact'
						className='rounded-md bg-primaryBlue px-10 py-2 text-base leading-normal text-white hover:opacity-85'
					>
						Get Involved
					</Link>
				</div>
			</Container>
		</nav>
	);
};

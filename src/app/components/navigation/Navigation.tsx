import Link from 'next/link';
import Image from 'next/image';

import Container from '@/app/components/Container';
import NavigationLink from '@/app/components/navigation/NavigationLink';

export const Navigation = () => {
	return (
		<nav className='py-4'>
			<Container>
				<div className='flex items-center justify-between'>
					<Link href='/'>
						<Image src='/images/logo.svg' width={58} height={46} alt='logo' />
					</Link>
					<ul className='flex items-center gap-8'>
						<li>
							<NavigationLink href='/'>Home</NavigationLink>
						</li>
						<li>
							<NavigationLink href='/'>About</NavigationLink>
						</li>
						<li>
							<NavigationLink href='/'>Docs</NavigationLink>
						</li>
					</ul>
					<Link
						href='/#contact'
						className='by-primaryBlue rounded-md px-2 py-10 text-base leading-normal text-white'
					>
						Get Involved
					</Link>
				</div>
			</Container>
		</nav>
	);
};

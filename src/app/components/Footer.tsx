import Image from 'next/image';

import Container from '@/app/components/Container';
import Link from 'next/link';

///Users/kkatusic/Downloads/logo-footer.png

export const Footer = () => {
	return (
		<div className='pb-16 pt-24'>
			<Container>
				<div className='flex flex-row flex-wrap items-center justify-between'>
					<div className='flex items-center'>
						<Link href='/'>
							<Image
								src='/images/logo-footer.png'
								width={26}
								height={20}
								alt='MUQA logo footer'
							/>
						</Link>
						<Link
							href='/'
							className='ml-10 text-base font-medium text-primaryBlack hover:text-primaryBlue'
						>
							muqa.org
						</Link>
					</div>
					<ul className='flex items-center mr-10'>
						<li>
							<Link
								href='/'
								className='px-8 text-sm font-bold uppercase text-primaryBlack hover:text-primaryBlue'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/'
								className='px-8 text-sm font-bold uppercase text-primaryBlack hover:text-primaryBlue'
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href='/'
								className='px-8 text-sm font-bold uppercase text-primaryBlack hover:text-primaryBlue'
							>
								Docs
							</Link>
						</li>
					</ul>
					<div className='flex items-center'>
						<Link href='/' className='hover:opacity-85'>
							<Image
								src='/images/icons/icon-telegram.svg'
								width={25}
								height={20}
								alt='Telegram Icon'
							/>
						</Link>
						<Link href='/' className='ml-8 hover:opacity-85'>
							<Image
								src='/images/icons/icon-github.svg'
								width={25}
								height={25}
								alt='Github Icon'
							/>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

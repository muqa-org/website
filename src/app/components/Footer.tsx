import Image from 'next/image';

import Container from '@/app/components/Container';
import Link from 'next/link';

///Users/kkatusic/Downloads/logo-footer.png

export const Footer = () => {
	return (
		<div className='pb-16 pt-6 md:pt-24'>
			<Container>
				<div className='flex flex-row flex-wrap items-center justify-between'>
					<div className='mb-10 flex w-full items-center justify-center md:mb-0 md:w-auto md:justify-start'>
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
					<ul className='flex w-full flex-col items-center md:mr-10 md:w-auto md:flex-row'>
						<li className='mb-4 md:mb-0'>
							<Link
								href='/'
								className='text-sm font-bold uppercase text-primaryBlack hover:text-primaryBlue md:px-8'
							>
								About
							</Link>
						</li>
						<li className='mb-4 md:mb-0'>
							<Link
								href='/'
								className='px-8 text-sm font-bold uppercase text-primaryBlack hover:text-primaryBlue'
							>
								Blog
							</Link>
						</li>
						<li className='mb-4 md:mb-0'>
							<Link
								href='/'
								className='px-8 text-sm font-bold uppercase text-primaryBlack hover:text-primaryBlue'
							>
								Docs
							</Link>
						</li>
					</ul>
					<div className='flex w-full items-center justify-center pt-10 md:w-auto md:justify-start md:pt-0'>
						<Link href='/' className='hover:opacity-85'>
							<Image
								src='/images/icons/icon-telegram.svg'
								width={25}
								height={20}
								alt='Telegram Icon'
							/>
						</Link>
						<Link href='/' className='ml-20 hover:opacity-85 md:ml-8'>
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

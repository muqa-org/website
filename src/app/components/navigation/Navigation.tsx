'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Container from '@/app/components/Container';
import NavigationLinks from '@/app/components/navigation/NavigationLinks';

import icons from '@/app/commons/Icons';
import { contactFormLink, githubLink, telegramLink } from '@/app/config';

export const Navigation = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleInvolvedClick = () => {
		setIsOpen(false);
		router.push(contactFormLink);
	};

	return (
		<nav className='py-8'>
			<Container>
				<div className='flex items-center justify-between'>
					<button className='text-2xl md:hidden' onClick={toggleMenu}>
						<Image
							width='24'
							height='18'
							alt='Menu Icon'
							src={icons.menuIcon}
						/>
					</button>
					<Link href='/' className='hidden md:inline-block'>
						<Image src='/images/logo.svg' width={58} height={46} alt='logo' />
					</Link>
					<div className='ml-20 hidden md:block'>
						<NavigationLinks screen='desktop' />
					</div>
					<Link
						href={contactFormLink}
						className='rounded-md bg-primaryBlue px-10 py-2 text-base leading-normal text-white hover:opacity-85'
					>
						Get Involved
					</Link>
				</div>
			</Container>
			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} absolute left-0 top-0 z-30 h-full w-full md:hidden`}
			>
				<div className='flex h-full w-full'>
					<div className='flex h-full w-3/4 flex-col bg-primaryBlue p-12'>
						<Link
							href='/'
							className='mb-10 block w-[90px] rounded-md bg-white p-4'
						>
							<Image src='/images/logo.svg' width={58} height={46} alt='logo' />
						</Link>
						<NavigationLinks screen='mobile' />
						<div className='mt-12'>
							<button
								onClick={handleInvolvedClick}
								className='rounded-md bg-white px-8 py-3 text-base leading-normal text-black hover:opacity-85'
							>
								Get Involved
							</button>
						</div>
						<div className='mt-auto flex items-center'>
							<Link href={telegramLink} className='hover:opacity-85 mr-12'>
								<Image
									src={icons.telegramWhiteIcon}
									width={25}
									height={19}
									alt='Telegram White Icon'
								/>
							</Link>
							<Link href={githubLink} className='hover:opacity-85'>
								<Image
									src={icons.githubWhiteIcon}
									width={25}
									height={19}
									alt='Github White Icon'
								/>
							</Link>
						</div>
					</div>
					<button
						onClick={toggleMenu}
						className='flex h-full w-1/4 flex-col items-center justify-start bg-black bg-opacity-80 p-7'
					>
						<Image
							width='19'
							height='19'
							alt='Menu Icon'
							src={icons.menuCloseIcon}
						/>
					</button>
				</div>
			</div>
		</nav>
	);
};

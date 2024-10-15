import Image from 'next/image';

import Container from '@/app/components/Container';

export const HomepageHero = () => {
	return (
		<div>
			<Container className='relative'>
				<Image
					src='/images/hero-image.png'
					width={1342}
					height={510}
					alt='hero image'
					className='hidden w-full md:block'
				/>
				<Image
					src='/images/hero-image-mobile.png'
					width={335}
					height={530}
					alt='hero image mobile'
					className='block w-full md:hidden'
				/>
				<div className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6'>
					<Image
						src='/images/logo-white.svg'
						width={145}
						height={99}
						alt='logo white image'
						className='mb-1 hidden md:block lg:mb-14'
					/>
					<Image
						src='/images/logo-white-mobile.svg'
						width={113}
						height={82}
						alt='logo white mobile image'
						className='mb-4 block md:hidden lg:mb-14'
					/>
					<h1 className='mb-4 px-24 text-center text-3xl font-semibold leading-[40px] text-white md:mb-0 md:px-0 md:text-[50px] md:leading-[65px]'>
						Ethereum For The Common Good
					</h1>
					<p className='px-16 text-center text-xl font-normal leading-7 text-white md:px-0 md:text-[32px] md:leading-[48px]'>
						Software for public goods funding, civic engagement,
						<br /> and stronger democracies
					</p>
				</div>
			</Container>
		</div>
	);
};

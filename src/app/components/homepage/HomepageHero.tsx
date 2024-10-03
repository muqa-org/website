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
					className='w-full'
				/>
				<div className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6'>
					<Image
						src='/images/logo-white.svg'
						width={145}
						height={99}
						alt='logo white image'
						className='mb-14'
					/>
					<h1 className='text-[50px] font-semibold leading-[65px] text-white'>
						Ethereum For The Common Good
					</h1>
					<p className='text-center text-[32px] font-normal leading-[48px] text-white'>
						Software for public goods funding, civic engagement,
						<br /> and stronger democracies
					</p>
				</div>
			</Container>
		</div>
	);
};

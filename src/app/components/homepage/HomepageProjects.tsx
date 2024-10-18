'use client';

import Image from 'next/image';

import Container from '@/app/components/Container';
import Link from 'next/link';

export const HomepageProjects = () => {
	return (
		<div className='pb-16 pt-24'>
			<Container className='relative'>
				<h2 className='mb-8 text-center text-3xl font-medium leading-10 text-primaryBlack md:text-4xl'>
					Projects
				</h2>
				<div className='flex flex-wrap items-center justify-between py-12 md:px-8'>
					<div
						id='zazelenimo'
						className='mb-10 flex w-full flex-col rounded-[13px] px-6 py-12 md:px-12 md:py-[60px] lg:mb-0 lg:w-[47%] xl:pr-40 2xl:pr-[22%]'
						style={{
							backgroundImage: 'url(/images/campaigns/zazelenimo-bg.png)',
							backgroundSize: '100% 100%',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}}
					>
						<Image
							src='/images/partners/split-logo.svg'
							width={68}
							height={78}
							alt='Split logo'
							className='mb-6 md:hidden'
						/>
						<h4 className='mb-4 text-[13px] font-bold uppercase text-[#69E39C]'>
							In progress
						</h4>
						<Image
							src='/images/campaigns/zazelenimo-logo.svg'
							width={221}
							height={35}
							alt='Zazelenimo logo'
							className='mb-6'
						/>
						<p className='mb-16 pr-10 text-base text-white'>
							Quadratic funding based participatory budgeting for small scale
							interventions into urban green spaces.
						</p>
						<div className='mt-auto'>
							<Link
								href='https://zazelenimo.com'
								target='_blank'
								className='mr-4 rounded-md bg-white px-5 py-2 text-base text-black hover:opacity-85'
							>
								Visit website
							</Link>
							<Link
								href='https://github.com/muqa-org/demo'
								target='_blank'
								className='rounded-md bg-[#CBE3D6] px-5 py-2 text-base text-black hover:opacity-85'
							>
								Visit Github
							</Link>
						</div>
					</div>
					<div
						id='hnd'
						className='flex h-full w-full flex-col rounded-[13px] bg-white px-6 py-12 drop-shadow-lg md:px-12 md:py-10 md:pr-[22%] lg:w-[47%] 2xl:py-16'
						style={{
							backgroundImage: 'url(/images/campaigns/hnd-bg.svg)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					>
						<Image
							src='/images/partners/hnd-logo.svg'
							width={68}
							height={78}
							alt='HND logo'
							className='mb-6 md:hidden'
						/>
						<h4 className='mb-4 text-[13px] font-bold uppercase text-primaryBlue'>
							UPCOMING
						</h4>
						<Image
							src='/images/campaigns/founding-logo.png'
							width={326}
							height={51}
							alt='Founding Journalism logo'
							className='relative mb-6 ml-[-8px]'
						/>
						<p className='mb-20 pr-10 text-base text-black'>
							Quadratic funding based grant program for good journalism
						</p>
						<div className='mt-auto'>
							<Link
								href='#'
								target='_blank'
								className='mr-4 rounded-md bg-black px-5 py-2 text-base text-white hover:opacity-85'
							>
								Learn more
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

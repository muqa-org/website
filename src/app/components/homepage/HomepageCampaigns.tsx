import Image from 'next/image';

import Container from '@/app/components/Container';
import Link from 'next/link';

export const HomepageCampaigns = () => {
	return (
		<div className='pb-16 pt-24'>
			<Container className='relative'>
				<h2 className='mb-8 text-center text-4xl font-medium leading-10 text-primaryBlack'>
					Campaigns
				</h2>
				<div className='flex items-center justify-between px-8 py-12'>
					<div
						className='flex w-full flex-col rounded-[13px] p-12 pr-[22%] lg:w-[47%]'
						style={{
							backgroundImage: 'url(/images/campaigns/zazelenimo-bg.png)',
							backgroundSize: '100% 100%',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}}
					>
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
						className='flex h-full w-full flex-col rounded-[13px] bg-white p-12 pr-[22%] drop-shadow-lg lg:w-[47%]'
						style={{
							backgroundImage: 'url(/images/campaigns/hnd-bg.svg)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					>
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

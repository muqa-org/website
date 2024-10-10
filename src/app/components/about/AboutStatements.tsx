import Image from 'next/image';

import Container from '@/app/components/Container';

export const AboutStatements = () => {
	return (
		<div className='mt-10'>
			<Container className='relative'>
				<div className='mb:pb-32 rounded-[13px] bg-lightBlue py-20 pb-2 text-center md:py-32'>
					<h2 className='mb-16 text-3xl font-medium leading-normal text-primaryBlack md:mb-24 md:text-4xl'>
						Defining statements
					</h2>
					<div className='flex flex-row flex-wrap justify-center px-2 md:px-10'>
						<div className='mb-20 flex w-full flex-col items-center justify-center gap-2 md:mb-10 md:gap-8 md:px-8 lg:w-1/3'>
							<Image
								src='/images/about/mission.svg'
								width={200}
								height={200}
								alt='Mission image'
							/>
							<h3 className='text-base text-lightBlack'>Mission</h3>
							<p className='text-2xl text-black md:text-[28px] md:leading-[42px]'>
								Onboarding next billion to Ethereum, one city at a time.
							</p>
						</div>
						<div className='mb-20 flex w-full flex-col items-center justify-center gap-2 md:mb-10 md:gap-8 md:px-8 lg:w-1/3'>
							<Image
								src='/images/about/vision.svg'
								width={200}
								height={200}
								alt='Vision image'
							/>
							<h3 className='text-base text-lightBlack'>Vision</h3>
							<p className='text-2xl text-black md:text-[28px] md:leading-[42px]'>
								One billion people improve their communities through Ethereum
							</p>
						</div>
						<div className='mb-20 flex w-full flex-col items-center justify-center gap-2 md:mb-10 md:gap-8 md:px-8 lg:w-1/3'>
							<Image
								src='/images/about/values.svg'
								width={200}
								height={200}
								alt='Values image'
							/>
							<h3 className='text-base text-lightBlack'>Values</h3>
							<p className='text-2xl text-black md:text-[28px] md:leading-[42px]'>
								Sustainability, community, innovation, and collaboration
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

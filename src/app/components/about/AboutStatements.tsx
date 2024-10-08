import Image from 'next/image';

import Container from '@/app/components/Container';

export const AboutStatements = () => {
	return (
		<div className='mt-10'>
			<Container className='relative'>
				<div className='rounded-[13px] bg-lightBlue py-32 text-center'>
					<h2 className='mb-24 text-3xl font-medium leading-normal text-primaryBlack md:text-4xl'>
						Defining statements
					</h2>
					<div className='flex- flex flex-row flex-wrap justify-center px-10'>
						<div className='mb-10 flex w-full flex-col items-center justify-center gap-8 md:mb-0 md:px-8 lg:w-1/3'>
							<Image
								src='/images/about/mission.svg'
								width={200}
								height={200}
								alt='Mission image'
							/>
							<h3 className='text-base text-lightBlack'>Mission</h3>
							<p className='text-[28px] leading-[42px] text-black'>
								Onboarding next billion to Ethereum, one city at a time.
							</p>
						</div>
						<div className='mb-10 flex w-full flex-col items-center justify-center gap-8 md:mb-0 md:px-8 lg:w-1/3'>
							<Image
								src='/images/about/vision.svg'
								width={200}
								height={200}
								alt='Vision image'
							/>
							<h3 className='text-base text-lightBlack'>Vision</h3>
							<p className='text-[28px] leading-[42px] text-black'>
								One billion people improve their communities through Ethereum
							</p>
						</div>
						<div className='flex w-full flex-col items-center justify-center gap-8 md:px-8 lg:w-1/3'>
							<Image
								src='/images/about/values.svg'
								width={200}
								height={200}
								alt='Values image'
							/>
							<h3 className='text-base text-lightBlack'>Values</h3>
							<p className='text-[28px] leading-[42px] text-black'>
								Sustainability, community, innovation, and collaboration
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

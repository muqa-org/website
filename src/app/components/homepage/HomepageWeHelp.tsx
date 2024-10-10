import Image from 'next/image';

import Container from '@/app/components/Container';

export const HomepageWeHelp = () => {
	return (
		<div>
			<Container className='relative'>
				<div className='rounded-[13px] bg-lightBlue py-32 text-center'>
					<h2 className='mb-24 text-3xl font-medium leading-normal text-primaryBlack md:text-4xl'>
						Where do we Help
					</h2>
					<div className='flex- flex flex-row flex-wrap justify-center px-10'>
						<div className='mb-10 flex w-full flex-col items-center justify-center gap-8 md:mb-0 md:px-8 lg:w-1/3'>
							<Image
								src='/images/we-help/grants.svg'
								width={200}
								height={200}
								alt='Grants management image'
							/>
							<h3 className='text-2xl text-black md:text-[28px]'>
								Grants management
							</h3>
							<p className='text-lightBlack'>
								Digitalise and speed up your grant process, decrease
								administrative burden, involve citizens in decision-making,
								increase transparency and accountability of your grant programs.
							</p>
						</div>
						<div className='mb-10 flex w-full flex-col items-center justify-center gap-8 md:mb-0 md:px-8 lg:w-1/3'>
							<Image
								src='/images/we-help/participatory.svg'
								width={200}
								height={200}
								alt='Participatory budgeting image'
							/>
							<h3 className='text-2xl text-black md:text-[28px]'>
								Participatory budgeting
							</h3>
							<p className='text-lightBlack'>
								Increase citizen engagement, streamline proposal design process,
								increase transparency and raise additional funding from citizens
								for your participatory budgeting campaigns.
							</p>
						</div>
						<div className='flex w-full flex-col items-center justify-center gap-8 md:px-8 lg:w-1/3'>
							<Image
								src='/images/we-help/digital.svg'
								width={200}
								height={200}
								alt='Digital democracy image'
							/>
							<h3 className='text-2xl text-black md:text-[28px]'>
								Digital democracy
							</h3>
							<p className='text-lightBlack'>
								Decrease the costs and velocity of democratic elections, create
								democratic communities of various sizes, be flexible in
								decision-making design with our software tools.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

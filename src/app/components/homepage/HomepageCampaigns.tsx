import Image from 'next/image';

import Container from '@/app/components/Container';

export const HomepageCampaigns = () => {
	return (
		<div>
			<Container className='relative'>
				<div className='bg-lightBlue rounded-[13px] py-32 text-center'>
					<h2 className='mb-24 text-4xl font-medium leading-normal text-primaryBlack'>
						Where do we Help
					</h2>
					<div className='flex- flex flex-row flex-wrap justify-center px-10'>
						<div className='flex w-full flex-col items-center justify-center gap-8 px-8 lg:w-1/3'>
							<Image
								src='/images/we-help/grants.svg'
								width={200}
								height={200}
								alt='Grants management image'
							/>
							<h3 className='text-[28px] text-black'>Grants management</h3>
							<p>
								Digitalise and speed up your grant process, decrease
								administrative burden, involve citizens in decision-making,
								increase transparency and accountability of your grant programs.
							</p>
						</div>
						<div className='flex w-full flex-col items-center justify-center gap-8 px-8 lg:w-1/3'>
							<Image
								src='/images/we-help/participatory.svg'
								width={200}
								height={200}
								alt='Participatory budgeting image'
							/>
							<h3 className='text-[28px] text-black'>Participatory budgeting</h3>
							<p>
								Increase citizen engagement, streamline proposal design process,
								increase transparency and raise additional funding from citizens
								for your participatory budgeting campaigns.
							</p>
						</div>
						<div className='flex w-full flex-col items-center justify-center gap-8 px-8 lg:w-1/3'>
							<Image
								src='/images/we-help/digital.svg'
								width={200}
								height={200}
								alt='Digital democracy image'
							/>
							<h3 className='text-[28px] text-black'>Digital democracy</h3>
							<p>
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

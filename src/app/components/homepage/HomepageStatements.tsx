import Image from 'next/image';

import Container from '@/app/components/Container';

export const HomepageStatements = () => {
	return (
		<div className='pb-16 pt-2 md:pt-24'>
			<Container>
				<div className='md:px-16'>
					<h2 className='mb-8 text-center text-3xl font-medium leading-10 text-primaryBlack md:text-4xl'>
						Statements
					</h2>
					<div className='flex flex-wrap justify-between py-12 md:px-8'>
						<div className='flex w-full flex-1 flex-col items-center text-center md:w-[30%]'>
							<Image
								src='/images/statements/ivica.png'
								width={144}
								height={144}
								alt='Ivica Puljak'
								className='mb-10 inline-block'
							/>
							<p className='mb-4 text-xl font-normal leading-normal text-black'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Phasellus auctor turpis at viverra suscipit. Nunc vitae dictum
								urna, et vulputate mauris.
							</p>
							<h3 className='text-base font-normal leading-normal text-[#808080]'>
								Ivica Puljak, Mayor of Split
							</h3>
						</div>
						<div className='w-full text-center md:w-[5%]'>
							<Image
								src='/images/statements/icon-quote.svg'
								width={82}
								height={82}
								alt='Quote icon'
								className='mb:mb-0 mb-9 mt-9 inline-block'
							/>
						</div>
						<div className='flex w-full flex-1 flex-col items-center text-center md:w-[30%]'>
							<Image
								src='/images/statements/audrey.png'
								width={144}
								height={144}
								alt='Audrey Tang'
								className='mb-10 inline-block'
							/>
							<p className='mb-4 text-xl font-normal leading-normal text-black'>
								Suspendisse nec tortor mattis ligula aliquam luctus blandit sed
								nisl. Vivamus tellus quam, malesuada quis eros id, fermentum
								convallis lectus.
							</p>
							<h3 className='text-base font-normal leading-normal text-[#808080]'>
								Audrey Tang, the first digital minister of Taiwan
							</h3>
						</div>
						<div className='w-full text-center md:w-[5%]'>
							<Image
								src='/images/statements/icon-quote.svg'
								width={82}
								height={82}
								alt='Quote icon'
								className='mb:mb-0 mb-9 mt-9 inline-block'
							/>
						</div>
						<div className='flex w-[30%] flex-1 flex-col items-center text-center'>
							<Image
								src='/images/statements/glen.png'
								width={144}
								height={144}
								alt='Glen Weyl'
								className='mb-10 inline-block'
							/>
							<p className='mb-4 text-xl font-normal leading-normal text-black'>
								Nunc placerat libero ut lacus pellentesque, quis consectetur
								nisi rhoncus.
							</p>
							<h3 className='text-base font-normal leading-normal text-[#808080]'>
								Glen Weyl, co-author of Plurality book and Quadratic funding
							</h3>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

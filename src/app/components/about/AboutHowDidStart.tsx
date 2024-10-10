import Container from '@/app/components/Container';

export const AboutHowDidStart = () => {
	return (
		<div>
			<Container className='relative'>
				<div className='flex flex-wrap justify-between'>
					<div className='w-full md:w-[47%]'>
						<h3 className='mb-5 text-2xl font-medium text-primaryBlack'>
							How did Muqa start?
						</h3>
						<p className='mb-9 text-xl text-lightBlack'>
							Muqa started as an idea to try running Quadratic funding campaign
							for public goods in City of Split, Croatia. The idea was first
							approved by Ivica Puljak, major of Split, and then incubated by
							Funding the Commons. We continued working on the project, mostly
							focusing on research, design and communication with key city
							officials. Project was then selected by Ethereum Foundation to be
							included in the Next Billion Fellowship program in 2024.
						</p>
						<h3 className='mb-5 text-2xl font-medium text-primaryBlack'>
							Where are we now?
						</h3>
						<p className='text-xl text-lightBlack'>
							We are now in process of building our app for the pilot in City of
							Split. The first campaign will run in Q3 of 2024. You can track
							our progress in our blog, newsletter and github.
						</p>
					</div>
					<div className='mb-5 w-full md:mb-0 md:w-[47%]'>
						<h3 className='mb-5 text-2xl font-medium text-primaryBlack'>
							What are our future plans?
						</h3>
						<p className='text-xl text-lightBlack'>
							Although we started as project focused on trying out QF in real
							life, and generally public goods funding, our plans for future
							have evolved beyond that. In our customer research we have
							realised that there are various other ways cities and citizens
							could use Ethereum for their benefit. There are numerous fully
							functional and mature Ethereum protocols and applications which
							could be already be useful to cities.
						</p>
						<p className='text-xl text-lightBlack'>
							This is why, our plan has shifted to a broader purpose of
							onboarding cities to Ethereum. We are building an application that
							will make it easy for cities to utilise Ethereum in different
							ways. We are starting with public goods funding, continuing with
							digital democracy and citizen participation and exploring
							possibilities of introducing solutions for identity, ownership,
							auctions, tenders, and other.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

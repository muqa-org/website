import Image from 'next/image';

import Container from '@/app/components/Container';

export const HomepageTogether = () => {
	return (
		<div className='my-24 text-center'>
			<Container className='relative'>
				<h2 className='text-3xl md:text-4xl font-medium leading-10 text-primaryBlack'>
					Together With
				</h2>
				<div className='flex flex-row flex-wrap items-center justify-center gap-0 py-12 md:gap-10'>
					<div className='mb-6 w-1/2 text-center md:mb-0 md:w-auto'>
						<Image
							src='/images/partners/ef-logo.svg'
							width={165}
							height={88}
							alt='Etherium Foundation logo'
							className='inline-block'
						/>
					</div>
					<div className='mb-6 w-1/2 text-center md:mb-0 md:w-auto'>
						<Image
							src='/images/partners/hnd-logo.svg'
							width={82}
							height={82}
							alt='Hrvatsko novinarsko društvo logo'
							className='inline-block'
						/>
					</div>
					<div className='mb-6 w-1/2 text-center md:mb-0 md:w-auto'>
						<Image
							src='/images/partners/split-logo.svg'
							width={68}
							height={78}
							alt='Grad Split logo'
							className='inline-block'
						/>
					</div>
					<div className='mb-6 w-1/2 text-center md:mb-0 md:w-auto'>
						<Image
							src='/images/partners/undp-logo.svg'
							width={42}
							height={90}
							alt='UNDP logo'
							className='inline-block'
						/>
					</div>
					<div className='mb-6 w-1/2 text-center md:mb-0 md:w-auto'>
						<Image
							src='/images/partners/gitcoin-logo.svg'
							width={146}
							height={109}
							alt='Gitcoin logo'
							className='inline-block'
						/>
					</div>
					<div className='mb-6 w-1/2 text-center md:mb-0 md:w-auto'>
						<Image
							src='/images/partners/cometh-logo.svg'
							width={141}
							height={50}
							alt='Cometh logo'
							className='inline-block'
						/>
					</div>
					<div className='mb-6 w-1/2 text-center md:mb-0 md:w-auto'>
						<Image
							src='/images/partners/commons-logo.svg'
							width={160}
							height={54}
							alt='Funding the Commons logo'
							className='inline-block'
						/>
					</div>
					<div className='mb-6 w-1/2 text-center md:mb-0 md:w-auto'>
						<Image
							src='/images/partners/blocksplit-logo.svg'
							width={149}
							height={34}
							alt='BlockSplit logo'
							className='inline-block'
						/>
					</div>
				</div>
				<p className='text-xl font-normal leading-8 text-lightBlack md:text-[32px] md:leading-[48px]'>
					we bridge the gap between local needs and Ethereum based
					<br /> solutions, empower local communities to take action and use
					<br /> Ethereum for their common good.
				</p>
			</Container>
		</div>
	);
};

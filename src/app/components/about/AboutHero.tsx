import Container from '@/app/components/Container';

export const AboutHero = () => {
	return (
		<div>
			<Container className='relative'>
				<div className='flex flex-col items-center justify-center gap-10 rounded-[13px] border-2 border-primaryBlue px-10 py-20 text-center md:py-32 xl:px-16'>
					<h2 className='text-xl text-secondBlue md:text-[32px] md:leading-[48px]'>
						What is Muqa?
					</h2>
					<h1 className='px-2 text-3xl font-semibold text-secondBlue md:px-10 md:text-[50px] md:leading-[65px] xl:px-40'>
						Muqa is a public good that enables
						<br className='hidden md:inline-block' /> cities to use Ethereum to
						empower
						<br className='hidden md:inline-block' />
						and engage their citizens.
					</h1>
				</div>
			</Container>
		</div>
	);
};

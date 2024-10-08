import Container from '@/app/components/Container';

export const AboutHero = () => {
	return (
		<div>
			<Container className='relative'>
				<div className='flex flex-col items-center justify-center gap-10 rounded-[13px] border-2 border-primaryBlue px-16 py-32 text-center'>
					<h2 className='text-[32px] leading-[48px] text-secondBlue'>
						What is Muqa?
					</h2>
					<h1 className='px-40 text-[50px] font-semibold leading-[65px] text-secondBlue'>
						Muqa is a public good that enables
						<br /> cities to use Ethereum to empower
						<br />
						and engage their citizens.
					</h1>
				</div>
			</Container>
		</div>
	);
};

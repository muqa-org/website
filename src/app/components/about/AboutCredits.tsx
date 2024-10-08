import Container from '@/app/components/Container';
import Link from 'next/link';

export const AboutCredits = () => {
	return (
		<div className='mb-20 mt-20 md:mb-40 md:mt-52'>
			<Container className='relative'>
				<h3 className='mb-5 text-2xl font-medium text-primaryBlack'>
					Website credits
				</h3>
				<div className='mb-9 text-xl text-lightBlack'>
					Video:{' '}
					<Link href='/' target='_blank'>
						Timelapse of people in public park
					</Link>{' '}
					<br />
					Icons:{' '}
					<Link href='/' target='_blank'>
						New York
					</Link>
				</div>
			</Container>
		</div>
	);
};

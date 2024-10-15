import Link from 'next/link';
import Image from 'next/image';

import Container from '@/app/components/Container';
import icons from '@/app/commons/Icons';

export const AboutTeam = () => {
	return (
		<div className='py-24'>
			<Container className='relative'>
				<h2 className='mb-24 text-center text-3xl font-medium leading-normal text-primaryBlack md:text-4xl'>
					Team
				</h2>
				<div className='flex flex-row flex-wrap items-center justify-between xl:px-40'>
					<div className='mb-28 flex w-full flex-col items-center justify-center md:w-auto'>
						<Image
							src='/images/about/tomislav.png'
							width={144}
							height={144}
							alt='Tomislav Mamić image'
							className='mb-8'
						/>
						<h3 className='mb-2 text-xl text-black'>Tomislav Mamić</h3>
						<h4 className='mb-7 text-base text-lightBlack'>Founder</h4>
						<div className='flex w-full items-center justify-center pt-0 md:w-auto md:justify-start md:pt-10'>
							<Link
								href='https://x.com/tomislavmamic'
								className='hover:opacity-85'
								target='_blank'
							>
								<Image
									src={icons.twitterIcon}
									width={20}
									height={18}
									alt='Twitter Icon'
								/>
							</Link>
							<Link
								href='https://github.com/tomislavmamic'
								className='ml-4 hover:opacity-85 md:ml-8'
								target='_blank'
							>
								<Image
									src={icons.githubIcon}
									width={20}
									height={19}
									alt='Github Icon'
								/>
							</Link>
						</div>
					</div>
					<div className='mb-28 flex w-full flex-col items-center justify-center md:w-auto'>
						<Image
							src='/images/about/ante.png'
							width={144}
							height={144}
							alt='Ante Borzić image'
							className='mb-8'
						/>
						<h3 className='mb-2 text-xl text-black'>Ante Borzić</h3>
						<h4 className='mb-7 text-base text-lightBlack'>Lead engineer</h4>
						<div className='flex w-full items-center justify-center pt-0 md:w-auto md:justify-start md:pt-10'>
							<Link
								href='https://github.com/b0rza'
								className='hover:opacity-85 md:ml-8'
								target='_blank'
							>
								<Image
									src={icons.linkedInIcon}
									width={22}
									height={22}
									alt='LinkedIn Icon'
								/>
							</Link>
							<Link
								href='https://github.com/b0rza'
								className='ml-4 hover:opacity-85 md:ml-8'
								target='_blank'
							>
								<Image
									src={icons.githubIcon}
									width={20}
									height={19}
									alt='Github Icon'
								/>
							</Link>
						</div>
					</div>
					<div className='mb-28 flex w-full flex-col items-center justify-center md:w-auto'>
						<Image
							src='/images/about/max.png'
							width={144}
							height={144}
							alt='Max Semechuk image'
							className='mb-8'
						/>
						<h3 className='mb-2 text-xl text-black'>Max Semenchuk</h3>
						<h4 className='mb-7 text-base text-lightBlack'>Product Design</h4>
						<div className='flex w-full items-center justify-center pt-0 md:w-auto md:justify-start md:pt-10'>
							<Link
								href='https://x.com/maxsemenchuk'
								className='hover:opacity-85'
								target='_blank'
							>
								<Image
									src={icons.twitterIcon}
									width={20}
									height={18}
									alt='Twitter Icon'
								/>
							</Link>
							<Link
								href='https://github.com/MaxSemenchuk'
								className='ml-4 hover:opacity-85 md:ml-8'
								target='_blank'
							>
								<Image
									src={icons.githubIcon}
									width={20}
									height={19}
									alt='Github Icon'
								/>
							</Link>
						</div>
					</div>
					<div className='mb-28 flex w-full flex-col items-center justify-center md:w-auto'>
						<Image
							src='/images/about/kresimir.png'
							width={144}
							height={144}
							alt='Krešimir Katušić image'
							className='mb-8'
						/>
						<h3 className='mb-2 text-xl text-black'>Krešimir Katušić</h3>
						<h4 className='mb-7 text-base text-lightBlack'>
							Frontend developer
						</h4>
						<div className='flex w-full items-center justify-center pt-0 md:w-auto md:justify-start md:pt-10'>
							<Link
								href='https://x.com/Katusic'
								className='hover:opacity-85'
								target='_blank'
							>
								<Image
									src={icons.twitterIcon}
									width={20}
									height={18}
									alt='Twitter Icon'
								/>
							</Link>
							<Link
								href='https://github.com/kkatusic'
								className='ml-4 hover:opacity-85 md:ml-8'
								target='_blank'
							>
								<Image
									src={icons.githubIcon}
									width={20}
									height={19}
									alt='Github Icon'
								/>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

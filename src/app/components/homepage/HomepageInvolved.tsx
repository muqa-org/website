'use client';

import { useFormState } from 'react-dom';

import { involvedAction } from '@/app/actions';

import Container from '@/app/components/Container';
import InvolvedFormButton from './InvolvedFormButton';

type MessageType = {
	key: string;
	notice: string;
};

const getErrorMessage = (
	messages: MessageType[] | string[],
	key: string,
): string | null => {
	const message = (messages as MessageType[]).find(msg => msg.key === key);
	return message ? message.notice : null;
};

export const HomepageInvolved = () => {
	const [state, formAction] = useFormState(involvedAction, {
		message: [],
		status: false,
	});

	return (
		<div className='pb-16 pt-10'>
			<Container>
				<div className='px-8'>
					<h2 className='mb-20 text-center text-4xl font-medium leading-10 text-primaryBlack'>
						Get Involved
					</h2>
					<div className='relative rounded-[13px] rounded-bl-none bg-[#E8F7FB] px-10 py-9'>
						<form
							action={formAction}
							className='flex flex-row flex-wrap justify-between'
						>
							<div className='w-[48%]'>
								<textarea
									className='h-36 w-full rounded-md bg-white p-4 text-base text-black placeholder-gray-600'
									placeholder='Leave us a message'
								></textarea>
							</div>
							<div className='flex w-[48%] flex-col'>
								<input
									className='w-full rounded-md bg-white p-4 text-base text-black placeholder-gray-600'
									placeholder='Email'
								/>
								<input
									className='mt-auto w-full rounded-md bg-white p-4 text-base text-black placeholder-gray-600'
									placeholder='Name'
								/>
							</div>
							<div className='w-full pt-8 pl-4'>
								<InvolvedFormButton />
								{!state.status && state.message.length > 0 && (
									<div className='mt-3 block rounded-lg bg-red-500 p-4 text-white'>
										ERROR
									</div>
								)}
							</div>
						</form>
						<div
							className='absolute bottom-[-30px] left-0 h-20 w-20'
							style={{
								backgroundImage: 'url(/images/down-mark.svg)',
								backgroundPosition: 'bottom left',
								backgroundRepeat: 'no-repeat',
							}}
						></div>
					</div>
				</div>
			</Container>
		</div>
	);
};

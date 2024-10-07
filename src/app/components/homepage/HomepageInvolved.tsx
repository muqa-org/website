'use client';

import { useFormState } from 'react-dom';

import { involvedAction } from '@/app/actions';

import Container from '@/app/components/Container';
import InvolvedFormButton from './InvolvedFormButton';
import { useEffect, useRef, useState } from 'react';

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
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const formRef = useRef<HTMLFormElement>(null); // To reset the form

	useEffect(() => {
		if (state.status && state.message.find(msg => msg.key === 'success')) {
			setSuccessMessage('Mail sent successfully');
			// Reset form after success
			formRef.current?.reset();
		}
	}, [state]);

	return (
		<div className='pb-16 pt-10'>
			<Container>
				<div className='px-8'>
					<h2 className='mb-20 text-center text-4xl font-medium leading-10 text-primaryBlack'>
						Get Involved
					</h2>
					<div className='relative rounded-[13px] rounded-bl-none bg-[#E8F7FB] px-10 py-9'>
						{/* Success message */}
						{successMessage && (
							<div className='mb-4 text-center text-green-500'>
								{successMessage}
							</div>
						)}
						<form
							ref={formRef}
							action={formAction}
							className='flex flex-row flex-wrap justify-between'
						>
							<div className='w-[48%]'>
								<textarea
									id='mail-message'
									name='mail-message'
									className='h-36 w-full rounded-md bg-white p-4 text-base text-black placeholder-gray-600'
									placeholder='Leave us a message'
								></textarea>
								{getErrorMessage(state.message, 'mailMessage') && (
									<div className='mx-auto mt-1 max-w-2xl text-red-500'>
										{getErrorMessage(state.message, 'mailMessage')}
									</div>
								)}
							</div>
							<div className='flex w-[48%] flex-col'>
								<input
									id='email'
									name='email'
									className='w-full rounded-md bg-white p-4 text-base text-black placeholder-gray-600'
									placeholder='Email'
								/>
								{getErrorMessage(state.message, 'email') && (
									<div className='mx-auto mt-1 max-w-2xl text-red-500'>
										{getErrorMessage(state.message, 'email')}
									</div>
								)}
								<input
									id='name'
									name='name'
									className='mt-auto w-full rounded-md bg-white p-4 text-base text-black placeholder-gray-600'
									placeholder='Name'
								/>
								{getErrorMessage(state.message, 'name') && (
									<div className='mx-auto mt-1 max-w-2xl text-red-500'>
										{getErrorMessage(state.message, 'mailMessage')}
									</div>
								)}
							</div>
							<div className='w-full pl-4 pt-8'>
								<InvolvedFormButton />
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

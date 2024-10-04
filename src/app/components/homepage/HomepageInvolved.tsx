'use client';

import { useFormState } from 'react-dom';

import Container from '@/app/components/Container';

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
				<div className='px-16'>
					<h2 className='mb-8 text-center text-4xl font-medium leading-10 text-primaryBlack'>
						Get Involved
					</h2>
					<div className='flex justify-between px-8 py-12'>fsdfds</div>
				</div>
			</Container>
		</div>
	);
};

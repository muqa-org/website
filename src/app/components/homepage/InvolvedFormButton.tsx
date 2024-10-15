'use client';

import { useFormStatus } from 'react-dom';

const InvolvedFormButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type='submit'
			disabled={pending}
			className='rounded-md bg-[#44A2FF] px-5 py-2 text-base text-white hover:opacity-85'
		>
			{pending ? 'Sending...' : 'Send'}
		</button>
	);
};

export default InvolvedFormButton;

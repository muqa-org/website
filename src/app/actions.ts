'use server';

import { sendMail } from '@/app/helpers/mailHelpers';

type MessageType = {
	key: string;
	notice: string;
};

export async function involvedAction(
	prevState: { status: boolean; message: MessageType[] | string[] },
	formData: FormData,
) {
	const mailMessage = formData.get('mail-message')?.toString().trim();
	const email = formData.get('email')?.toString().trim() ?? '';
	const name = formData.get('name')?.toString().trim() ?? '';

	// Validate each field and accumulate errors
	const errors: MessageType[] = [];

	if (!mailMessage || mailMessage.length < 10) {
		errors.push({ key: 'mailMessage', notice: 'Mail message is required' });
	}

	if (!name || name.length < 2) {
		errors.push({ key: 'name', notice: 'Name is required' });
	}

	if (!email || !email.includes('@')) {
		errors.push({ key: 'email', notice: 'Email is required' });
	}

	// If there are any errors, return them
	if (errors.length > 0) {
		return {
			status: false,
			message: errors,
		};
	}

	const sendMailData = sendMail({
		from: 'MUQA <postmaster@email.muqa.org>',
		to: process.env.MAILGUN_TO_EMAIL || '',
		subject: 'Message from MUQA',
		html: `
		<p>Name: ${name}</p>
		<p>Email: ${email}</p>
		<p>${mailMessage}</p>
		`,
	});

	console.log({ sendMailData });

	if (!sendMailData) {
		return {
			status: false,
			message: [
				{
					key: 'error',
					notice: 'Error sending mail',
				},
			],
		};
	} else {
		return {
			status: true,
			message: [
				{
					key: 'success',
					notice: 'Mail sent',
				},
			],
		};
	}
}

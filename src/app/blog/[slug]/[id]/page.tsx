'use client';

import { notFound } from 'next/navigation';
import { useQuery } from 'react-query';

async function fetchPageDetails(id: string) {
	const res = await fetch(`/api/get-application-forms/${id}`);
	return res.json();
}

export default function BlogPost({
	params,
}: {
	params: { slug: string; id: string };
}) {
	const id = params.id; // Get the dynamic id from the URL

	console.log(id);

	const { data, error, isLoading } = useQuery(
		['applicationForm', id],
		() => fetchPageDetails(id),
		{ enabled: !!id },
	);

	if (isLoading) {
		return (
			<div className='flex h-96 w-full flex-row items-center justify-center'>
				Loading...
			</div>
		);
	}

	if (error) {
		const errorMessage = (error as Error).message;
		console.log(errorMessage);
		notFound();
		return null;
	}

	console.log(data);

	return <div></div>;
}

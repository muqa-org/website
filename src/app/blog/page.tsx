'use client';

import React from 'react';
import { useQuery } from 'react-query';

async function fetchApplicationForms() {
	const res = await fetch('/api/get-application-forms');
	if (!res.ok) {
		throw new Error('Failed to fetch application forms');
	}
	return res.json();
}

export default function Blog() {
	const { data, error, isLoading } = useQuery<
		{
			/* specify the structure of your data here */
		},
		Error
	>('applicationForms', fetchApplicationForms);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			{data?.results?.map(result => (
				<div key={result.id}>
					<h2>{result.properties.Name.title[0].plain_text}</h2>
				</div>
			))}
		</>
	);
}

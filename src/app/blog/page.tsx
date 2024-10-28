'use client';

import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import { generateSlug } from '@/app/helpers/commons';
import Container from '@/app/components/Container';

async function fetchApplicationForms() {
	const res = await fetch('/api/get-application-forms');
	if (!res.ok) {
		throw new Error('Failed to fetch application forms');
	}
	return res.json();
}

export default function Blog() {
	const { data, error, isLoading } = useQuery(
		'applicationForms',
		fetchApplicationForms,
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		const errorMessage = (error as Error).message;
		console.log(errorMessage);
	}

	console.log(data);

	return (
		<Container>
			<h1 className='text-3xl font-medium leading-10 text-primaryBlack md:text-4xl text-center my-12'>
				Blog
			</h1>
			<div className='flex flex-wrap justify-between'>
				{data?.results?.map(result => (
					<div key={result.id} className='w-1/3'>
						<img src={result.cover?.file?.url} alt='' />
						<h2>{result.properties.Name.title[0].plain_text}</h2>
						<Link
							href={`/blog/${generateSlug(result.properties.Name.title[0].plain_text)}/${result.id}`}
						>
							View Details
						</Link>
					</div>
				))}
			</div>
		</Container>
	);
}

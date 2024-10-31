'use client';

import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { generateSlug } from '@/app/helpers/commons';
import Container from '@/app/components/Container';

async function fetchApplicationForms() {
	const res = await fetch('/api/get-application-forms');
	if (!res.ok) {
		throw new Error('Failed to fetch application forms');
	}
	return res.json();
}

interface Result {
	id: string;
	cover?: {
		file?: {
			url: string;
		};
	};
	properties: {
		Name: {
			title: {
				plain_text: string;
			}[];
		};
	};
}

export default function Blog() {
	const { data, error, isLoading } = useQuery(
		'applicationForms',
		fetchApplicationForms,
	);

	if (isLoading) {
		return (
			<div className='flex h-96 w-full flex-row items-center justify-center'>
				<span>Loading...</span>
			</div>
		);
	}

	if (error) {
		const errorMessage = (error as Error).message;
		console.error(errorMessage);

		notFound();
	}

	return (
		<Container>
			<h1 className='my-12 text-center text-3xl font-medium leading-10 text-primaryBlack md:text-4xl'>
				Blog
			</h1>
			<div className='flex flex-wrap justify-between'>
				{data?.results?.map((result: Result) => (
					<div key={result.id} className='w-full p-4 md:w-1/3'>
						{result.cover?.file?.url && (
							<Link
								href={`/blog/${generateSlug(result.properties.Name.title[0].plain_text)}/${result.id}`}
								className='hover:opacity-85'
							>
								<Image
									src={result.cover?.file?.url}
									alt=''
									width={450}
									height={270}
									className='mb-3 h-[270px] rounded-md object-cover'
								/>
							</Link>
						)}
						<h2 className='text-center text-xl text-black md:text-[20px]'>
							<Link
								href={`/blog/${generateSlug(result.properties.Name.title[0].plain_text)}/${result.id}`}
								className='hover:opacity-85'
							>
								{result.properties.Name.title[0].plain_text}
							</Link>
						</h2>
					</div>
				))}
			</div>
		</Container>
	);
}

'use client';

import { notFound } from 'next/navigation';
import { useQuery } from 'react-query';

import Container from '@/app/components/Container';

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
		console.error(errorMessage);
		notFound();
		return null;
	}

	console.log(data);
	console.log(data.pageBlocks);

	return (
		<Container>
			{data.pageData.properties && (
				<h1 className='my-12 text-center text-3xl font-medium leading-10 text-primaryBlack md:text-4xl'>
					{data.pageData.properties.Name.title[0].plain_text}
				</h1>
			)}
			{data.pageData.properties.Date && (
				<h4 className='my-12 text-center text-3xl font-medium leading-10 text-primaryBlack md:text-4xl'>
					{data.pageData.properties.Date.formula.string}
				</h4>
			)}
			{data.pageBlocks &&
				data.pageBlocks?.results.map(result => (
					<div key={result.id} className='mx-12'>
						{result.type === 'heading_1' && (
							<h2 className='text-2xl font-bold'>
								{result.heading_1.rich_text[0].text.content}
							</h2>
						)}
						{result.type === 'heading_2' && (
							<h3 className='text-xl font-bold'>
								{result.heading_2.rich_text[0].text.content}
							</h3>
						)}
						{result.type === 'paragraph' &&
						result.paragraph.rich_text.length > 1 ? (
							<div className='flex space-x-4'>
								{result.paragraph.rich_text.map((text, idx) => (
									<div key={idx} className='text-base'>
										{text.text.content}
									</div>
								))}
							</div>
						) : (
							result.type === 'paragraph' && (
								<p className='text-base'>
									{result.paragraph.rich_text[0]?.text?.content}
								</p>
							)
						)}
					</div>
				))}
		</Container>
	);
}

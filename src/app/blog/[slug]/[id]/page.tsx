'use client';

import { notFound } from 'next/navigation';
import { useQuery } from 'react-query';
import Image from 'next/image';

import Container from '@/app/components/Container';
import RenderNotionTableList from '@/app/components/notionRenders/RenderNotionTableList';

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
		<>
			{data.pageData.cover?.file?.url && (
				<Image
					src={data.pageData.cover?.file?.url}
					alt=''
					width={1650}
					height={370}
					className='mb-6 h-[470px] w-full rounded-md object-cover'
				/>
			)}
			<Container>
				{data.pageData.properties && (
					<h1 className='mb-6 mt-12 text-center text-3xl font-medium leading-10 text-primaryBlack md:text-4xl'>
						{data.pageData.properties.Name.title[0].plain_text}
					</h1>
				)}
				{data.pageData.properties.Date && (
					<h4 className='mb-12 text-center text-xl font-medium leading-10 text-primaryBlack md:text-xl'>
						{data.pageData.properties.Date.formula.string}
					</h4>
				)}
				<div className='md:mx-12'>
					{data.pageBlocks &&
						data.pageBlocks?.results.map(result => (
							<div
								key={result.id}
								className={`${result.type === 'paragraph' ? 'mb-0' : 'mb-6'}`}
							>
								{result.type === 'heading_1' && (
									<h2 className='mt-6 text-3xl font-bold'>
										{result.heading_1.rich_text[0].text.content}
									</h2>
								)}
								{result.type === 'heading_2' && (
									<h3 className='mt-6 text-xl font-bold'>
										{result.heading_2.rich_text[0].text.content}
									</h3>
								)}
								{result.type === 'paragraph' &&
								result.paragraph.rich_text.length > 1 ? (
									<div className='mb-2'>
										{result.paragraph.rich_text.map((text, idx) => (
											<span
												key={idx}
												className={`text-base ${text.annotations.bold ? 'font-bold' : ''}`}
											>
												{text.text && text.text.link ? (
													<a
														href={text.text.link.url}
														target='_blank'
														rel='noopener noreferrer'
														className='text-blue-500 underline'
													>
														{text.text.content}
													</a>
												) : (
													<span>{text.text?.content}</span>
												)}
											</span>
										))}
									</div>
								) : (
									result.type === 'paragraph' && (
										<p className='mb-3 text-base'>
											{result.paragraph.rich_text[0]?.text?.content}
										</p>
									)
								)}
								{result.type === 'image' && (
									<div className='mt-4'>
										<Image
											src={result.image.file.url}
											alt=''
											width={1300}
											height={370}
											className='he-full w-full rounded-md'
										/>
									</div>
								)}
								{result.type === 'child_database' &&
									result.child_database_data &&
									result.child_database_data.object === 'list' && (
										<RenderNotionTableList
											tableData={result.child_database_data.results}
										/>
									)}
							</div>
						))}
				</div>
			</Container>
		</>
	);
}

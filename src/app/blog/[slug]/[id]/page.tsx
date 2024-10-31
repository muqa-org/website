'use client';

import { notFound } from 'next/navigation';
import { useQuery } from 'react-query';
import Image from 'next/image';

import Container from '@/app/components/Container';
import RenderNotionTableList from '@/app/components/notionRenders/RenderNotionTableList';
import RenderNotionHeading1 from '@/app/components/notionRenders/RenderNotionHeading1';
import RenderNotionHeading2 from '@/app/components/notionRenders/RenderNotionHeading2';
import RenderNotionHeading3 from '@/app/components/notionRenders/RenderNotionHeading3';
import RenderNotionParagraphs from '@/app/components/notionRenders/RenderNotionParagraphs';
import RenderNotionParagraph from '@/app/components/notionRenders/RenderNotionParagraph';
import RenderNotionImage from '@/app/components/notionRenders/RenderNotionImage';

async function fetchPageDetails(id: string) {
	const res = await fetch(`/api/get-application-forms/${id}`);
	return res.json();
}

interface Result {
	id: string;
	type: string;
	heading_1?: { rich_text: { text: { content: string } }[] };
	heading_2?: { rich_text: { text: { content: string } }[] };
	heading_3?: { rich_text: { text: { content: string } }[] };
	paragraph?: {
		rich_text: {
			text: {
				content: string;
				link?: {
					url: string;
				};
			};
			annotations: {
				bold: boolean;
			};
		}[];
	};
	image?: { file: { url: string } };
	child_database_data?: { object: string; results: Result[] };
	properties?: {
		[key: string]: {
			title: Array<{
				plain_text: string;
			}>;
		};
	};
}

export default function BlogPost({
	params,
}: {
	params: { slug: string; id: string };
}) {
	const id = params.id;

	const { data, error, isLoading } = useQuery(
		['applicationForm', id],
		() => fetchPageDetails(id),
		{ enabled: !!id },
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
						data.pageBlocks?.results.map((result: Result) => (
							<div
								key={result.id}
								className={`${result.type === 'paragraph' ? 'mb-0' : 'mb-6'}`}
							>
								{result.type === 'heading_1' && (
									<RenderNotionHeading1
										heading={
											result.heading_1?.rich_text[0]?.text?.content || ''
										}
									/>
								)}
								{result.type === 'heading_2' && (
									<RenderNotionHeading2
										heading={
											result.heading_1?.rich_text[0]?.text?.content || ''
										}
									/>
								)}
								{result.type === 'heading_3' && (
									<RenderNotionHeading3
										heading={
											result.heading_1?.rich_text[0]?.text?.content || ''
										}
									/>
								)}
								{result.type === 'paragraph' &&
								result.paragraph &&
								result.paragraph.rich_text?.length > 1 ? (
									<RenderNotionParagraphs
										paragraphs={result.paragraph.rich_text}
									/>
								) : (
									result.type === 'paragraph' && (
										<RenderNotionParagraph
											paragraph={
												result.paragraph?.rich_text[0]?.text?.content || ''
											}
										/>
									)
								)}
								{result.type === 'image' && (
									<RenderNotionImage imageUrl={result.image?.file.url || ''} />
								)}
								{result.type === 'child_database' &&
									result.child_database_data &&
									result.child_database_data.object === 'list' && (
										<RenderNotionTableList
											tableData={{
												results: result.child_database_data.results.map(r => ({
													...r,
													properties: r.properties || {},
												})),
											}}
										/>
									)}
							</div>
						))}
				</div>
			</Container>
		</>
	);
}

import { type NextRequest } from 'next/server';

import {
	fetchApplicationFormsPageData,
	fetchAllPageBlocks,
} from '@/app/helpers/notionHelper';

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;

	try {
		// Fetch page data (e.g., properties like title, group, etc.)
		const pageData = await fetchApplicationFormsPageData(id);

		console.log('Page data');
		console.log({ pageData });

		// Fetch all blocks (content) of the page
		const pageBlocks = await fetchAllPageBlocks(id);

		// Combine both page data and blocks into one object
		const combinedData = {
			pageData, // Contains page-level information like title, properties, etc.
			pageBlocks, // Contains all the blocks (paragraphs, headings, lists, etc.)
		};

		// Return the combined data in the response
		return new Response(JSON.stringify(combinedData), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error fetching page data or blocks:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	// try {
	// 	const data = await fetchApplicationFormsPageData(id);
	// 	return Response.json(data, {
	// 		status: 200,
	// 	});
	// } catch (error) {
	// 	return new Response(error, {
	// 		status: 500,
	// 	});
	// }
}

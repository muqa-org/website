import { type NextRequest } from 'next/server';

import {
	fetchApplicationFormsPageData,
	fetchAllPageBlocks,
	fetchApplicationFormsData,
} from '@/app/helpers/notionHelper';

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;

	try {
		// First fetch page data
		const pageData = await fetchApplicationFormsPageData(id);

		// Fetch all blocks (content) of the page
		const pageBlocks = await fetchAllPageBlocks(id);

		// Check if block contains a child database
		for (const block of pageBlocks.results) {
			if (block && block.type === 'child_database') {
				if (block.id) {
					block.child_database_data = await fetchApplicationFormsData(block.id);
				}
			}
		}

		// Combine both page data and blocks into one object
		const combinedData = {
			pageData,
			pageBlocks,
		};

		// Return the combined data in the response
		return new Response(JSON.stringify(combinedData), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error fetching page data or blocks:', error);
		return new Response(
			JSON.stringify({
				error: 'Failed to fetch data for page and page blocks from Notion',
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			},
		);
	}
}

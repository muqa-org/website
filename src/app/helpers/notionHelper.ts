import { notionAPIURL } from '@/app/config';

export async function fetchApplicationFormsData() {
	const res = await fetch(
		`${notionAPIURL}databases/8d0caefe-0d09-4ef7-b1a3-d0bd5bbde4f4/query`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
				'Notion-Version': '2022-06-28',
				'Content-Type': 'application/json',
			},
		},
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data from Notion');
	}

	return res.json();
}

export async function fetchApplicationFormsPageData(id: string) {
	console.log({ id });
	const res = await fetch(`${notionAPIURL}pages/${id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
			'Notion-Version': '2022-06-28',
			'Content-Type': 'application/json',
		},
	});

	console.log(res);

	if (!res.ok) {
		throw new Error('Failed to fetch data from Notion');
	}

	return res.json();
}

export async function fetchAllPageBlocks(pageId: string) {
	let blocks = [];
	let cursor: string | null = null;
	let hasMore = true;

	while (hasMore) {
		const res = await fetch(
			// `${notionAPIURL}/v1/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`,
			`${notionAPIURL}/v1/blocks/${pageId}/children?page_size=100`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
					'Notion-Version': '2022-06-28',
					'Content-Type': 'application/json',
				},
			},
		);

		const result = await res.json();

		if (!res.ok) {
			console.error('Error fetching page blocks:', result, pageId);
			throw new Error('Failed to fetch page blocks');
		}

		blocks = [...blocks, ...result.results];
		hasMore = result.has_more;
		cursor = result.next_cursor;
	}

	return blocks;
}

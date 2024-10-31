import { notionAPIURL } from '@/app/config';

/**
 * Fetches data for the entire application forms database from Notion.
 * Sends a POST request to the Notion API to query the specified database.
 * Throws an error if the fetch operation fails.
 *
 * @param {string} pageId - The unique identifier of the Notion page to fetch.
 * @returns {Promise<Object>} The JSON response containing the database data.
 * @throws Will throw an error if the request fails.
 */
export async function fetchApplicationFormsData(pageId: string) {
	const res = await fetch(`${notionAPIURL}databases/${pageId}/query`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
			'Notion-Version': '2022-06-28',
			'Content-Type': 'application/json',
		},
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data from Notion');
	}

	return res.json();
}

/**
 * Fetches data for a specific page within the application forms database.
 * Sends a GET request to the Notion API to retrieve page details by ID.
 * Throws an error if the fetch operation fails.
 *
 * @param {string} pageId - The unique identifier of the Notion page to fetch.
 * @returns {Promise<Object>} The JSON response containing the page data.
 * @throws Will throw an error if the request fails.
 */
export async function fetchApplicationFormsPageData(pageId: string) {
	const res = await fetch(`${notionAPIURL}pages/${pageId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
			'Notion-Version': '2022-06-28',
			'Content-Type': 'application/json',
		},
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data of the page from Notion');
	}

	return res.json();
}

/**
 * Fetches all child blocks of a specific Notion page.
 * Sends a GET request to the Notion API to retrieve all blocks within a page by page ID.
 * Throws an error if the fetch operation fails.
 *
 * @param {string} pageId - The unique identifier of the Notion page whose blocks are to be fetched.
 * @returns {Promise<Object>} The JSON response containing the page's child blocks.
 * @throws Will throw an error if the request fails.
 */
export async function fetchAllPageBlocks(pageId: string) {
	const res = await fetch(`${notionAPIURL}blocks/${pageId}/children`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
			'Notion-Version': '2022-06-28',
			'Content-Type': 'application/json',
		},
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data of the blocks from Notion');
	}

	return res.json();
}

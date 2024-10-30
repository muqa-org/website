import { NextResponse } from 'next/server';

import { fetchApplicationFormsData } from '@/app/helpers/notionHelper';

export async function GET() {
	try {
		const pageId = process.env.NOTION_APPLICATION_FORMS_PAGE_ID || '';
		const data = await fetchApplicationFormsData(pageId);
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: (error as Error).message },
			{ status: 500 },
		);
	}
}

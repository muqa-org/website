import { NextResponse } from 'next/server';

import { fetchApplicationFormsData } from '@/app/helpers/notionHelper';

export async function GET() {
	try {
		const data = await fetchApplicationFormsData();
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: (error as Error).message },
			{ status: 500 },
		);
	}
}

'use client';

import { useQuery } from 'react-query';
// import { fetchPageBlocks, fetchPageBySlug, notion } from '@/lib/notion';
import { fetchPageBlocks, notion } from '@/app/helpers/notionHelper';

import bookmarkPlugin from '@notion-render/bookmark-plugin';

import { NotionRenderer } from '@notion-render/client';

import hljsPlugin from '@notion-render/hljs-plugin';

async function fetchPageDetails(id: string) {
	const res = await fetch(`/api/get-application-forms/${id}`);
	return res.json();
}

export default  function BlogPost({ params }: { params: { id: string } }) {

	const id = params.id; // Get the dynamic id from the URL

	console.log(id);

	const { data, error, isLoading } = useQuery(
		['applicationForm', id],
		() => fetchPageDetails(id),
		{ enabled: !!id },
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	console.log(data);

	return <div></div>;
}

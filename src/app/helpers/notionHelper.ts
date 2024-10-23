import { notionAPIURL } from "@/app/config";


export async function fetchApplicationFormsData() {
  const res = await fetch(`${notionAPIURL}databases/b1f370aa62514cee955ca74f5fa4d94e/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filter: {
        property: 'Group',
        multi_select: {
          contains: 'Application forms',
        },
      }
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data from Notion');
  }

  return res.json();
}

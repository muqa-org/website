export default function RenderNotionHeading1({ heading }: { heading: string }) {
	if (heading.length === 0) {
		return null;
	}

	return <h2 className='mt-6 text-3xl font-bold'>{heading}</h2>;
}

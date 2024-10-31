export default function RenderNotionHeading2({ heading }: { heading: string }) {
	if (heading.length === 0) {
		return null;
	}

	return <h3 className='mt-6 text-xl font-bold'>{heading}</h3>;
}

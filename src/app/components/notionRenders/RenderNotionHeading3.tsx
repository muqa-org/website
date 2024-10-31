export default function RenderNotionHeading3({ heading }: { heading: string }) {
	if (heading.length === 0) {
		return null;
	}

	return <h4 className='mt-6 text-lg font-bold'>{heading}</h4>;
}

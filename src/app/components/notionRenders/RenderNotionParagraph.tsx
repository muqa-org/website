export default function RenderNotionParagraph({
	paragraph,
}: {
	paragraph: string;
}) {
	if (paragraph.length === 0) {
		return null;
	}

	return <p className='mb-3 text-base'>{paragraph}</p>;
}

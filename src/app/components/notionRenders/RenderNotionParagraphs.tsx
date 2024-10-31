type Paragraph = {
	text: {
		content: string;
		link?: {
			url: string;
		};
	};
	annotations: {
		bold: boolean;
	};
};

export default function RenderNotionParagraphs({
	paragraphs,
}: {
	paragraphs: Paragraph[];
}) {
	if (paragraphs.length === 0) {
		return null;
	}

	return (
		<div className='mb-2'>
			{paragraphs.map((text: Paragraph, idx: number) => (
				<span
					key={idx}
					className={`text-base ${text.annotations.bold ? 'font-bold' : ''}`}
				>
					{text.text && text.text.link ? (
						<a
							href={text.text.link.url}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 underline'
						>
							{text.text.content}
						</a>
					) : (
						<span>
							{text.text?.content}
						</span>
					)}
				</span>
			))}
		</div>
	);
}

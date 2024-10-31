import Image from 'next/image';

export default function RenderNotionImage({ imageUrl }: { imageUrl: string }) {
	if (imageUrl.length === 0) {
		return null;
	}

	return (
		<div className='mt-4'>
			<Image
				src={imageUrl}
				alt=''
				width={1300}
				height={370}
				className='w-full rounded-md'
			/>
		</div>
	);
}

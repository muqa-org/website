import NavigationLink from '@/app/components/navigation/NavigationLink';
import { blogLink, docsLink } from '@/app/config';

export default function NavigationLinks({ screen }: { screen: string }) {
	const ULClassName =
		screen === 'mobile' ? 'flex flex-col gap-8' : 'flex items-center gap-8';

	return (
		<ul className={ULClassName}>
			<li>
				<NavigationLink href='/about'>About</NavigationLink>
			</li>
			<li>
				<NavigationLink href={blogLink} target='_blank'>
					Blog
				</NavigationLink>
			</li>
			<li>
				<NavigationLink href={docsLink} target='_blank'>
					Docs
				</NavigationLink>
			</li>
		</ul>
	);
}

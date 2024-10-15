import React from 'react';

import { AboutHero } from '@/app/components/about/AboutHero';
import { AboutStatements } from '@/app/components/about/AboutStatements';
import { AboutTeam } from '@/app/components/about/AboutTeam';
import { AboutHowDidStart } from '@/app/components/about/AboutHowDidStart';
import { AboutCredits } from '@/app/components/about/AboutCredits';

export default function About() {
	return (
		<>
			<AboutHero />
			<AboutStatements />
			<AboutTeam />
			<AboutHowDidStart />
			<AboutCredits />
		</>
	);
}

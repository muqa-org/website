import React from 'react';

import { HomepageHero } from '@/app/components/homepage/HomepageHero';
import { HomepageTogether } from '@/app/components/homepage/HomepageTogether';
import { HomepageWeHelp } from '@/app/components/homepage/HomepageWeHelp';
import { HomepageProjects } from '@/app/components/homepage/HomepageProjects';
// import { HomepageStatements } from '@/app/components/homepage/HomepageStatements';
import { HomepageInvolved } from '@/app/components/homepage/HomepageInvolved';

export default function Home() {
	return (
		<>
			<HomepageHero />
			<HomepageTogether />
			<HomepageWeHelp />
			<HomepageProjects />
			{/* <HomepageStatements /> */}
			<HomepageInvolved />
		</>
	);
}

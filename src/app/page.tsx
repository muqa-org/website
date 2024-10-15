import React from 'react';

import { HomepageHero } from '@/app/components/homepage/HomepageHero';
import { HomepageTogether } from '@/app/components/homepage/HomepageTogether';
import { HomepageWeHelp } from '@/app/components/homepage/HomepageWeHelp';
import { HomepageCampaigns } from '@/app/components/homepage/HomepageCampaigns';
// import { HomepageStatements } from '@/app/components/homepage/HomepageStatements';
import { HomepageInvolved } from '@/app/components/homepage/HomepageInvolved';

export default function Home() {
	return (
		<>
			<HomepageHero />
			<HomepageTogether />
			<HomepageWeHelp />
			<HomepageCampaigns />
			{/* <HomepageStatements /> */}
			<HomepageInvolved />
		</>
	);
}

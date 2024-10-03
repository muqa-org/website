import React from 'react';

import { HomepageHero } from '@/app/components/homepage/HomepageHero';
import { HomepageTogether } from '@/app/components/homepage/HomepageTogether';
import { HomepageWeHelp } from '@/app/components/homepage/HomepageWeHelp';
import { HomepageCampaigns } from '@/app/components/homepage/HomepageCampaigns';

export default function Home() {
	return (
		<>
			<HomepageHero />
			<HomepageTogether />
			<HomepageWeHelp />
			<HomepageCampaigns />
		</>
	);
}

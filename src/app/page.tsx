import React from "react";

import { HomepageHero } from "@/app/components/homepage/HomepageHero";
import { HomepageTogether } from "@/app/components/homepage/HomepageTogether";

export default function Home() {
	return (
		<>
			<HomepageHero />
			<HomepageTogether />
		</>
	);
}

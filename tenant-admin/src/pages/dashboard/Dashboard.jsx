import React from 'react';
import './Dashboard.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';
import HeroRow from '../../components/hero-row/HeroRow';

export default function Dashboard() {
	return (
		<div className="dashboardContainer">
			<SideMenu />
			<div className="dashboardContent">
				<PageHeader />
				<div className="sectionTitle">Overview</div>
				<HeroRow />
			</div>
		</div>
	);
}



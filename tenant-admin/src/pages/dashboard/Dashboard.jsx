import React from 'react';
import './Dashboard.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';

export default function Dashboard() {
	return (
		<div className="dashboardContainer">
			<SideMenu />
			<div className="dashboardContent">
				<PageHeader />
				<h1>Tenant Dashboard</h1>
				<p>Welcome to your admin dashboard. Use the navigation to explore.</p>
			</div>
		</div>
	);
}



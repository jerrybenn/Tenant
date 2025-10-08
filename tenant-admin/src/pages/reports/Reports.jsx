import React from 'react';
import '../units/Units.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';

export default function Reports() {
	return (
		<div className="unitsPageContainer">
			<SideMenu />
			<div className="unitsContent">
				<PageHeader />
				<h1 className="unitsTitle">Reports</h1>
				<p className="unitsSubtitle">Analytics and reporting.</p>
			</div>
		</div>
	);
}



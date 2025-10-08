import React from 'react';
import '../units/Units.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';

export default function Vendors() {
	return (
		<div className="unitsPageContainer">
			<SideMenu />
			<div className="unitsContent">
				<PageHeader />
				<h1 className="unitsTitle">Vendors</h1>
				<p className="unitsSubtitle">Manage vendors and contacts.</p>
			</div>
		</div>
	);
}



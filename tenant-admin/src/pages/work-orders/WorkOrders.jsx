import React from 'react';
import '../units/Units.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';

export default function WorkOrders() {
	return (
		<div className="unitsPageContainer">
			<SideMenu />
			<div className="unitsContent">
				<PageHeader />
				<h1 className="unitsTitle">Work Orders</h1>
				<p className="unitsSubtitle">Track maintenance requests and work orders.</p>
			</div>
		</div>
	);
}



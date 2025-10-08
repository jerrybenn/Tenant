import React from 'react';
import '../units/Units.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';

export default function Messages() {
	return (
		<div className="unitsPageContainer">
			<SideMenu />
			<div className="unitsContent">
				<PageHeader />
				<h1 className="unitsTitle">Messages</h1>
				<p className="unitsSubtitle">Conversations and notifications.</p>
			</div>
		</div>
	);
}



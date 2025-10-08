import React from 'react';
import '../units/Units.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';

export default function CalendarPage() {
	return (
		<div className="unitsPageContainer">
			<SideMenu />
			<div className="unitsContent">
				<PageHeader />
				<h1 className="unitsTitle">Calendar</h1>
				<p className="unitsSubtitle">View upcoming events and schedules.</p>
			</div>
		</div>
	);
}



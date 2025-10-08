import React from 'react';
import './Units.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';

export default function Units() {
	return (
		<div className="unitsPageContainer">
            <SideMenu />
            <div className="unitsContent">
                <PageHeader />
                <h1 className="unitsTitle">Units</h1>
			    <p className="unitsSubtitle">Manage and view property units.</p>
            </div>
			
		</div>
	);
}



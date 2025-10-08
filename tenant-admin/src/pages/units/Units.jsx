import React from 'react';
import './Units.css';
import SideMenu from '../../components/side-menu/SideMenu';
import PageHeader from '../../components/page-header/PageHeader';
import UnitsTable from '../../components/units-table/UnitsTable';

export default function Units() {
	return (
		<div className="unitsPageContainer">
            <SideMenu />
            <div className="unitsContent">
                <PageHeader />
                <UnitsTable />
            </div>
			
		</div>
	);
}



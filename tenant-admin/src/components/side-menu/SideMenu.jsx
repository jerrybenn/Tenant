import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import './SideMenu.css';

export default function SideMenu() {
	return (
		<aside className="sideMenuContainer">
			<nav className="sideMenuNav">
				<NavLink to="/" end className={({ isActive }) => `sideMenuItem ${isActive ? 'active' : ''}`}>
					<HomeRoundedIcon sx={{ fontSize: 18 }}  />
					<span>Home</span>
				</NavLink>
				<NavLink to="/analytics" className={({ isActive }) => `sideMenuItem ${isActive ? 'active' : ''}`}>
					<QueryStatsRoundedIcon sx={{ fontSize: 18 }} />
					<span>Analytics</span>
				</NavLink>
				<NavLink to="/clients" className={({ isActive }) => `sideMenuItem ${isActive ? 'active' : ''}`}>
					<PeopleAltRoundedIcon sx={{ fontSize: 18 }}  />
					<span>Clients</span>
				</NavLink>
				<NavLink to="/tasks" className={({ isActive }) => `sideMenuItem ${isActive ? 'active' : ''}`}>
					<ChecklistRoundedIcon sx={{ fontSize: 18 }}  />
					<span>Tasks</span>
				</NavLink>
			</nav>
		</aside>
	);
}

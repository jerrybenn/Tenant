import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RequestPageRoundedIcon from '@mui/icons-material/RequestPageRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import './SideMenu.css';

const menuItems = [
  { label: 'Home', path: '/', icon: <HomeRoundedIcon sx={{ fontSize: 18 }} />, end: true },
  { label: 'Units', path: '/units', icon: <RequestPageRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Work Orders', path: '/work-orders', icon: <HandymanRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Tenants', path: '/tenants', icon: <PeopleAltRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Vendors', path: '/vendors', icon: <StorefrontRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Calendar', path: '/calendar', icon: <CalendarMonthRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Reports', path: '/reports', icon: <AssessmentRoundedIcon sx={{ fontSize: 18 }} /> },
  { label: 'Messages', path: '/messages', icon: <ChatRoundedIcon sx={{ fontSize: 18 }} /> },
];

export default function SideMenu() {
  return (
    <aside className="sideMenuContainer">
      <div className="sideMenuBrand">
        <Link to="/" className="sideMenuBrandLink">Tenant</Link>
      </div>
      <nav className="sideMenuNav">
        {menuItems.map(({ label, path, icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) => `sideMenuItem ${isActive ? 'active' : ''}`}
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

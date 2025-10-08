import React from 'react';
import { useLocation } from 'react-router-dom';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import './PageHeader.css';

export default function PageHeader() {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, '');
  const segments = pathname.split('/').filter(Boolean);
  const last = segments[0] || 'home';
  const title = last.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  }).format(today);

  return <div className="pageHeaderContainer">
    <div className="navTitle">{title}</div>
    <div className="pageHeaderRight">
      <div className="headerPill">
        <EventRoundedIcon sx={{ fontSize: 18, color: '#ffffff' }} />
        <span>{formattedDate}</span>
      </div>
      <div className="notifButton" aria-label="Notifications" type="button">
        <NotificationsRoundedIcon  sx={{ fontSize: 18, color: '#ffffff' }} />
      </div>
    </div>
  </div>;
}

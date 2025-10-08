import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '12px 24px',
			borderBottom: '1px solid #e5e7eb',
			position: 'sticky',
			top: 0,
			background: '#fff',
			zIndex: 10,
			height: 'var(--nav-h)'
		}}>
			<Link to="/" style={{ fontWeight: 700, fontSize: 18, textDecoration: 'none', color: '#111827' }}>
				Tenant Admin
			</Link>
			<div style={{ display: 'flex', gap: 16 }}>
				<NavLink to="/" end style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#2563eb' : '#374151' })}>
					Dashboard
				</NavLink>
				{/* Future links can go here */}
			</div>
		</nav>
	);
}



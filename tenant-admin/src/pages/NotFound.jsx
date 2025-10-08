import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div style={{ padding: '24px' }}>
			<h1>404 - Page Not Found</h1>
			<p>The page you are looking for does not exist.</p>
			<p>
				<Link to="/">Return to Dashboard</Link>
			</p>
		</div>
	);
}



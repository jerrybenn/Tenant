import React from 'react';
import './HeroRow.css';
import HeroGraph from '../hero-graph/HeroGraph';

export default function HeroRow() {

	const tenantsData = 10;
	const tenantsPercentage = 10;

	function generateLast30Series(start = 50) {
		const series = [];
		let value = start;
		for (let i = 0; i < 30; i++) {
			value += Math.round((Math.random() - 0.5) * 6);
			series.push(Math.max(0, value));
		}
		return series;
	}

	const tenantsSeries = generateLast30Series(60);

	return <div className="heroRowContainer">
		<div className="heroRowCard">
			<div className="heroRowCardTitle">
				<span>Tenants</span>
			</div>
			<div className="heroCardData">
				<div className="heroCardLargeNumber">
					<span>{tenantsData}</span>
				</div>
				<div className="heroCardPercentage">
					<span>+{tenantsPercentage}%</span>
				</div>
			</div>
			<div className="heroCardSubLabel">Last 30 days</div>
			<div className="heroRowCardContent" style={{ width: '100%' }}>
				<HeroGraph data={tenantsSeries} height={48} color="#22c55e" />
			</div>
		</div>
        <div className="heroRowCard">
			<div className="heroRowCardTitle">
				<span>New Leases</span>
			</div>
			<div className="heroCardData">
				<div className="heroCardLargeNumber">
					<span>{tenantsData}</span>
				</div>
				<div className="heroCardPercentage">
					<span>+{tenantsPercentage}%</span>
				</div>
			</div>
			<div className="heroCardSubLabel">Last 30 days</div>
			<div className="heroRowCardContent" style={{ width: '100%' }}>
				<HeroGraph data={tenantsSeries} height={48} color="#22c55e" />
			</div>
		</div>
        <div className="heroRowCard">
			<div className="heroRowCardTitle">
				<span>Vacancy</span>
			</div>
			<div className="heroCardData">
				<div className="heroCardLargeNumber">
					<span>{tenantsData}</span>
				</div>
				<div className="heroCardPercentage">
				<span>+{tenantsPercentage}%</span>
				</div>
			</div>
			<div className="heroCardSubLabel">Last 30 days</div>    
			<div className="heroRowCardContent" style={{ width: '100%' }}>
				<HeroGraph data={tenantsSeries} height={48} />
			</div>
		</div>
        <div className="heroRowCard">
			<div className="heroRowCardTitle">
				<span>Properties </span>
			</div>
			<div className="heroCardData">
				<div className="heroCardLargeNumber">
					<span>{tenantsData}</span>
				</div>
				<div className="heroCardPercentage">
					<span>+{tenantsPercentage}%</span>
				</div>
			</div>
			<div className="heroCardSubLabel">Last 30 days</div>
			<div className="heroRowCardContent" style={{ width: '100%' }}>
				<HeroGraph data={tenantsSeries} height={48} />
			</div>
		</div>
	</div>;
}
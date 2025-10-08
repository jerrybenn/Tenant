import React from 'react';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import './HeroGraph.css';

/**
 * Reusable tiny area chart for hero cards.
 * Props:
 * - data: number[] (expected length ~30; oldest → newest)
 * - height?: number (default 48)
 */
export default function HeroGraph({ data = [], height = 48, width = 240, color = '#22c55e' }) {
	return (
		<div className="heroGraphContainer" style={{ width }}>
			<SparkLineChart
				data={data}
				height={height}
				width={width}
				area
				sx={{
					'--Charts-area-opacity': 0.08,
					'& .MuiAreaElement-root': { fillOpacity: 0.08, fill: color },
					'& .MuiLineElement-root': { strokeWidth: 1.5, stroke: color }
				}}
			/>
		</div>
	);
}
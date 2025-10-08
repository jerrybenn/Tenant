import React, { useMemo, useState } from 'react';
import './UnitsTable.css';

export default function UnitsTable() {
	// demo dataset (replace with real data when available)
	const rows = useMemo(() => {
		return Array.from({ length: 57 }).map((_, i) => ({
			id: `10${i.toString().padStart(2, '0')}`,
			date: `Oct ${10 + (i % 20)}, 2025`,
			property: `Parkview A${(i % 12) + 1}`,
			style: ['Studio', '1BR', '2BR'][i % 3],
			price: `$${(1200 + i * 15).toLocaleString()}`,
			status: i % 3 === 0 ? 'Available' : 'Occupied',
		}));
	}, []);

	const [page, setPage] = useState(0); // 0-based
	const [pageSize, setPageSize] = useState(10);

	const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
	const clampedPage = Math.min(page, pageCount - 1);
	const start = clampedPage * pageSize;
	const end = Math.min(start + pageSize, rows.length);
	const visible = rows.slice(start, end);

	function prevPage() {
		setPage(p => Math.max(0, p - 1));
	}

	function nextPage() {
		setPage(p => Math.min(pageCount - 1, p + 1));
	}

	function onPageSizeChange(e) {
		const newSize = Number(e.target.value);
		setPageSize(newSize);
		setPage(0);
	}

	return (
		<div className="unitsTableContainer">
			<div className="tableCard">
				<div className="tableToolbar">
					<input className="searchInput" type="search" placeholder="Search units..." aria-label="Search units" />
					<div className="filters">
						<select className="filterSelect" aria-label="Filter by status" defaultValue="">
							<option value="">Status: All</option>
							<option value="Available">Available</option>
							<option value="Occupied">Occupied</option>
						</select>
						<select className="filterSelect" aria-label="Filter by style" defaultValue="">
							<option value="">Style: All</option>
							<option value="Studio">Studio</option>
							<option value="1BR">1BR</option>
							<option value="2BR">2BR</option>
						</select>
						<select className="filterSelect" aria-label="Filter by property" defaultValue="">
							<option value="">Property: All</option>
							<option value="Parkview A1">Parkview A1</option>
							<option value="Parkview A2">Parkview A2</option>
							<option value="Parkview A3">Parkview A3</option>
						</select>
					</div>
				</div>
				<div className="tableHeaderRow">
					<div className="th checkboxCol">{/* checkbox placeholder */}</div>
					<div className="th idCol">ID</div>
					<div className="th dateCol">Date</div>
					<div className="th propertyCol">Property</div>
					<div className="th styleCol">Style</div>
					<div className="th priceCol">Price</div>
					<div className="th statusCol">Status</div>
					<div className="th actionsCol">{/* actions ... */}</div>
				</div>


				{/* rows */}
				<div className="tableBody">
					{visible.map((row) => (
						<div className="tableDataRow" key={row.id}>
							<div className="td checkboxCol">
								<input type="checkbox" />
							</div>
							<div className="td idCol">{row.id}</div>
							<div className="td dateCol">{row.date}</div>
							<div className="td propertyCol">{row.property}</div>
							<div className="td styleCol">{row.style}</div>
							<div className="td priceCol">{row.price}</div>
							<div className="td statusCol">
								<span className={`statusBadge ${row.status === 'Available' ? 'online' : 'offline'}`}>{row.status}</span>
							</div>
							<div className="td actionsCol">⋯</div>
						</div>
					))}
				</div>

				<div className="tableFooter">
					<div className="range">
						Showing <strong>{rows.length === 0 ? 0 : start + 1}</strong>–<strong>{end}</strong> of <strong>{rows.length}</strong>
					</div>
					<div className="pager">
						<button className="pagerBtn" onClick={prevPage} disabled={clampedPage === 0}>Prev</button>
						<span className="pageInfo">Page {clampedPage + 1} of {pageCount}</span>
						<button className="pagerBtn" onClick={nextPage} disabled={clampedPage >= pageCount - 1}>Next</button>
						<select className="pageSize" value={pageSize} onChange={onPageSizeChange}>
							<option value={5}>5</option>
							<option value={10}>10</option>
							<option value={20}>20</option>
							<option value={50}>50</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}
import React from "react";
import { CATEGORIES } from "../data/mockDishes";


export default function Filters({ activeCategory, onCategoryChange, searchTerm, onSearchChange, vegOnly, onVegOnlyChange }) {
return (
<div>
<div className="filters">
{CATEGORIES.map((cat) => (
<button
key={cat}
className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
onClick={() => onCategoryChange(cat)}
>
{cat}
</button>
))}
</div>


<div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
<input
className="search"
placeholder="Search dishes..."
value={searchTerm}
onChange={(e) => onSearchChange(e.target.value)}
/>


<label className="veg-toggle">
<input type="checkbox" checked={vegOnly} onChange={(e) => onVegOnlyChange(e.target.checked)} /> Veg only
</label>
</div>
</div>
);
}
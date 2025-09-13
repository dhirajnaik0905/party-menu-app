import React from "react";


export default function IngredientModal({ dish, onClose }) {
if (!dish) return null;
return (
<div className="modal-overlay" onClick={onClose}>
<div className="modal" onClick={(e) => e.stopPropagation()}>
<h3 style={{ marginTop: 0 }}>{dish.name}</h3>
<p style={{ color: "#555" }}>{dish.description}</p>
<h4>Ingredients</h4>
<ul>
{dish.ingredients.map((ing, idx) => (
<li key={idx}>{ing.name} — {ing.quantity}</li>
))}
</ul>
<div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
<button className="btn secondary" onClick={onClose}>Close</button>
</div>
</div>
</div>
);
}
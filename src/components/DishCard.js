import React from "react";


export default function DishCard({ dish, isSelected, onAddDish, onRemoveDish, onViewIngredients }) {
return (
<div className="dish-card">
<div className="dish-media" style={{ backgroundImage: `url(${dish.image})` }} />
<div className="dish-body">
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
<div>
<div className="dish-title">{dish.name}</div>
<div style={{ fontSize: 13, color: "#555" }}>{dish.mealType} • {dish.type}</div>
</div>
<div style={{ fontSize: 12, color: "#777" }}>{dish.type === "VEG" ? "🥦" : "🍗"}</div>
</div>


<div style={{ fontSize: 13, color: "#444" }}>{dish.description}</div>


<div className="card-actions">
{isSelected ? (
<button className="btn remove" onClick={() => onRemoveDish(dish.id)}>Remove</button>
) : (
<button className="btn add" onClick={() => onAddDish(dish.id)}>Add</button>
)}


<button className="btn secondary" onClick={() => onViewIngredients(dish)}>Ingredients</button>
</div>
</div>
</div>
);
}
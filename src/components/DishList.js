import React from "react";
import DishCard from "./DishCard";


export default function DishList({ dishes, selectedDishes, onAddDish, onRemoveDish, onViewIngredients }) {
if (dishes.length === 0) return <div style={{ padding: 18 }}>No dishes found.</div>;
return (
<div className="dish-list">
{dishes.map((d) => (
<DishCard
key={d.id}
dish={d}
isSelected={selectedDishes.includes(d.id)}
onAddDish={onAddDish}
onRemoveDish={onRemoveDish}
onViewIngredients={onViewIngredients}
/>
))}
</div>
);
}
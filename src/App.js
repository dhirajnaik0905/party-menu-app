import React, { useState, useMemo, useEffect } from "react";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import { dishes } from "./data/mockDishes";
import "./App.css";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("party:selected")) || [];
    } catch (e) {
      return [];
    }
  });

  const [modalDish, setModalDish] = useState(null);

  useEffect(() => {
    localStorage.setItem("party:selected", JSON.stringify(selectedDishes));
  }, [selectedDishes]);

  const filteredDishes = useMemo(() => {
    return dishes.filter((d) => {
      if (activeCategory !== "ALL" && d.mealType !== activeCategory) return false;
      if (vegOnly && d.type !== "VEG") return false;
      if (searchTerm.trim()) {
        const q = searchTerm.trim().toLowerCase();
        if (!d.name.toLowerCase().includes(q) && !d.description.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [activeCategory, vegOnly, searchTerm]);

  function handleAdd(id) {
    setSelectedDishes((s) => (s.includes(id) ? s : [...s, id]));
  }
  function handleRemove(id) {
    setSelectedDishes((s) => s.filter((x) => x !== id));
  }

  const selectedItems = dishes.filter((d) => selectedDishes.includes(d.id));

  return (
    <div className="app-container">
      <div className="header">
        <div className="title">Party Menu Selection</div>
        <div className="controls">
          <div style={{ fontSize: 13, color: "#666" }}>{selectedItems.length} item(s) selected</div>
        </div>
      </div>

      <Filters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
      />

      <div className="main">
        <div className="left">
          <DishList
            dishes={filteredDishes}
            selectedDishes={selectedDishes}
            onAddDish={handleAdd}
            onRemoveDish={handleRemove}
            onViewIngredients={(d) => setModalDish(d)}
          />
        </div>

        <div className="right">
          <div className="summary">
            <h4 style={{ marginTop: 0 }}>Selection Summary</h4>
            {selectedItems.length === 0 ? (
              <div style={{ color: "#666" }}>No items selected yet.</div>
            ) : (
              <div>
                <ul>
                  {selectedItems.map((it) => (
                    <li key={it.id} style={{ marginBottom: 6 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                        <div>
                          <strong>{it.name}</strong>
                          <div style={{ fontSize: 12, color: "#666" }}>{it.mealType} • {it.type}</div>
                        </div>
                        <button className="btn remove" onClick={() => handleRemove(it.id)}>Remove</button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 12 }}>
                  <button className="btn add" onClick={() => alert("Order placed for: " + selectedItems.map(s => s.name).join(", "))}>Place Order</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <IngredientModal dish={modalDish} onClose={() => setModalDish(null)} />
    </div>
  );
}

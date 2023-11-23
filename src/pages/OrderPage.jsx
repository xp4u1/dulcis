import { useState } from "react";
import { FoodCard } from "../components/FoodCard";

import { foods, coffeeTypes, teaTypes, getFoodById } from "../foods";

export function OrderPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCoffee, setSelectedCoffee] = useState("");
  const [selectedTea, setSelectedTea] = useState("");

  const toggle = (id) => {
    if (id === "kaffee") setSelectedCoffee("");
    if (id === "tee") setSelectedTea("");

    setSelectedItems(
      selectedItems.includes(id)
        ? selectedItems.filter((itemId) => itemId != id)
        : [...selectedItems, id]
    );
  };

  return (
    <div className="p-5 max-w-4xl text-gray-800">
      <header className="mt-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Bestellung
        </h1>
        <p className="mt-2 text-md text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quam
          blanditiis voluptates exercitationem iste dolor ratione quia autem et
          culpa architecto cum iure, vel mollitia qui perspiciatis! Nemo,
          itaque. Necessitatibus?
        </p>
      </header>

      <div id="productGrid" className="mt-10 flex flex-wrap gap-4">
        {foods.map((item) => (
          <FoodCard
            key={item.id}
            id={item.id}
            title={item.title}
            icon={item.icon}
            selected={selectedItems.includes(item.id)}
            onClick={() => toggle(item.id)}
          />
        ))}
      </div>

      {selectedItems.includes("kaffee") && (
        <>
          <h3 className="mt-16 text-xl font-bold">Wie soll der Kaffe sein?</h3>
          <div className="mt-5 flex flex-wrap gap-4">
            {coffeeTypes.map((type) => (
              <FoodCard
                key={type.id}
                id={type.id}
                title={type.title}
                icon={type.icon}
                selected={selectedCoffee === type.id}
                onClick={() => setSelectedCoffee(type.id)}
              />
            ))}
          </div>
        </>
      )}

      {selectedItems.includes("tee") && (
        <>
          <h3 className="mt-16 text-xl font-bold">Welche Teesorte?</h3>
          <div className="mt-5 flex flex-wrap gap-4">
            {teaTypes.map((type) => (
              <FoodCard
                key={type.id}
                id={type.id}
                title={type.title}
                icon={type.icon}
                selected={selectedTea === type.id}
                onClick={() => setSelectedTea(type.id)}
              />
            ))}
          </div>
        </>
      )}

      <div className="mt-10">
        <p>Bestellung:</p>
        {selectedItems.map((id) => (
          <p key={id}>{getFoodById(id).title}</p>
        ))}
      </div>

      <div className="pt-20 flex justify-end">
        <button className="icon-before icon-coffee px-6 py-3 rounded-md bg-slate-400 text-white font-semibold">
          Bestellen
        </button>
      </div>
    </div>
  );
}

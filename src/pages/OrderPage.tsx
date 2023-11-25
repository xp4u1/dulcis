import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FoodCard from "@/components/FoodCard";
import { foods, coffeeTypes, teaTypes, getFoodById } from "@/data/Foods";
import ReceiptModal from "@/components/ReceiptModal";
import { supabaseClient } from "@/data/Supabase";

export default function OrderPage() {
  const navigate = useNavigate();

  // Selection
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedCoffee, setSelectedCoffee] = useState("");
  const [selectedTea, setSelectedTea] = useState("");

  // Form
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  // Modal
  const [receiptModal, setReceiptModal] = useState(false);

  const toggle = (id: string) => {
    if (id === "Kaffee") setSelectedCoffee("");
    if (id === "Tee") setSelectedTea("");

    setSelectedItems(
      selectedItems.includes(id)
        ? selectedItems.filter((itemId) => itemId != id)
        : [...selectedItems, id]
    );
  };

  const order = async () => {
    const { error } = await supabaseClient.from("orders").insert({
      data: JSON.stringify({
        name: name,
        room: room,
        items: selectedItems,
        coffeeType: selectedCoffee,
        teaType: selectedTea,
      }),
    });

    setReceiptModal(false);

    if (error) {
      console.error("[Supabase] Cannot insert into database");
      navigate("/error");
    } else {
      navigate("/success");
    }
  };

  return (
    <div className="p-5 max-w-4xl text-gray-800">
      <ReceiptModal
        show={receiptModal}
        orderCallback={order}
        closeCallback={() => setReceiptModal(false)}
        order={{
          name: name,
          room: room,
          items: selectedItems,
          coffeeType: selectedCoffee,
          teaType: selectedTea,
        }}
      />

      <header className="mt-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Bestellung
        </h1>
      </header>

      <div id="productGrid" className="mt-10 flex flex-wrap gap-4">
        {foods.map((item) => (
          <FoodCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            selected={selectedItems.includes(item.id)}
            onClick={() => toggle(item.id)}
          />
        ))}
      </div>

      {selectedItems.includes("Kaffee") && (
        <>
          <h3 className="mt-16 text-xl font-bold">Wie soll der Kaffe sein?</h3>
          <div className="mt-5 flex flex-wrap gap-4">
            {coffeeTypes.map((type) => (
              <FoodCard
                key={type.id}
                title={type.title}
                icon={type.icon}
                selected={selectedCoffee === type.id}
                onClick={() => setSelectedCoffee(type.id)}
              />
            ))}
          </div>
        </>
      )}

      {selectedItems.includes("Tee") && (
        <>
          <h3 className="mt-16 text-xl font-bold">Welche Teesorte?</h3>
          <div className="mt-5 flex flex-wrap gap-4">
            {teaTypes.map((type) => (
              <FoodCard
                key={type.id}
                title={type.title}
                icon={type.icon}
                selected={selectedTea === type.id}
                onClick={() => setSelectedTea(type.id)}
              />
            ))}
          </div>
        </>
      )}

      <div className="mt-10 flex flex-col gap-5">
        <p className="text-md text-gray-500">
          Wohin soll die Bestellung geliefert werden?
        </p>

        <div className="flex gap-5 flex-col md:flex-row">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 block w-full rounded-md shadow-md shadow-slate-100 bg-slate-100 border-transparent focus:border-slate-500 focus:bg-white focus:ring-0"
          />

          <input
            type="text"
            placeholder="Raum"
            value={room}
            onChange={(event) => setRoom(event.target.value)}
            className="mt-1 block w-full rounded-md shadow-md shadow-slate-100 bg-slate-100 border-transparent focus:border-slate-500 focus:bg-white focus:ring-0"
          />
        </div>
      </div>

      <div className="pt-20 flex justify-end">
        <button
          className="icon-before icon-coffee px-6 py-3 rounded-md bg-teal-600 hover:bg-teal-500 text-white font-semibold"
          onClick={() => setReceiptModal(true)}
        >
          Bestellen
        </button>
      </div>
    </div>
  );
}

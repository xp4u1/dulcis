import OrderCard from "@/components/OrderCard";
import { supabaseClient } from "@/data/Supabase";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [orderCards, setOrderCards] = useState([]);

  const fetchOrders = async () => {
    const { data, error } = await supabaseClient.from("orders").select();

    if (error) {
      console.error("[Supabase] Cannot fetch data!");
      console.debug(error);
    }

    setOrderCards(
      data.map((row) => (
        <OrderCard
          key={row["id"]}
          order={JSON.parse(row["data"])}
          delivered={row["delivered"]}
        />
      ))
    );
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  supabaseClient
    .channel("admin")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "orders",
      },
      (payload) => {
        fetchOrders();
      }
    )
    .subscribe();

  return (
    <div className="p-5 max-w-4xl text-gray-800">
      <header className="mt-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Übersicht
        </h1>
        <p className="mt-2 text-md text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quam
          blanditiis voluptates exercitationem iste dolor ratione quia autem et
          culpa architecto cum iure, vel mollitia qui perspiciatis! Nemo,
          itaque. Necessitatibus?
        </p>
      </header>

      <div className="mt-10 flex flex-wrap gap-4">{orderCards}</div>
    </div>
  );
}

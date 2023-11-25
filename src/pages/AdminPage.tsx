import { useEffect, useState } from "react";

import OrderCard from "@/components/OrderCard";
import { supabaseClient } from "@/data/Supabase";

export default function AdminPage() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { data, error } = await supabaseClient.from("orders").select();

    if (error) {
      console.error("[Supabase] Cannot fetch data");
      console.debug(error);
    }

    console.debug(data);

    setOrders(data);
  };

  const toggleStatus = async (id: string, status: boolean) => {
    const { error } = await supabaseClient
      .from("orders")
      .update({
        delivered: !status,
      })
      .eq("id", id);

    if (!error) return;

    console.error("[Supabase] Cannot update order " + id);
    console.debug(error);
  };

  const orderToCard = (order: any) => (
    <OrderCard
      key={order["id"]}
      order={JSON.parse(order["data"])}
      timestamp={new Date(Date.parse(order["created_at"])).toLocaleTimeString(
        "de-DE",
        {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }
      )}
      onClick={() => toggleStatus(order["id"], order["delivered"])}
    />
  );

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
      () => {
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

      <h3 className="mt-10 text-xl">Ausstehend</h3>
      <div className="mt-5 flex flex-wrap gap-4">
        {orders.filter((row) => !row["delivered"]).map(orderToCard)}
      </div>

      <h3 className="mt-10 text-xl">Fertig</h3>
      <div className="mt-5 flex flex-wrap gap-4">
        {orders.filter((row) => row["delivered"]).map(orderToCard)}
      </div>
    </div>
  );
}

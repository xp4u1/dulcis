import { Order, itemList } from "@/data/Order";

export default function OrderCard({
  order,
  delivered,
}: {
  order: Order;
  delivered: boolean;
}) {
  return (
    <div className="p-3 border border-gray-800">
      <div className="mb-2">
        <p>Name: {order.name}</p>
        <p>Raum: {order.room}</p>
      </div>

      {itemList(order)}
    </div>
  );
}

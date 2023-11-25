import { Order, itemList } from "@/data/Order";

export default function OrderCard({
  order,
  timestamp,
  onClick,
}: {
  order: Order;
  timestamp: string;
  onClick: Function;
}) {
  return (
    <div
      className="p-3 cursor-pointer font-mono border border-gray-800 space-y-2"
      onClick={() => onClick()}
    >
      <p className="font-bold">Bestellung ({timestamp})</p>

      <div>
        <p>Name: {order.name}</p>
        <p>Raum: {order.room}</p>
      </div>

      <div>{itemList(order)}</div>
    </div>
  );
}

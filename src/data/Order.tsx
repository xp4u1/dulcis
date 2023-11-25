import { getFoodById } from "./Foods";

export interface Order {
  name: string;
  room: string;
  items: string[];
  coffeeType: string;
  teaType: string;
}

export const itemList = (order: Order) => {
  return order.items.map((itemId) => (
    <p key={itemId}>
      {" "}
      {itemId === "Kaffee"
        ? order.coffeeType
        : itemId === "Tee"
        ? order.teaType
        : getFoodById(itemId).title}
    </p>
  ));
};

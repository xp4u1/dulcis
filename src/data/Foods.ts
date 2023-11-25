export interface Food {
  id: string;
  title: string;
  icon: string;
}

export const foods: Food[] = [
  {
    id: "Muffin",
    title: "Muffin",
    icon: "cupcake",
  },
  {
    id: "Kuchen",
    title: "Kuchen",
    icon: "cake-slice",
  },
  {
    id: "Brownie",
    title: "Brownie",
    icon: "cake-slice",
  },
  {
    id: "Kaffee",
    title: "Kaffee",
    icon: "coffee-pot",
  },
  {
    id: "Tee",
    title: "Tee",
    icon: "mug-tea",
  },
];

export const coffeeTypes: Food[] = [
  {
    id: "Kaffee (Schwarz)",
    title: "Schwarz",
    icon: "coffee-beans",
  },
  {
    id: "Kaffee (Milch)",
    title: "Milch",
    icon: "cow",
  },
  {
    id: "Kaffee (Hafermilch)",
    title: "Hafermilch",
    icon: "wheat",
  },
];

export const teaTypes: Food[] = [
  {
    id: "Früchtetee",
    title: "Früchtetee",
    icon: "crate-apple",
  },
  {
    id: "Kräutertee",
    title: "Kräutertee",
    icon: "leaf",
  },
];

export const getFoodById = (id: string) =>
  foods.filter((item) => item.id == id)[0];

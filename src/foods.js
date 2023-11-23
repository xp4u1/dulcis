export const foods = [
  {
    id: "muffins",
    title: "Muffin",
    icon: "cupcake",
  },
  {
    id: "kuchen",
    title: "Kuchen",
    icon: "cake-slice",
  },
  {
    id: "brownies",
    title: "Brownie",
    icon: "cake-slice",
  },
  {
    id: "kaffee",
    title: "Kaffee",
    icon: "coffee-pot",
  },
  {
    id: "tee",
    title: "Tee",
    icon: "mug-tea",
  },
];

export const coffeeTypes = [
  {
    id: "schwarz",
    title: "Schwarz",
    icon: "coffee-beans",
  },
  {
    id: "milch",
    title: "Milch",
    icon: "cow",
  },
  {
    id: "hafer",
    title: "Hafermilch",
    icon: "wheat",
  },
];

export const teaTypes = [
  {
    id: "früchtetee",
    title: "Früchtetee",
    icon: "crate-apple",
  },
  {
    id: "kräutertee",
    title: "Kräutertee",
    icon: "leaf",
  },
];

export const getFoodById = (id) => foods.filter((item) => item.id == id)[0];

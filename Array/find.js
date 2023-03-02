const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);
console.log(found);

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
const founded = inventory.find((element) => element.name == "apples");
console.log(founded);

const trees = ["birch", "maple", "oak", "poplar"];

const result = trees.find((tree) => tree.startsWith("m"));
console.log(result);


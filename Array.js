const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

students.forEach((student) =>
  console.log(student.name, student.age, student.grade)
);

const topstudents = students.filter((student) => student.grade > 80);
console.log(topstudents);

const youngstudents = students.filter((student) => student.age < 22);
console.log(youngstudents);

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

products.forEach((item) => console.log(item.name, item.price));

products.forEach((item) => (item.price *= 1.1));

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

const highrated = products.filter((product) => product.rating >= 4.5);

highrated.forEach((high) => console.log("Highly rated items: ", high.name));

const affordableitems = products.filter((product) => product.price < 1000);

affordableitems.forEach((afford) =>
  console.log("Affordable items: ", afford.name)
);

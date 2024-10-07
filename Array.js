const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

const topstudents = students.filter((student) => student.grade > 80);
console.log(topstudents);

const youngstudents = students.filter((student) => student.age < 22);
console.log(youngstudents);

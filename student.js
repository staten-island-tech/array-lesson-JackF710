const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

const topstudents = students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log("Top Student", student.name));

const youngstudents = students
  .filter((student) => student.age <= 21)
  .forEach((student) => console.log("Young Student", student.name));

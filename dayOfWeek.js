const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date();
const dayName = daysOfWeek[today.getDay()];

console.log(`Today is ${dayName}.`);

const message = (name_discount) => {
  return `Hi ${name_discount.name}! ${name_discount.discount}% off our best candies for you today!`;
}
const generateMessages = (names) => {
  return names.map(message);
}

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

console.log(generateMessages(namesAndDiscounts));
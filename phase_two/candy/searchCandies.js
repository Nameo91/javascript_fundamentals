const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const capFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const serachCandies = (partial_name, price) => {
  return candies.filter((candy) => {
    return candy.price <= price;
  })
  .filter((candy) => {
    return candy.name.includes(capFirst(partial_name));
  })
  .map((candy) => {
    return candy.name;
  });
}

module.exports = serachCandies;
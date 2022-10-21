class ShoppingBasket {
  constructor() {
    this.items = [];
    
  }
  addItem(candy) {
    this.items.push(candy);
  }

  getTotalPrice() {
    let sum = 0;
    this.items.forEach((candy) => {
      sum += (candy.getPrice());
    });
    return sum;
  }
}

// class ShoppingBasket {
//   constructor() {
//     this.discount = 0;
//   }

//   applyDiscount(discount) {
//     this.discount = discount;
//   }

//   getTotalPrice() {
//     let totalPrice = 0;
//     this.candies.forEach((candy) => {
//       totalPrice += candy.getPrice();
//     });

//     return totalPrice - this.discount;
//   }
// }
module.exports = ShoppingBasket;



const ShoppingBasket = require("./shoppingBasket");
const Candy = require('./candy');

jest.mock('./candy');

describe('ShoppingBasket',() => {
  beforeEach(() => {
    Candy.mockClear();
  });
  
  it('add items', () => {
    const shoppingBasket = new ShoppingBasket();
    shoppingBasket.addItem({name: 'Mars', price: 4.99});

    expect(shoppingBasket.items).toEqual([{name: 'Mars', price: 4.99}]);
  });

  it('return the total price', () => {
    const mockCandy = new Candy();
    mockCandy.getPrice.mockImplementation(() => 4.99);
    const shoppingBasket = new ShoppingBasket();
    shoppingBasket.addItem(mockCandy);
  
    expect(shoppingBasket.getTotalPrice()).toBe(4.99);
  });

  it('return the total price', () => {
    const mockCandy1 = new Candy();
    const mockCandy2 = new Candy();
    mockCandy1.getPrice.mockImplementation(() => 4.99);
    mockCandy2.getPrice.mockImplementation(() => 3.99);
    const shoppingBasket = new ShoppingBasket();
    shoppingBasket.addItem(mockCandy1);
    shoppingBasket.addItem(mockCandy2)
  
    expect(shoppingBasket.getTotalPrice()).toBe(8.98);
  })
});
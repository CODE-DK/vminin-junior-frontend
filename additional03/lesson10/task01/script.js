// --- Задание #1

const groceries = {
    "Orange Juice": {
      price: 1.5,
      discount: 10,
    },
    Chocolate: {
      price: 2,
      discount: 0,
    },
  };
  
  function getTotalPriceOfShoppingBag(shoppingBag) {
    return shoppingBag
      .map((bag) => {
        const product = groceries[bag.product];
        const discount = product.discount !== 0 ? 1 - product.discount / 100 : 1;
        return bag.quantity * product.price * discount;
      })
      .reduce((total, price) => (total += price))
      .toFixed(2);
  }
  
  const shoppingBag = [
    { product: "Chocolate", quantity: 3 },
    { product: "Orange Juice", quantity: 23 },
  ];
  
  const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
  console.log("totalPrice", totalPrice); // Возвращает 37.05
  
  // ---
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Noise-cancelling over-ear headphones with 20 hours battery life.",
    price: 79.99,
    category: "Electronics",
    image: "https://via.placeholder.com/150",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    description:
      "Adjustable height, lumbar support, and breathable mesh backrest.",
    price: 129.99,
    category: "Furniture",
    image: "https://via.placeholder.com/150",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Ceramic Coffee Mug",
    description: "Dishwasher and microwave safe mug with 350ml capacity.",
    price: 9.99,
    category: "Kitchen",
    image: "https://via.placeholder.com/150",
    inStock: false,
    rating: 4.0,
  },
  {
    id: 4,
    name: "Running Sneakers",
    description:
      "Lightweight running shoes with breathable mesh and rubber sole.",
    price: 59.95,
    category: "Footwear",
    image: "https://via.placeholder.com/150",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Smartwatch ",
    description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
    price: 149.99,
    category: "Electronics",
    image: "https://via.placeholder.com/150",
    inStock: true,
    rating: 4.3,
  },
  {
    id: 6,
    name: "LED Desk Lamp",
    description:
      "Rechargeable desk lamp with 3 brightness levels and USB charging.",
    price: 24.99,
    category: "Home Office",
    image: "https://via.placeholder.com/150",
    inStock: false,
    rating: 4.1,
  },
];

const findSmartWatch = products.find(
  (product) => product.name.toLowerCase().trim() === "smartwatch"
);

console.log(findSmartWatch);

const doubleProductsPrice = products.map((product) => {
  return {
    ...product,
    price: Math.round(product.price * 2),
  };
});

console.log(doubleProductsPrice);

const productsPriceAbove100 = products.filter((product) => {
  return product.price > 100;
});

console.log(productsPriceAbove100);

const totalPrices = products.reduce((acct, currentValue) => {
  return acct + Math.floor(currentValue.price);
}, 0);

console.log(totalPrices);

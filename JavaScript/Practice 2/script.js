const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Noise-cancelling over-ear headphones with 20 hours battery life.",
    price: 79.99,
    category: "Electronics",
    image: "./images/city.jpg",
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
    image: "./images/man.jpg",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Ceramic Coffee Mug",
    description: "Dishwasher and microwave safe mug with 350ml capacity.",
    price: 9.99,
    category: "Kitchen",
    image: "./images/nature.jpg",
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
    image: "./images/pain.jpg",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Smartwatch ",
    description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
    price: 149.99,
    category: "Electronics",
    image: "./images/portrait.jpg",
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
    image: "./images/street.jpg",
    inStock: false,
    rating: 4.1,
  },
];

const productSection = document.getElementById("productSection");

const mappedProducts = products.map((product) => {
  const productCard = document.createElement("section");
  const title = document.createElement("h2");
  const price = document.createElement("p");
  const image = document.createElement("img");

  image.src = product.image;

  title.textContent = product.name;
  price.textContent = `$${product.price}`;

  productCard.appendChild(image);
  productCard.appendChild(title);
  productCard.appendChild(price);

  productSection.appendChild(productCard);
});

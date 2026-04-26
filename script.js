const products = [
  {
    name: "Classic Black Shirt",
    price: 599,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    name: "Ribbed Crop Top",
    price: 399,
    image: "https://images.unsplash.com/photo-1520975922203-bf7f0c36a0b0"
  },
  {
    name: "Blue Jeans",
    price: 799,
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09"
  },
  {
    name: "Black Dress",
    price: 999,
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    </div>
  `;
});

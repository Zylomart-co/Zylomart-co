const API = "http://localhost:5000/api/products";

async function loadProducts() {
  const res = await fetch(API);
  const data = await res.json();

  const container = document.getElementById("products");

  data.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });
}

loadProducts();

function addToCart() {
  alert("Added to cart");
}

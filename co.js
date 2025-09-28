const cart = JSON.parse(localStorage.getItem('cart')) || [];

function loadCheckoutItems() {
  const checkoutItemsContainer = document.getElementById('checkout-items');
  const totalPriceElement = document.getElementById('total-price');
  let total = 0;

  if (cart.length === 0) {
    checkoutItemsContainer.innerHTML = "<p>Keranjang Anda kosong.</p>";
    totalPriceElement.style.display = "none";
    document.querySelector('.btn-confirm').style.display = "none";
    return;
  }

  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('checkout-item');
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="checkout-item-details">
        <h4>${item.name}</h4>
        <p>Rp ${item.price.toLocaleString()}</p>
      </div>
    `;
    checkoutItemsContainer.appendChild(itemElement);
    total += item.price;
  });

  totalPriceElement.innerText = "Total: Rp " + total.toLocaleString();
}

function confirmOrder() {
  // Tampilkan loader
  document.getElementById('loader').style.display = 'flex';

  setTimeout(() => {
    // Simulasi loading selesai
    localStorage.removeItem('cart'); // Kosongkan keranjang
    window.location.href = "pay.html"; // Pindah ke halaman pembayaran
  }, 2000);
}

document.addEventListener("DOMContentLoaded", loadCheckoutItems);

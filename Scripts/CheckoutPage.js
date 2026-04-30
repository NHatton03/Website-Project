function goToCheckout() {
    window.location.href = "Checkout.html";
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    cart.push({ name, price });
    saveCart();
    alert(name + " added to cart!");
}

function displayCart() {
    const cartContainer = document.getElementById("cartItems");
    const totalContainer = document.getElementById("total");

    if (!cartContainer) return;

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.name + " - €" + item.price;
        cartContainer.appendChild(div);
        total += item.price;
    });

    totalContainer.textContent = "Total: €" + total.toFixed(2);
}

// Run when page loads
document.addEventListener("DOMContentLoaded", displayCart);
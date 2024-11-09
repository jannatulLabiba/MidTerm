// Function to add items to the cart
function addToCart(productName, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get the cart or empty array
    cart.push({ name: productName, price: price, image: imageUrl }); // Add the new item
    localStorage.setItem('cart', JSON.stringify(cart)); // Save back to local storage
    alert('Product added to cart!');
}

function displayCartItems() {
const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get the cart or empty array
const cartContainer = document.getElementById('cart-container');

if (cart.length === 0) {
cartContainer.innerHTML = '<p>Your cart is empty.</p>';
} else {
let cartHTML = '';
cart.forEach(item => {
cartHTML += `
<div>
<img src="${item.image}" alt="${item.name}" style="width: 100px;">
<p>${item.name} - $${item.price}</p>
</div>`;

});
cartContainer.innerHTML = cartHTML; // Display cart items
}
}

// Call this function when the cart page loads
window.onload = displayCartItems;
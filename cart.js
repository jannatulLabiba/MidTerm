// Function to add items to the cart
function addToCart(productName, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get the cart or empty array
    cart.push({ name: productName, price: price, image: imageUrl }); // Add the new item
    localStorage.setItem('cart', JSON.stringify(cart)); // Save back to local storage
    alert('Product added to cart!');
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get the cart or empty array
    cart.splice(index, 1); // Remove the item at the given index
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart back to local storage
    displayCartItems(); // Refresh the cart display
}

// Function to display cart items on the page
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get the cart or empty array
    const cartContainer = document.getElementById('cart-container');

if (cart.length === 0) {
cartContainer.innerHTML = '<p>Your cart is empty.</p>';
} else {
let cartHTML = '';
    cart.forEach((item, index) => {
    cartHTML += `<div> <img src="${item.image}" alt="${item.name}" style="width: 100px;">
    <p>${item.name} - $${item.price}</p>
    <button onclick="removeFromCart(${index})">Remove</button>
    </div> `;

});
cartContainer.innerHTML = cartHTML; // Display cart items
   
}
}

// Call this function when the cart page loads
window.onload = displayCartItems;
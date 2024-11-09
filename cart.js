// Function to adjust quantity
function adjustQuantity(productName, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productIndex = cart.findIndex(item => item.name === productName);
   
    if (productIndex === -1) return; // Product not found in cart

    let currentQuantity = cart[productIndex].quantity || 1;

    // Update quantity based on the change, but not below 1 or above 3
    currentQuantity = Math.max(1, Math.min(currentQuantity + change, 3));

    cart[productIndex].quantity = currentQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the displayed quantity on the product page
    document.getElementById(productName.toLowerCase().replace(/\s+/g, '-') + '-quantity').textContent = currentQuantity;
}

// Function to add items to the cart
function addToCart(productName, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex === -1) {
        // If product is not in the cart, add it with a quantity of 1
        cart.push({ name: productName, price: price, image: imageUrl, quantity: 1 });
    } else {
        // If product is already in the cart, increase its quantity by 1 (up to 3)
        if (cart[productIndex].quantity < 3) {
            cart[productIndex].quantity++;
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

// Function to display cart items (called on the cart page)
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let cartHTML = '';
        cart.forEach(item => {
        cartHTML += `<div> <img src="${item.image}" alt="${item.name}" style="width: 100px;">
                    <p>${item.name} - $${item.price} x ${item.quantity}</p>
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                    </div> `;
    });
    cartContainer.innerHTML = cartHTML;
    }
}

// Function to remove an item from the cart
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Refresh the cart display
}

// Call this function when the cart page loads
window.onload = displayCartItems;
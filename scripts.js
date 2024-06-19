let cart = [];

function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('checkout-button').disabled = true;
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        document.getElementById('checkout-button').disabled = false;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert('Thank you for your order!');
    cart = [];
    updateCart();
}

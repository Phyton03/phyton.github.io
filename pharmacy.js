function addToCart(productName) {
    const cartItems = document.getElementById('cartItems');
    const newItem = document.createElement('li');
    newItem.textContent = productName;
    cartItems.appendChild(newItem);
}

async function setProductToCart(product_id, customizations, quantity) {
    const cart = await loadCart();
    cart.push({product_id, customizations, quantity});
    saveCart(cart);
}

async function addQuantityToCart(index) {
    const cart = await loadCart();
    cart[index].quantity++;
    saveCart(cart);
}

async function removeQuantityFromCart(index) {
    const cart = await loadCart();
    cart[index].quantity--;
    if (cart[index].quantity <= 0)
        return deleteProductFromCart(index);
    saveCart(cart);
}

async function deleteProductFromCart(index) {
    const cart = await loadCart();
    cart.splice(index, 1);
    saveCart(cart);
}

async function updateCustomizations(index, customizations) {
    const cart = await loadCart();
    cart[index].customizations = customizations;
    saveCart(cart);
}

async function loadCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
    localStorage.removeItem("cart");
}


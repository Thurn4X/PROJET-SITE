const cache = fetch("datas/products.json").then(response => response.json())

async function loadProducts() {
    return await cache
}

async function loadProduct(id) {
    const products = await loadProducts();
    return products.find(product => product.id === id);
}




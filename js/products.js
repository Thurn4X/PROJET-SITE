async function main() {

    const product_list = document.querySelector("#product-list")

    // fetch the products and place them in the page
    const products = await loadProducts()

    const product_template = document.createElement("div")
    product_template.innerHTML = await fetch("partials/product.htm").then(response => response.text())

    products.forEach(product => {
        const product_template_clone = product_template.cloneNode(true)
        product_template_clone.querySelector("[slot=name]").innerHTML = product.name
        product_template_clone.querySelector("[slot=price]").innerHTML = product.price + "€"
        product_template_clone.querySelector("[slot=description]").innerHTML = product.description
        product_template_clone.querySelector("[slot=image-src]").src = "products_images/" + product.id + ".jpg"
        product_template_clone.querySelector("[slot=link-href]").href = "product.html?id=" + product.id

        product_list.appendChild(product_template_clone)
    })
}


main()
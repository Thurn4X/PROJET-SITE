async function main() {

    const product_list = document.querySelector("#cart-list")

    // get the cart and place it in the page
    const cart_products = await loadCart()

    if (cart_products.length === 0) {
        document.querySelector("[slot=empty-cart]").style.display = "block"
        return
    }

    document.querySelector("[slot=cart]").style.display = "flex"

    const product_template = document.createElement("div")
    product_template.innerHTML = await fetch("partials/product_cart.htm").then(response => response.text())


    document.querySelector("[slot=total-quantity]").innerHTML = cart_products
        .reduce((acc, product) => acc + parseInt(product.quantity), 0)

    let total_price = 0
    for (const cart_product of cart_products) {
        const product = await loadProduct(cart_product.product_id)
        total_price += product.price * cart_product.quantity
    }
    document.querySelector("[slot=total-price]").innerHTML = total_price + "€"

    document.querySelector("[slot=clear-cart-cb]").addEventListener("click", () => {
        clearCart()
        location.reload()
    })

    // noinspection ES6MissingAwait
    cart_products.forEach(async (cart_product, index) => {
        const product = await loadProduct(cart_product.product_id)
        const item_template_clone = product_template.cloneNode(true)

        item_template_clone.querySelector("[slot=name]").innerHTML = product.name
        item_template_clone.querySelector("[slot=name]").href = "product.html?id=" + product.id


        const canvas = item_template_clone.querySelector("[slot=canvas-bg]")
        canvas.style.backgroundImage = "url(products_images/" + product.id + ".jpg)"
        const customisable = new CustomisableCanvas(canvas, customisable => {
            updateCustomizations(index, customisable.saveCustomizations())
        })
        customisable.loadCustomizations(cart_product.customizations)


        item_template_clone.querySelector("[slot=price]").innerHTML = product.price + "€"
        item_template_clone.querySelector("[slot=description]").innerHTML = product.description
        item_template_clone.querySelector("[slot=quantity]").innerHTML = cart_product.quantity
        item_template_clone.querySelector("[slot=total-price]").innerHTML = cart_product.quantity * product.price + "€"

        item_template_clone.querySelector("[slot=add-quantity-cb]").addEventListener("click", () => {
            addQuantityToCart(index)
            window.location.reload()
        })
        item_template_clone.querySelector("[slot=remove-quantity-cb]").addEventListener("click", () => {
            removeQuantityFromCart(index)
            window.location.reload()
        })
        item_template_clone.querySelector("[slot=delete-cb]").addEventListener("click", () => {
            deleteProductFromCart(index)
            window.location.reload()
        })

        product_list.appendChild(item_template_clone)
    })



}


main()



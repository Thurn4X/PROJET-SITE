async function main() {
    const product_id = parseInt(new URLSearchParams(window.location.search).get('id'))
    const product = await loadProduct(product_id)
    console.log(product)

    document.querySelector("[slot=name]").innerHTML = product.name
    document.querySelector("[slot=price]").innerHTML = product.price + "€"
    document.querySelector("[slot=description]").innerHTML = product.description
    const canvas = document.querySelector("[slot=canvas-bg]");
    canvas.style.backgroundImage = "url(products_images/" + product.id + ".jpg)"

    const customisable = new CustomisableCanvas(canvas)

    document.querySelector("[slot=add-text-customisation]").addEventListener("click", () => {
        const input = document.querySelector("[slot=text-customisation]")
        if (input.value.trim().length <= 0)
            return
        customisable.addText(input.value, document.querySelector("[slot=text-color-customisation]").value)
        input.value = ""
        customisable.render()
    })


    document.querySelector("[slot=add-to-cart-cb]").addEventListener("click", () => {
        setProductToCart(product_id, customisable.saveCustomizations(),
            document.querySelector("input[name=quantity]").value)
        if (window.confirm("Le produit a bien été ajouté au panier, voulez vous consulter votre panier ?"))
            window.location.href = "cart.html"
    })


}


main()
let ProductsInCart = localStorage.getItem("ProductsInCart")
let allProducts = document.querySelector(".products")

if(ProductsInCart){
    let item = JSON.parse(ProductsInCart) ;
    drawCartProducts(item);drawCartProducts(item);
 
}

function drawCartProducts(products){
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="products-img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
        <h1 class="ttitleprodact">${item.title}</h1>
            <h3 class="coloritem">${item.color}</h3>
            <p class="pargraph">${item.pargraph}</p>
            <h2 class="price"> price: ${item.price}</h2>
        </div>
        <div class="product_item_action">
        <button class="add_to_cart" onClick="removeFromCart(${item.id})">Remove From Cart</button>
        </div>
    </div>`

    })
    allProducts.innerHTML = y;
}
function removeFromCart(id) {
    let items = JSON.parse(ProductsInCart);
    let productIndex = items.find((item) => item.id === id)
    if (productIndex!==-1) {
       items.splice(productIndex.id,productIndex.id+1)
       localStorage.setItem("ProductsInCart", JSON.stringify(items))
       let ProductsInCarts =JSON.parse(localStorage.getItem("ProductsInCart"))
       drawCartProducts(ProductsInCarts)
       location.reload()
    }
}


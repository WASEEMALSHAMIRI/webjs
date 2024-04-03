
let userIn = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")

if (localStorage.getItem("username")){
    links.remove()
    userIn.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})
////////////////////////////////////////////////////////////////////////////////
let allProducts = document.querySelector(".products")
let products = [
    {
        id:0,
        title: "LAPTOP",
        color: "black",
        imageUrl : "./Images/lapgam.jpeg",
        pargraph :"Processor: Intel Core i7-12800H  Graphic card: Nvidia GeForce RTX 3070 Ti.Random memory: 16 GB of DDR5 with a frequency of 4800MhzStorage capacity: 1TB SSD (M.2 NVMe PCIe 4.0 x4).Screen: 15.6-inch screen with QHD resolution and 240 Hz refresh rate, with 100% DCI-P3 color coverage.",
        price:"1500$"
        
    },
    {
        id:1,
        title: "i phone 15 pro max",
        color: "Grey",
        imageUrl : "./Images/iphone.avif",
        pargraph :"Dimensions: The dimensions of this iPhone are 159.9 mm in height, 76.7 mm in width, 8.3 mm in thickness, and a relatively heavy weight of 221 grams. Networks: This pioneering phone supports up to 5G networks, including 2G, 3G, 4G, and 5G, and also supports the installation of a Nano-SIM with an e-SIM.",
        price:"1000$"
    },
    {
        id:2,
        title: " smart watch",
        color: "white",
        imageUrl : "./Images/smartwa.webp",
        pargraph :"The ability to play various media, such as photos, video clips, and other audio files via its smart screen. Performing various mathematical calculations through the calculator system available in the smart watch. Knowing temperatures, history, humidity levels, and other digital services.",
        price:"500$"
    },
    {
        id:3,
        title: "honor Magic",
        color: "pank",
        imageUrl : "./Images/honormagic.webp",
        pargraph :"HONOR Magic 6 Pro phone specifications; Screen, LTPO OLED 6.8 inches; Resolution, 2800 x 1280 pixels; Processor, Qualcomm Snapdragon 8 Gen 3; RAM, 12/... Pros and cons LTPO OLED screen with a refresh rate of 120 Hz ⋅ Powerful processor for outstanding performance ⋅ Does not support the installation of a memory card",
        price:"1100$"
    },
       
    {
        id:4,
        title: "Galaxy Buds Pro",
        color: "black",
        imageUrl : "/Images/earbot.jpg",
        pargraph :"Samsungs Galaxy Buds 2 Pro wireless earbuds are an advanced solution for a unique listening experience. These headphones come with Bluetooth technology for seamless, wireless connectivity, with active noise cancellation to provide a distortion-free listening experience. It features high-quality 24-bit Hi-Fi audio,",
        price:"400$"
    },
    {
        id:5,
        title: "IPad Pro 11",
        color: "white",
        imageUrl : "./Images/taplate.webp",
        pargraph :" iPad Pro 11  comes with an octa-core processor, an 11-inch screen size with a resolution of 1668 x 2388 pixels, in addition to the main camera with a 12-megapixel imaging resolution and a 12-megapixel front selfie camera. The battery capacity is 7538 mAh, and the capacity The internal storage memory is 128GB, 256GB, or 2TB",
        price:"900$"
    },
    {
        id:6,
        title: "S23 Ultra",
        color: "pank",
        imageUrl : "./Images//23ultra.avif",
        pargraph :"S23 Ultra: - The Samsung Galaxy S23 Ultra phone comes with a 6.8-inch Dynamic AMOLED 2X screen with QHD+ resolution, a Super Smooth refresh rate of 120 Hz (1~120 Hz), and a touch sampling rate of 240 Hz in gaming mode.",
        price:"1500$"
    },
]
function drawItems (){
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="products-img" src="${item.imageUrl}" alt="">
        <div class="product_item_desc">
            <h1 class="ttitleprodact">${item.title}</h1>
            <h3 class="coloritem"> Color: ${item.color}</h3>
            <p class="pargraph">${item.pargraph}</p>
            <h2 class="price"> price: ${item.price}</h2>
           
        </div>
        <div class="product_item_action">
         <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
         <i class="far fa-heart fav"></i>
        </div>
    </div>
        `
    })
    allProducts.innerHTML = y;
}
drawItems ()

let cartProductDiv = document.querySelector(".cartspro div ")
let viewbage = document.querySelector(".viewbage")



let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;})
    viewbage.style.display = "block";
    viewbage.innerHTML = addedItem.length;
}



  if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            

            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
            let cartProductsLength = document.querySelectorAll(".cartspro div p")
          
            viewbage.style.display ="block";
            viewbage.innerHTML = cartProductsLength.length;
        }
    }else {
        window.location ="login.html"
    }





let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".cartspro")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block";
         }
     } 
}




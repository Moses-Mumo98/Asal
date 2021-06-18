function activateNav() {
  let menuBtn = document.getElementById("menu-btn");
  let sideNav = document.getElementById("side-nav");

  menuBtn.addEventListener("click", () => {
    sideNav.classList.toggle("nav-active");
  });
}

activateNav();
let shoppingProducts=[
  {
    id: 1,
    
    price: 300,
    name: "HIVES",
    description: "DURABLE AND AFFORDABLE HIVES", 
    Img: "honey13.jpg",
  },
  {
    id: 2,
    
    price: 350,
    name: "HONEY",
    description: "Pure natural honey", 
    Img: "honey9.jpg",
  },
  {
    id: 3,
    
    price: 300,
    name: "HONEY COMB",
    description: "YUMMY", 
    Img: "honey11.jpg",
  },
  {
    id: 4,
    
    price: 200,
    name: "BREAD",
    description: "BROWN BREAD", 
    Img: "honey17.jpg",
  },
  {
    id: 5,
    
    price: 250,
    name: "BREAD",
    description: "BROWN AND WHITE BREAD", 
    Img: "honey18.jpg",
  },
  {
    id: 6,
    
    price: 250,
    name: "HONEY COMB",
    description: "NO ANY ADDICTIVES ADDED", 
    Img: "honey15.jpg",
  },
  {
    id: 7,
    
    price: 400,
    name: "HONEY DIPPER",
    description: "WOODEN HONEY DIPPER ", 
    Img: "honey dipper.jpg",
  },
  {
    id: 8,
    
    price: 400,
    name: "WHITE HONEY",
    description: "PURE NATURAL WHITE HONEY ", 
    Img: "WHITE HONEY.jpg",
  },
  {
    id: 9,
    
    price: 800,
    name: "Bee Suit",
    description: "", 
    Img: "bee suit.jpg",
  },
  {
    id: 10,
    
    price: 500,
    name: "Hives",
    description: "DURABLE LANGSTROTH HIVES ", 
    Img: "langstroth hive.jpg",
  },
  {
    id: 11,
    
    price: 150,
    name: "BRUSH",
    description: "BRISTLE HAIR HIVE BRUSH BEE HIVE BRUSH WITH A WOODEN HANDLE", 
    Img: "hive brush.jpg",
  },
  {
    id: 12,
    
    price: 250,
    name: "BEE WAX",
    description: "NATURAL YELLOW PURE BEE WAX", 
    Img: "bee wax.jpg",
  },
];
function createProductCard(product){
  return `
  <div class="card" style="width: 15rem;">
  <img src="${product.Img}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <span class="btn btn-warning fw-bold">$&nbsp; $&nbsp; ${product.price}</span>
    <button class="btn btn-primary" onClick="addToCart(${product.id})">Add to cart</button>
  </div>
</div>
  
  ` ;
}

 function populateProducts() {
   let productsElement = document.getElementById("products-container");

   let productcards = shoppingProducts.map(item => createProductCard(item));
   productsElement.innerHTML= productcards;
 }

 populateProducts();

 let cart = [];

function createCartItem(product) {
  return `
   <div class="selected-item">
      <img src=${product.Img} alt="">
      <p>${product.name}</p>
      <p>Price: $. ${product.price}</p>
    </div>
  `;
}
function populateCart() {
  let cartBody = document.getElementById("selected-items");
  let selectedProducts;
  let cartCount = document.getElementById("total-items");
  let numOfItems = 0;
  let totalPrice = document.getElementById("total-price");
  let total = 0;


  if(cart.length){
    selectedProducts = cart.map((product) => createCartItem(product));
    numOfItems = cart.length;
    let productPrices = cart.map((product) => product.price);

    for (x = 0; x < productPrices.length; x++) {
      total = total + productPrices[x];
    }

  } else{
    selectedProducts = `<p>YOU HAVE NOT SELECTED ANY PRODUCT</p>`;
    numOfItems = 0;
    total=0;
  }
  cartBody.innerHTML = selectedProducts;
  cartCount.innerText = numOfItems;
  totalPrice.innerText = `Total: $. ${total}`;

}
populateCart();

function addToCart(id) {
  let product = shoppingProducts.find((product) => product.id == id);

  if (cart.includes(product)) {
    return;
  } else {
    cart.push(product);
  }

  populateCart();
}

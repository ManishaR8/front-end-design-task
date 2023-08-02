
fetch('./index.json')
  .then(response => response.json())
  .then(completeData => {
    let data1 = "";

    completeData.data.forEach(category => {
      data1 += `<h1 class="title">${category.name}</h1>`;

      category.productList.forEach(product => {
        data1 += `<div class="card-cont">
        
        <div class="card">
            <p class="product-name">name : ${product.name}</p>
            <p class="product-price">price: ${product.price}</p>
        </div>
        <div class="cont-btn">
            <button type="button" class="add-cart" >Add to the cart</button>
            <button type="button"  class="remove-cart" >Remove from cart</button>
        </div>
        </div> `;
      });
    });


    document.getElementById('container-cont').innerHTML = data1;

    const addToCart = document.querySelectorAll('.add-cart');
    const removeFromCart = document.querySelectorAll('.remove-cart');

    addToCart.forEach(button => {
        button.addEventListener('click', addCart);
    });

    removeFromCart.forEach(button => {
        button.addEventListener('click', removeCart);
    });


  })
  .catch(err => {
    console.log(err);
  });


let cart = {};
let categoryCount = {};


function addCart(event) {
 
  const productName = event.target.parentElement.previousElementSibling.querySelector('.product-name').textContent;

  if (cart[productName]) {
    cart[productName]++;
  } else {
    cart[productName] = 1;
  }

  let totalCount = 0;
  for (let product in cart) {
    totalCount += cart[product];
  }
  console.log("Product added to cart: " + productName);
  console.log("List of products present in cart array:", cart);
  console.log("Total number of products in cart:", totalCount);
 
}

function removeCart(event) {
    const cardContElement = event.target.closest('.card-cont');
    const productName = cardContElement.querySelector('.product-name').textContent;
  
    if (cart[productName] && cart[productName] > 0) {
      cart[productName]--;
  
    }
  
    let totalCount = 0;
    for (let product in cart) {
      totalCount += cart[product];
    }
  
    console.log("Product removed from cart: " + productName);
    console.log("List of products present in cart array:", cart);
    console.log("Total number of products in cart:", totalCount);
    
  }
  

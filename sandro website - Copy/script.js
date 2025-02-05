
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=>{
  navbar.classList.toggle('active');
  search.classList.remove('active');

}

let  search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');

}

window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// main-product-page.html (Adding to cart with localStorage)
document.getElementById("addToCartBtn").addEventListener("click", function() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  let product = {
      name: "Awesome Product",
      price: 49.99,
      quantity: 1
  };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart-page.html"; // Redirect to the Cart Page
});


// Sample product data
const products = [
  { name: "T800 Smart Watch", img: "images/p1.jpg", originalPrice: "LKR2850.00", discountedPrice: "LKR1999.99", link: "product1.html" },
  { name: "Gadget XYZ", img: "images/p2.jpg", originalPrice: "LKR3850.00", discountedPrice: "LKR2999.99", link: "product2.html" },
  { name: "Headphones Pro", img: "images/p3.jpg", originalPrice: "LKR4500.00", discountedPrice: "LKR3499.99", link: "product3.html" },
  // Add up to 30 products here or duplicate the existing ones
];

function generateProducts() {
  const productsContainer = document.getElementById('productsContainer');

  products.forEach((product, index) => {
      const productBox = document.createElement('div');
      productBox.classList.add('box');

      productBox.innerHTML = `
          <a href="${product.link}" aria-label="View details for ${product.name}">
              <img src="${product.img}" alt="${product.name}" loading="lazy" />
          </a>
          <h3><a href="${product.link}">${product.name}</a></h3>
          <h4>${product.originalPrice}</h4>
          <div class="content">
              <span>${product.discountedPrice}</span>
              <button class="btn-add-to-cart" aria-label="Add ${product.name} to cart">Add To Cart</button>
          </div>
      `;

      productsContainer.appendChild(productBox);
  });
}

// Call the function to generate products when the page loads
generateProducts();

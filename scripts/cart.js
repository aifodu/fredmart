const openCartButton = document.getElementById("cart-trigger");
const closeCartButton = document.querySelector(".close");
const cart = document.querySelector(".cart");
const products = document.querySelector(".cart-items");
const cartContent = document.getElementById("cart-content");

let customerCart = [];
let cartProducts = [];

function findProductById(id) {
  const products = JSON.parse(localStorage.getItem("fredmartProducts"));
  return [...products].find(product => {
    return product.id == id;
  });
}

function openCart(e) {
  cartProducts = [];
  customerCart.forEach(id => {
    cartProducts.push(findProductById(id));
  });

  let newCartList = "";
  cartContent.innerHTML = "";

  cartProducts.forEach(product => {
    const item = `
    <article>
        <img
          src="${product.image}"
        />
        <div>
          <h4>${product.name}</h4>
          <p>Price: ${product.price}</p>
          <p>Subtotal: Do this at home</p>
        </div>
      </article>
    `;
    newCartList += item;
  });

  cartContent.innerHTML = newCartList;

  if (cartProducts.length > 0) {
    cart.classList.add("open");
    setTimeout(() => {
      cart.classList.add("animate");
    }, 150);
  }
}

function closeCart() {
  cart.classList.remove("animate");
  setTimeout(() => {
    cart.classList.remove("open");
  }, 150);
}

function addProductToCart(e) {
  const product = e.target.dataset.id;
  customerCart = [...customerCart, product];
  products.innerText = customerCart.length;
}

openCartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);

window.onload = event => {
  setTimeout(() => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    console.log("");
    [...addToCartButtons].forEach(button => {
      button.addEventListener("click", addProductToCart);
    });
  }, 100);
};

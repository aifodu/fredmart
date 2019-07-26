const productList = document.getElementById("product-list");

fetch("../database/products.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(products) {
    generateProductCards(products);
  });

function generateProductCards(products) {
  let newProductList = "";
  products.forEach(product => {
    const newProduct = `
        <article class="product">
            <span>${product.category}</span>
            <img
            src="${product.image}"
            alt="${product.name}"
            />
            <p class="name">${product.name}</p>
            <p class="description">${product.description}</p>
            <h2>N${product.price}</h2>
            <button data-id="${product.id}">Add to Cart</button>
        </article>
    `;
    newProductList += newProduct;
  });
  console.log(newProductList);
  productList.innerHTML = newProductList;
}

`
    <article class="product">
        <span>Category</span>
        <img
          src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
          alt=""
        />
        <p class="name">Name</p>
        <p class="description">Description</p>
        <h2>Price</h2>
        <button>Add to Cart</button>
    </article>
  `;

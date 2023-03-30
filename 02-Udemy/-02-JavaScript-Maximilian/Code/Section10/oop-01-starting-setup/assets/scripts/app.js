class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}
class ProductList {
  products = [
    new Product("Product 1", "https://picsum.photos/200/300", "product 1", 100),
    new Product("Product 2", "https://picsum.photos/200/300", "Product 2", 200),
    new Product("Product 3", "https://picsum.photos/200/300", "Product 3", 300),
    new Product("Product 4", "https://picsum.photos/200/300", "product 4", 400),
  ];
}
const productList = {
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
  },
};

productList.render();

const productList = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      quantity: 1,
      image: "https://picsum.photos/200/300",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.image}" alt="${prod.name}">
          <div class="product-item__content">
            <h2>${prod.name}</h2>
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

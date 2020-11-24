var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/socks.jpg",
    inStock: true,
    on_sale: true,
    details: ["80% cotton", "20% polyester", "Gender Neutral"],
    variants: [
      {
        variantID: 2234,
        variantColor: "green",
        variantImage: "./assets/socks.jpg",
      },
      {
        variantID: 2235,
        variantColor: "blue",
        variantImage: "./assets/socks-blue.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
  },
});

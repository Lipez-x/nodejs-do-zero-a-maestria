const connection = require("../db/connection");

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = connection.db().collection("products").insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    });
    return product;
  }

  static getProducts() {
    const products = connection.db().collection("products").find().toArray();

    return products;
  }
}

module.exports = Product;

const connection = require("../db/connection");

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = connection.db().collection("products").insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
    });
    return product;
  }
}

module.exports = Product;

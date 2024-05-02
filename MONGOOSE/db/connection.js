const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/mongoosenode");
  console.log("Conectou ao MongoDB com Mongoose!");
}

main().catch((err) => {
  console.error(err);
});

module.exports = mongoose;

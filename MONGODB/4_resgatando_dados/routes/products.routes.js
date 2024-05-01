const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductController.js");

router.get("/", ProductsController.showProducts);
router.get("/create", ProductsController.createProduct);
router.post("/create", ProductsController.createProductPost);

module.exports = router;

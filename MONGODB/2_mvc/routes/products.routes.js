const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductController.js");

router.get("/", ProductsController.showProducts);

module.exports = router;

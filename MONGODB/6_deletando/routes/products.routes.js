const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductController.js");

router.get("/", ProductsController.showProducts);
router.get("/:id", ProductsController.getProduct);
router.get("/create", ProductsController.createProduct);
router.post("/remove/:id", ProductsController.removeProduct);
router.post("/create", ProductsController.createProductPost);

module.exports = router;

const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/ProductController.js");

router.get("/create", ProductsController.createProduct);
router.post("/create", ProductsController.createProductPost);
router.post("/edit", ProductsController.editProductPost);
router.get("/edit/:id", ProductsController.editProduct);
router.post("/remove/:id", ProductsController.removeProduct);
router.get("/:id", ProductsController.getProduct);
router.get("/", ProductsController.showProducts);

module.exports = router;

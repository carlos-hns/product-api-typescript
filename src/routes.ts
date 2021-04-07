import { Router } from 'express';
import { productController } from './infrastructure/repository/product';

const router = Router();

router.get("/products", (req, res) => {
  return productController.getProducts(req, res);
});

router.get("/products/:id", (req, res) => {
  return productController.getProductById(req, res);
});

router.post("/products", (req, res) => {
  return productController.createProduct(req, res);
});

router.delete("/products/:id", (req, res) => {
  return productController.deleteProduct(req, res);
});

router.patch("/products/:id", (req, res) => {
  return productController.updateProduct(req, res);
});

export { router }
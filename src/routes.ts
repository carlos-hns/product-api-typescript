import { Router } from 'express';
import { productController } from './instantiate';


const router = Router();

router.get("/products", (req, res) => {
  return productController.getProducts(req, res);
});

router.get("/products/:product_id", (req, res) => {
  return productController.getProductById(req, res);
});

router.post("/products", (req, res) => {
  return productController.addProduct(req, res);
});

router.delete("/products/:product_id", (req, res) => {
  return productController.deleteProduct(req, res);
});

router.patch("/products/:product_id", (req, res) => {
  return productController.updateProduct(req, res);
});

export { router }
import { ProductController } from "../../../controllers/product.controller";
import { ProductRepository } from "./product.repository";

const productRepository = new ProductRepository();
const productController = new ProductController(productRepository);

export { productController };

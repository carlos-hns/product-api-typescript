import { ProductService } from "./application/service/product.service";
import { ProductModel } from "./infrastructure/database/schema/product.schema";
import { ProductEntityMapper } from "./infrastructure/entity/mapper/product.mapper";
import { ProductRepository } from "./infrastructure/repository/product.repository";
import { ProductController } from "./ui/controllers/product.controller";

const model = ProductModel;
const mapper = new ProductEntityMapper();
const productRepository = new ProductRepository(model, mapper);
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

export { productController };
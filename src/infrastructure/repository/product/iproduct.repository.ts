import { Product } from "../../../model/Product";

export interface IProductRepository {
  getProducts(): Promise<Array<Product>>;
  getProductById(id: string): Promise<Product>;
  createProduct(product: Product): Promise<void>;
  updateProduct(product: Product): Promise<void>;
  deleteProduct(id: string): Promise<void>;
}
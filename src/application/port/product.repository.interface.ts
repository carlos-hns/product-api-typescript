import { Product } from "../domain/model/product";
import { IRepository } from "./repository.interface";

export interface IProductRepository extends IRepository<Product> { }
import { Product } from "../../application/domain/model/product";
import { IService } from "./service.interface";

export interface IProductService extends IService<Product> {}
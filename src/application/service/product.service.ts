import { IProductRepository } from "../port/product.repository.interface";
import { Product } from "../domain/model/product";
import { CreateProductValidator } from "../domain/validator/product/create.product.validator";
import { IProductService } from "../port/product.service.interface";
import { IQuery } from "../port/query.interface";
import { UpdateProductValidator } from "../domain/validator/product/update.product.validator";
import { ProductNotFoundException } from "../domain/exception/ProductNotFoundException";
import { inject, injectable } from "inversify";
import { Identifier } from "../../di/identifiers";

@injectable()
export class ProductService implements IProductService {
  
  constructor(
    @inject(Identifier.PRODUCT_REPOSITORY) private readonly _productRepository: IProductRepository
  ) {}

  public async add(item: Product): Promise<Product> | undefined {
    try {
      CreateProductValidator.validate(item);
      const result: Product | undefined = await this._productRepository.create(item);
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public getAll(query: IQuery): Promise<Product[]> {
    return this._productRepository.find(query);
  }

  public getById(id: string, query: IQuery): Promise<Product> {
    query.addFilter({ _id: id });
    return this._productRepository.findOne(query);
  }

  public async update(item: Product): Promise<Product> {
    try {
      UpdateProductValidator.validate(item);
      const result: Product | undefined = await this._productRepository.update(item);
      if(result == undefined) throw new ProductNotFoundException("Produto não encontrado!");
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public remove(id: string): Promise<boolean> {
    return this._productRepository.delete(id);
  }
  
  public count(query: IQuery): Promise<number> {
    throw new Error("Method not implemented.");
  }

}
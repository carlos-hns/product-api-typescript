import "reflect-metadata";
import { Container } from "inversify";
import { Product } from "../application/domain/model/product";
import { ProductService } from "../application/service/product.service";
import { ProductModel } from "../infrastructure/database/schema/product.schema";
import { ProductEntityMapper } from "../infrastructure/entity/mapper/product.mapper";
import { ProductEntity } from "../infrastructure/entity/product.entity";
import { IEntityMapper } from "../infrastructure/port/entity.mapper.interface";
import { ProductRepository } from "../infrastructure/repository/product.repository";
import { ProductController } from "../ui/controllers/product.controller";
import { Identifier } from "./identifiers";
import { IProductService } from "../application/port/product.service.interface";
import { IProductRepository } from "../application/port/product.repository.interface";

class IoC {
  private readonly _container: Container;

  constructor() {
    this._container = new Container();
    this.initDependencies();
  }

  get container() {
    return this._container;
  }

  private initDependencies(): void {

    // Controllers
    this._container.bind<ProductController>(Identifier.PRODUCT_CONTROLLER).to(ProductController).inSingletonScope();

    // Service 
    this._container.bind<IProductService>(Identifier.PRODUCT_SERVICE).to(ProductService).inSingletonScope();

    // Repositories
    this._container.bind<IProductRepository>(Identifier.PRODUCT_REPOSITORY).to(ProductRepository).inSingletonScope();
  
    // Models
    this._container.bind(Identifier.PRODUCT_MODEL).toConstantValue(ProductModel);
  
    // Mappers
    this._container.bind<IEntityMapper<Product, ProductEntity>>(Identifier.PRODUCT_ENTITY_MAPPER).to(ProductEntityMapper).inSingletonScope();

  }
}

export const DIContainer = new IoC().container
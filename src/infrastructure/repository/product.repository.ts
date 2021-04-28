import { Query } from './query/query';
import { Product } from "../../application/domain/model/product";
import { IProductRepository } from "../../application/port/product.repository.interface";
import { IQuery } from "../../application/port/query.interface";
import { ProductEntity } from "../entity/product.entity";
import { IEntityMapper } from "../port/entity.mapper.interface";
import { BaseRepository } from "./base/base.repository";

export class ProductRepository extends BaseRepository<Product, ProductEntity> implements IProductRepository {
  
  constructor(
    readonly _model: any,
    readonly _mapper: IEntityMapper<Product, ProductEntity>
  ) {
    super(_model, _mapper)
  }

  create(item: Product): Promise<Product> {
    return super.create(item);
  }

  find(query: IQuery): Promise<Product[]> {
    return new Promise<Array<Product>>((resolve, reject) => {
      super.find(query)
        .then(async (result: Array<Product>) => {
          if (!result) return resolve(undefined);
          return resolve(result);
        })
        .catch(err => reject(super.mongoDBErrorListener(err)));
    });
  }

  findOne(query: IQuery): Promise<Product> {
    return new Promise<Product | undefined>((resolve, reject) => {
      super.findOne(query)
        .then(async (result: Product | undefined) => {
          if (!result) return resolve(undefined);
          return resolve(result);
        })
        .catch(err => reject(super.mongoDBErrorListener(err)));
    });
  }
  
  update(item: Product): Promise<Product> {
    return new Promise<Product | undefined> ((resolve, reject) => {
      super.update(item)
      .then((product: Product | undefined) => {
        if(product == undefined) resolve(undefined);
        resolve(product);
      })
      .catch(err => reject(super.mongoDBErrorListener(err)));
    });
  }
  delete(id: string): Promise<boolean> {
    return super.delete(id);
  }
  count(query?: IQuery): Promise<number> {
    return super.count(query);
  }

}

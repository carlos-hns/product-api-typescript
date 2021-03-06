import { injectable } from "inversify";
import { Product } from "../../../application/domain/model/product";
import { IEntityMapper } from "../../port/entity.mapper.interface";
import { ProductEntity } from "../product.entity";

@injectable()
export class ProductEntityMapper implements IEntityMapper<Product, ProductEntity> {
  transform(item: any) {
    if(item instanceof Product) return this.modelToModelEntity(item);
    return this.jsonToModel(item);
  }
  modelToModelEntity(item: Product): ProductEntity {
    const result: ProductEntity = new ProductEntity();

    if(item.id !== undefined) result.id = item.id;
    if(item.name !== undefined) result.name = item.name;
    if(item.purchase_date !== undefined) result.purchase_date = item.purchase_date;
    if(item.purchase_place !== undefined) result.purchase_place = item.purchase_place;
    if(item.price !== undefined) result.price = item.price;
    if(item.invoice_image_url !== undefined) result.invoice_image_url = item.invoice_image_url;
    if(item.comment !== undefined) result.comment = item.comment;
    return result;
  }

  modelEntityToModel(item: ProductEntity): Product {
    throw new Error("Method not implemented.");
  }
  
  jsonToModel(json: any): Product {
    const result: Product = new Product();
    if(!json) return result;

    if(json.id !== undefined) result.id = json.id;
    if (json.created_at !== undefined) result.created_at = json.created_at
    if (json.updated_at !== undefined) result.updated_at = json.updated_at
    if(json.name !== undefined) result.name = json.name;
    if(json.purchase_date !== undefined) result.purchase_date = json.purchase_date;
    if(json.purchase_place !== undefined) result.purchase_place = json.purchase_place;
    if(json.price !== undefined) result.price = json.price;
    if(json.invoice_image_url !== undefined) result.invoice_image_url = json.invoice_image_url;
    if(json.comment !== undefined) result.comment = json.comment;

    return result;
  }
}


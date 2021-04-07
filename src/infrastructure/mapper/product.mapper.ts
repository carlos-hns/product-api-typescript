import { Product } from "../../model/Product";
import { ProductModel } from "../database/schema/product.schema";

export class ProductMapper {
  static mapProductModelToProduct(productObject: Object): Product {
    return new Product(
      productObject?.["_id"].toString(),
      productObject?.["name"],
      productObject?.["purchase_date"],
      productObject?.["purchase_place"],
      productObject?.["price"],
      productObject?.["invoice_image_url"],
      productObject?.["comment"]
    );
  }

  static mapProductToProductModel(product: Product): Object {
    return {
      _id: product?.["id"],
      name: product?.["name"],
      purchase_date: product?.["purchase_date"],
      purchase_place: product?.["purchase_place"],
      price: product?.["price"],
      invoice_image_url: product?.["invoice_image_url"],
      comment: product?.["comment"]
    }
  }
}

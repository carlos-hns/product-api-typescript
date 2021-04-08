import { Types } from "mongoose";
import { throws } from "node:assert";
import { Product } from "../../../model/Product";
import { InvalidParametherException } from "../../../utils/InvalidParametherException";
import { ProductNotFoundException } from "../../../utils/ProductNotFoundException";
import { ProductModel } from "../../database/schema/product.schema";
import { ProductMapper } from "../../mapper/product.mapper";
import { IProductRepository } from "./iproduct.repository";

export class ProductRepository implements IProductRepository {
  async getProducts(): Promise<Product[]> {    
    let productsMongoObject = await ProductModel.find({}).exec();
    let products = productsMongoObject.map((product) => ProductMapper.mapProductModelToProduct(product));
    if(products.length == 0) throw new ProductNotFoundException("Não existem produtos cadastrados.");
    return products;
  }

  async getProductById(id: string): Promise<Product> {
    let productMongoObject;
    try {
      productMongoObject = await ProductModel.findById(Types.ObjectId(id)).exec();
    } catch (error) {
      throw new InvalidParametherException("Formato de Id inválido.");
    }
    let product = ProductMapper.mapProductModelToProduct(productMongoObject);
    if(product?.["id"] === undefined) throw new ProductNotFoundException("Produto não cadastrado.");

    return product;
  }

  async createProduct(product: Product): Promise<void> {
    const mongoProduct = new ProductModel({
      id: product.id,
      name: product.name,
      purchase_date: product.purchase_date,
      purchase_place: product.purchase_place,
      price: product.price,
      invoice_image_url: product.invoice_image_url,
      comment: product.comment
    });

    (await mongoProduct.save()).execPopulate();

    try {
      await this.getProductById(mongoProduct._id.toString());
    } catch(error) {
      throw error;
    }
  }

  async updateProduct(product: Product): Promise<void> {
    const id = product.id;
    try {
      await this.getProductById(id);
    } catch (error) {
      throw error;
    }

    product.id = undefined;
    for (const item in product) {
      if(product?.[item] == undefined) {
          delete product[item];
        }
      }

    await ProductModel.updateOne({_id: Types.ObjectId( id)}, product).exec();
  }

  async deleteProduct(id: string): Promise<void> {    
    try {
      await this.getProductById(id);
    } catch (error) {
      throw error;
    }
    await ProductModel.deleteOne({_id: Types.ObjectId(id)}).exec();
  }
}
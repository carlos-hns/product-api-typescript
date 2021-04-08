import { Request, Response } from 'express';
import { IProductRepository } from '../infrastructure/repository/product/iproduct.repository';
import { Product } from '../model/Product';
import { ApiExceptionManager } from '../utils/api.exception.manager';

export class ProductController {
  constructor(private productRepository: IProductRepository) {}

  async getProducts(request: Request, response: Response): Promise<Response> {
    try {
      const products = await this.productRepository.getProducts();
      return response.status(200).json(products);
    } catch(error) {
      const handleError = ApiExceptionManager.build(error);
      response.status(handleError.code).json(handleError.toJSON());
    }
  }

  async getProductById(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    let product;
    try {
      product = await this.productRepository.getProductById(id);
      return response.status(200).json(product);
    } catch(error) {
      const handleError = ApiExceptionManager.build(error);
      return response.status(handleError.code).send(handleError.toJSON());
    }
  }

  async createProduct(request: Request, response: Response): Promise<Response> {
      const {
        name,
        purchase_date,
        purchase_place,
        price,
        invoice_image_url,
        comment
      } = request.body;

      const product = new Product(
        null,
        name,
        purchase_date,
        purchase_place,
        price,
        invoice_image_url,
        comment
      );

      try {
        await this.productRepository.createProduct(product);
        return response.status(200).send("Produto cadastrado com sucesso.");
      } catch (error) {
        const handleError = ApiExceptionManager.build(error);
        return response.status(handleError.code).json(handleError.toJSON());
      }
      
  }

  async deleteProduct(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    try {
      await this.productRepository.deleteProduct(id);
      return response.status(200).send("Produto removido com sucesso.")
    } catch (error) {
      const handleError = ApiExceptionManager.build(error);
      response.status(handleError.code).json(handleError.toJSON());
    }
  }

  async updateProduct(request: Request, response: Response): Promise<Response> {
    const {
      name,
      purchase_date,
      purchase_place,
      price,
      invoice_image_url,
      comment
    } = request.body;
  
    const id = request.params.id;

    const product = new Product(
      id,
      name,
      purchase_date,
      purchase_place,
      price,
      invoice_image_url,
      comment
    );

    try {
      await this.productRepository.updateProduct(product);
      return response.status(200).send("Produto atualizado com sucesso.");
    } catch (error) {
      const handleError = ApiExceptionManager.build(error);
      response.status(handleError.code).json(handleError.toJSON());
    }
  }
}
import { Request, Response } from 'express';
import { IProductRepository } from '../infrastructure/repository/product/iproduct.repository';
import { Product } from '../model/Product';

export class ProductController {
  constructor(private productRepository: IProductRepository) {}

  async getProducts(request: Request, response: Response): Promise<Response> {
    const products = await this.productRepository.getProducts();
    return response.status(200).json(products);
  }

  async getProductById(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    let product;
    try {
      product = await this.productRepository.getProductById(id);
    } catch(error) {
      if(error.message === "Formato de Id inválido.") {
        return response.status(400).send(error.message);
      } else if(error.message === "Produto não cadastrado.") {
        return response.status(404).send(error.message);
      }
    }
    return response.status(200).json(product);
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
      await this.productRepository.createProduct(product);
      return response.status(200).send("Produto cadastrado com sucesso.");
  }

  async deleteProduct(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    try {
      await this.productRepository.deleteProduct(id);
    } catch (error) {
      if(error.message === "Formato de Id inválido.") {
        return response.status(400).send(error.message);
      } else if(error.message === "Produto não cadastrado.") {
        return response.status(404).send(error.message);
      }
    }
    return response.status(200).send("Produto removido com sucesso.")
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
    } catch (error) {
      if(error.message === "Formato de Id inválido.") {
        return response.status(400).send(error.message);
      } else if(error.message === "Produto não cadastrado.") {
        return response.status(404).send(error.message);
      }
    }
    return response.status(200).send("Produto atualizado com sucesso.");
  }
}
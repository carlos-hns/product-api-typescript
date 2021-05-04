import { Response, Request } from "express";
import { Query } from "../../infrastructure/repository/query/query";
import { Product } from "../../application/domain/model/product";
import { IProductService } from "../../application/port/product.service.interface";
import { IQuery } from "../../application/port/query.interface";
import { ApiExceptionManager } from "../exception/api.exception.manager";
import { inject } from "inversify";
import { Identifier } from "../../di/identifiers";
import { controller, httpGet, httpPost, httpDelete, httpPatch ,request, response } from "inversify-express-utils";

@controller("/products")
export class ProductController {

  private readonly CREATED = 201;
  private readonly OK = 200;
  private readonly NO_CONTENT = 204;

  constructor(
    @inject(Identifier.PRODUCT_SERVICE) private readonly _productService: IProductService
  ) {}

  @httpPost("/")
  public async addProduct(@request() request: Request, @response() response: Response): Promise<Response> {
    try {
      const product: Product = new Product().fromJSON({...request.body});
      const result: Product | undefined = await this._productService.add(product);
      return response.status(this.CREATED).send(result.toJSON());
    } catch (err) {
      const handleError = ApiExceptionManager.build(err);
      return response.status(handleError.code).send(handleError.toJSON());
    }
  }

  @httpGet("/")
  public async getProducts(@request() request: Request, @response() response: Response): Promise<Response> {
    try {
      const query: IQuery = new Query().fromJSON(request.query);
      const result: Array<Product> = await this._productService.getAll(query);
      return response.status(this.OK).json(result);
    } catch(err) {
      const handleError = ApiExceptionManager.build(err);
      return response.status(handleError.code).send(handleError.toJSON());
    } finally {
      request.query = {}
    }
  }

  @httpGet("/:product_id")
  public async getProductById(@request() request: Request, @response() response: Response): Promise<Response> {
    try {
      const result: Product | undefined = 
        await this._productService.getById(
          request.params.product_id,
          new Query().fromJSON(request.query)
        );
      return response.status(this.OK).send(result.toJSON());
    } catch (err) {
      const handleError = ApiExceptionManager.build(err);
      return response.status(handleError.code).send(handleError.toJSON());
    } finally {
      request.query = {}
    }
  }

  @httpDelete("/:product_id")
  public async deleteProduct(@request() request: Request, @response() response: Response): Promise<Response> {
    try {
      await this._productService.remove(request.params.product_id);
      return response.status(this.NO_CONTENT).send();
    } catch (err) {
      const handleError = ApiExceptionManager.build(err);
      return response.status(handleError.code).send(handleError.toJSON());
    }
  }

  @httpPatch("/:product_id")
  public async updateProduct(@request() request: Request, @response() response: Response): Promise<Response> {
    try {
      const product: Product = new Product().fromJSON({...request.body, id: request.params.product_id});
      const result = await this._productService.update(product);
      return response.status(this.OK).send(result.toJSON());
    } catch (err) {
      const handleError = ApiExceptionManager.build(err);
      return response.status(handleError.code).send(handleError.toJSON());
    }
  }

}